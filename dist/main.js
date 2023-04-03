(()=>{"use strict";var e={28:(e,t,n)=>{n.d(t,{Z:()=>c});var o=n(81),r=n.n(o),a=n(645),i=n.n(a)()(r());i.push([e.id,'* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    display: flex;\n    justify-content: center;\n}\n.container {\n    margin-top: 1rem;\n    border: 2px solid black;\n    display: grid;\n    grid-template-columns: repeat(7, minmax(200px, 1fr));\n    grid-template-rows: repeat(6, minmax(140px, 1fr));\n}\n\n.title {\n    grid-column-start: 1;\n    grid-column-end: 8;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 3rem;\n    font-weight: bolder;\n}\n\nh1 {\n    padding: 1rem;\n}\n\n.dayx {\n    border: 1px solid rgb(46, 43, 43);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.day {\n    border: 1px solid rgb(46, 43, 43);\n    display: flex;\n    flex-direction: column;\n}\n\n.day:hover {\n    background-color: antiquewhite;\n}\n\n.modal {\n    display: none;\n    padding: 1rem;\n    color: white;\n    position: fixed;\n    z-index: 2;\n    left: 50;\n    top: 50;\n    overflow: auto;\n    background-color: rgba(81, 107, 179, 0.2);\n  }\n\ninput[type="text"] {\n    padding: 5px;\n    margin: 5px;\n}\n\nbutton {\n    display: block;\n    border-top: none;\n    outline: none;\n    border-right: none;\n    border-left: none;\n    border-bottom: #02274a 1px solid;\n    padding: 3px;\n    font-size: 13px;\n}\n\nbutton:hover {\n    font-size: 16px;\n}\n\nbutton:active {\n    font-size: 15px;\n}\n\n.edit {\n    display: block;\n    border: 1px solid black;\n}\n\n.edit:hover {\n    cursor: pointer;\n    background-color: grey;\n}\n\n.note-details {\n    position: absolute;\n    background-color: white;\n    border: 1px solid #ccc;\n    padding: 10px;\n    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n    z-index: 100;\n  }',""]);const c=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);o&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],d=o.base?s[0]+o.base:s[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var p=n(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var m=r(f,o);o.byIndex=c,t.splice(c,0,{identifier:u,updater:m,references:1})}i.push(u)}return i}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=n(a[i]);t[c].references--}for(var s=o(e,r),d=0;d<a.length;d++){var l=n(a[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=s}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={id:o,exports:{}};return e[o](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),o=n(795),r=n.n(o),a=n(569),i=n.n(a),c=n(565),s=n.n(c),d=n(216),l=n.n(d),u=n(589),p=n.n(u),f=n(28),m={};m.styleTagTransform=p(),m.setAttributes=s(),m.insert=i().bind(null,"head"),m.domAPI=r(),m.insertStyleElement=l(),t()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;const v=document.querySelectorAll(".day");let b=new Date,y=b.getDate();v.forEach((e=>{if(function(e){const t=b.getFullYear(),n=b.getMonth(),o=parseInt(e.textContent,10);return n>3||t>2023||3===n&&o<y}(e))return e.style.backgroundColor="grey",void(e.style.cursor="not-allowed");e.addEventListener("click",(function(t){if("input"===t.target.tagName.toLowerCase()||"textarea"===t.target.tagName.toLowerCase()||t.target.classList.contains("edit"))return;if(Number(e.textContent)<y)return void(e.style.backgroundColor="rgb(244,232,165)");const n=document.querySelector(".modal");n&&n.remove(),function(e){const t=document.createElement("div");t.classList.add("modal");const n=document.createElement("form");t.appendChild(n);const o=document.createElement("h2");o.textContent="To-Do",n.appendChild(o);const r=document.createElement("div");n.appendChild(r),r.style.display="flex",r.style.flexDirection="column";const a=document.createElement("input");a.setAttribute("class","subject"),a.setAttribute("type","text"),a.setAttribute("placeholder","Subject"),r.appendChild(a);const i=document.createElement("input");i.setAttribute("class","date"),i.setAttribute("type","text"),i.setAttribute("placeholder","Date"),r.appendChild(i);const c=document.createElement("span");c.textContent="What to do...",n.appendChild(c);const s=document.createElement("div");n.appendChild(s);const d=document.createElement("textarea");d.setAttribute("class","description"),d.setAttribute("rows","4"),d.style.padding="5px",s.appendChild(d);const l=document.createElement("button");l.classList.add("btn"),l.setAttribute("type","submit"),l.textContent="Create",n.appendChild(l);const u=document.createElement("button");u.classList.add("btn2"),u.textContent="Close",n.appendChild(u),e.appendChild(t);let p=document.querySelector(".modal");p.style.display="flex",p.style.flexDirection="column"}(e),e.querySelector(".btn").addEventListener("click",(function(t){t.preventDefault(),t.stopPropagation();const n=t.target.closest(".modal"),o=n.querySelector(".subject"),r=n.querySelector("input[type='text']:nth-child(2)"),a=n.querySelector("textarea"),i=e.querySelector(".modal"),c=o.value;if(""!==c){const t=document.createElement("div");t.classList.add("edit"),t.textContent=c,t.dataset.date=r.value,t.dataset.description=a.value,e.appendChild(t),e.removeChild(i),t.addEventListener("click",(function(e){e.stopPropagation(),function(e){const t=e.textContent,n=e.dataset.date,o=e.dataset.description,r=document.createElement("div");r.classList.add("note-details"),r.innerHTML=`\n        <h2>${t}</h2>\n        <p>Date: ${n}</p>\n        <p>${o}</p>\n        <button class="close-note">Close</button>\n    `,e.parentElement.appendChild(r),r.querySelector(".close-note").addEventListener("click",(function(e){e.stopPropagation(),r.remove()}))}(t)}))}})),e.querySelector(".btn2").addEventListener("click",(function(t){t.stopPropagation(),function(e){const t=e.querySelector(".modal");t&&e.removeChild(t)}(e)}))}))}))})()})();