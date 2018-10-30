/* debug.css | MIT License | zaydek.github.com/debug.css */ 
if (!("is_debugging" in window)) { 
  is_debugging = false; 
  var debug_el = document.createElement("style"); 
  debug_el.append(document.createTextNode(
    `*:not(g):not(path) { 
      color: hsla(210, 100%, 100%, 0.9) !important; 
      background: hsla(210, 100%,  50%, 0.5) !important; 
      outline: solid 0.25rem hsla(210, 100%, 100%, 0.5) !important; 
      box-shadow: none !important; 
      filter: none !important; 
    }`
  ));
} 
function enable_debugger() { 
  if (!is_debugging) { 
    document.head.appendChild(debug_el); 
    is_debugging = true; 
  } 
} 
function disable_debugger() { 
  if (is_debugging) { 
    document.head.removeChild(debug_el); is_debugging = false; 
  } 
} 
!is_debugging ? enable_debugger() : disable_debugger();
