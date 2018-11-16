export { default as theme } from "../src/wizeline-theme";

import intro from "./intro.mdx";
import dom from "./dom.mdx";
import events from "./events.mdx";
import animations from "./animations.mdx";
import goodpractices from "./goodpractices.mdx";
import thanks from "./thanks.mdx";

export default [
  ...intro,
  ...dom,
  ...events,
  ...goodpractices,
  ...animations,
  ...thanks
];
