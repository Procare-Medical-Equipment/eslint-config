// The one check: fails if the shared rules stop catching what they exist to catch.
import assert from 'node:assert/strict'
import { ESLint } from 'eslint'
import base from '../index.js'
import react from '../react.js'

const rulesHit = async (config, file) => {
  const eslint = new ESLint({ overrideConfigFile: true, overrideConfig: config, cwd: import.meta.dirname })
  const [result] = await eslint.lintFiles([file])
  return result.messages.map((m) => m.ruleId)
}

assert.deepEqual(await rulesHit(base, 'fixtures/good.ts'), [], 'clean TypeScript must pass')

const ts = await rulesHit(base, 'fixtures/bad.ts')
assert.ok(ts.includes('@typescript-eslint/no-explicit-any'), 'any must be flagged')
assert.ok(ts.includes('@typescript-eslint/no-unused-vars'), 'unused variable must be flagged in TS')

const jsHits = await rulesHit(base, 'fixtures/bad.js')
assert.ok(jsHits.includes('no-unused-vars'), 'unused variable must be flagged in JS')
assert.ok(jsHits.includes('valid-typeof'), 'typeof typo must be flagged')

const hook = await rulesHit(react, 'fixtures/bad-hook.tsx')
assert.ok(hook.includes('react-hooks/rules-of-hooks'), 'conditional hook must be flagged')

console.log('shared rules catch what they should')
