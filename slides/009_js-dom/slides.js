export { default as theme } from "../src/wizeline-theme";

import intro from "./intro.mdx";
import thanks from "./thanks.mdx";

export default [...intro, ...thanks];

// whats the dom
// Document Object Model !== html code
// it can be manipulated by js and also con differ from the html code
// for many reasons: bad formatted html becomes well formed elements in dom

// most of the time dom will be manipulated by an effect of a js event
// list of js events?
// dom is a tree of nodes
