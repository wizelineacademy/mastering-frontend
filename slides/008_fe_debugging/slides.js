export { default as theme } from '../src/wizeline-theme'

import intro from './intro.mdx'
import howToDebugAnything from './howToDebugAnything.mdx'
import consoleUse from './consoleUse.mdx'
import chromeDevTools from './chromeDevTools.mdx'
import deb from './debugger.mdx'
import blackboxing from './blackboxing.mdx'
import networking from './networking.mdx'
import performance from './performance.mdx'
import css from './cssdebug.mdx'
import thanks from './thanks.mdx'
export default [
  ...intro,
  ...howToDebugAnything,
  ...chromeDevTools,
  ...consoleUse,
  ...deb,
  ...blackboxing,
  ...networking,
  ...performance,
  ...css,
  ...thanks
]
