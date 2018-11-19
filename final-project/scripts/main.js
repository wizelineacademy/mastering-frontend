import "../styles/main.scss";
import "../styles/top-nav.scss"
import "../styles/mobile.scss"
import "../styles/portrait.scss"
import "../styles/landscape.scss"
import "../styles/desktop.scss"
import './slides'

// testing that `const` and arrow functions transpile correctly
const before = "Hello -world!";
const after = before
.split("")
.filter(char => char !== "-")
.join("");
console.log({ before });
console.log({ after });


