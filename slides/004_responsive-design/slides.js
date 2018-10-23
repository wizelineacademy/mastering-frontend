export { default as theme } from '../src/wizeline-theme'

import intro from './intro.mdx'
import mediaQueries from './mediaQueries.mdx'
import patterns from './patterns.mdx'
import units from './units.mdx'
import cssInTheWild from './cssInTheWild.mdx'
import thanks from './thanks.mdx'

export default [
  ...intro,
  ...patterns,
  ...mediaQueries,
  ...units,
  ...cssInTheWild,
  ...thanks,
]
