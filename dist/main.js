(()=>{"use strict";!function(){let e=document.createElement("div");e.classList.add("content");let t=document.createElement("h1");t.textContent="Page 1: Welcome to Restaurant X",e.appendChild(t);let n=document.createElement("button");n.textContent="Menu",n.addEventListener("click",(()=>{console.log("button clicked"),function(){let e=document.querySelector(".content");document.body.removeChild(e);let t=document.createElement("div"),n=document.createElement("h1");n.textContent="Page 2: Menu",t.appendChild(n),document.body.appendChild(t)}()})),e.appendChild(n);let d=document.createElement("button");d.textContent="Contact Us",d.addEventListener("click",(()=>{console.log("button clicked"),function(){let e=document.querySelector(".content");document.body.removeChild(e);let t=document.createElement("div"),n=document.createElement("h1");n.textContent="Page 3: About Us",t.appendChild(n),document.body.appendChild(t)}()})),e.appendChild(d),document.body.appendChild(e)}()})();