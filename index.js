// ProCare base rules for any JS/TS repo: ESLint recommended, plus typescript-eslint recommended on
// TypeScript files. Node globals. Nothing custom: add a rule here only when the team agrees to it,
// and it applies to every repo on the next version bump.
//
//   // eslint.config.js in a repo
//   import procare from '@procare/eslint-config'
//   export default [...procare]
import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist', 'build', 'coverage']),
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    extends: [js.configs.recommended],
    languageOptions: { globals: globals.node },
  },
  {
    files: ['**/*.{ts,mts,cts,tsx}'],
    extends: [js.configs.recommended, tseslint.configs.recommended],
    languageOptions: { globals: globals.node },
  },
])
