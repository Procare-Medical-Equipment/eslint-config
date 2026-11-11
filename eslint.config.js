// This repo lints itself with its own base rules. Fixtures are broken on purpose.
import { globalIgnores } from 'eslint/config'
import procare from './index.js'

export default [globalIgnores(['test/fixtures']), ...procare]
