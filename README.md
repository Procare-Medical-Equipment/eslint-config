# ProCare ESLint config

The one definition of ProCare's JavaScript and TypeScript lint rules. Every JS/TS repo extends it, so
a rule is decided once and applies everywhere.

Public on purpose: the org's PR check runs without secrets, so it can only install what is public.
There is nothing sensitive here, only a list of rules.

## Use it

```bash
npm install --save-dev eslint "github:Procare-Medical-Equipment/eslint-config#v1"
```

`eslint.config.js`:

```js
import procare from '@procare/eslint-config'        // any JS/TS repo
// import procare from '@procare/eslint-config/react' // React apps: adds hooks and fast-refresh rules

export default [...procare]
```

`package.json`:

```json
"scripts": { "lint": "eslint ." }
```

A TypeScript repo keeps its type check alongside: `"lint": "eslint . && tsc --noEmit"`.

## What is in it

| Entry | Rules | Globals |
|---|---|---|
| `@procare/eslint-config` | ESLint recommended; plus typescript-eslint recommended on `.ts` files | Node |
| `@procare/eslint-config/react` | the above; plus React hooks and fast-refresh rules | Browser |

Nothing custom. `dist`, `build` and `coverage` are ignored.

## Changing a rule

1. Open a PR here that edits `index.js` or `react.js` and adds a fixture line to `test/` proving the rule fires.
2. An `admin` team member merges it and moves the `v1` tag.
3. Each repo picks it up when it next runs `npm update @procare/eslint-config`. The lockfile pins the
   exact commit until then, so nothing changes under a repo without a commit in that repo.

A repo may add stricter rules after the spread. Turning a shared rule off in a repo needs a dated
`LINT DEBT` comment block, the same as today.

## Check

`npm test` lints deliberately broken fixtures and fails if a rule that should fire does not.
