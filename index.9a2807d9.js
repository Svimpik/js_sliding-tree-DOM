var e=document.querySelector(".tree");document.querySelectorAll("li").forEach(function(e){if(e.children.length){var t,n;t="span",(n=document.createElement(t)).textContent=e.firstChild.textContent,e.replaceChild(n,e.firstChild)}}),e.addEventListener("click",function(e){if("SPAN"===e.target.tagName){var t=e.target.parentElement.querySelector("ul");t&&(t.hidden=!t.hidden)}});
//# sourceMappingURL=index.9a2807d9.js.map
