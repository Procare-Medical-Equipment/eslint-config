// ProCare rules for React apps: the base, plus React hooks and fast-refresh rules, browser globals.
//
//   import procare from '@procare/eslint-config/react'
//   export default [...procare]
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig } from 'eslint/config'
import base from './index.js'

export default defineConfig([
  ...base,
  {
    files: ['**/*.{jsx,tsx,ts}'],
    extends: [reactHooks.configs.flat.recommended, reactRefresh.configs.vite],
    languageOptions: { globals: globals.browser },
  },
])
