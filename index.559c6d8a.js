var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},o={},t=n.parcelRequired7c6;null==t&&((t=function(n){if(n in e)return e[n].exports;if(n in o){var t=o[n];delete o[n];var i={id:n,exports:{}};return e[n]=i,t.call(i.exports,i,i.exports),i.exports}var a=new Error("Cannot find module '"+n+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(n,e){o[n]=e},n.parcelRequired7c6=t);var i=t("gXocT");const a=document.getElementById("search-box"),r=document.querySelector(".country-list"),l=document.querySelector(".country-info"),c=document.querySelector(".notification"),s=_.debounce((async()=>{const n=a.value.trim();if(r.innerHTML="",l.innerHTML="",c.textContent="",""!==n)try{const e=await(0,i.fetchCountries)(n);e.length>10?notiflix.notification("Too many matches found. Please enter a more specific name."):e.length>=2&&e.length<=10?g(e):1===e.length?u(e[0]):notiflix.notification("Oops, there is no country with that name")}catch(n){notiflix.notification(`Error: ${n.message}`)}}),300),g=n=>{r.innerHTML="",n.forEach((n=>{const e=document.createElement("li"),o=f(n);console.log("Country:",n),console.log("Flag URL:",o),e.innerHTML=`\n      <img src="${o}" alt="${n.name.common}" />\n      <span>${n.name.common}</span>\n    `,e.addEventListener("click",(()=>u(n))),r.appendChild(e)}))},f=n=>n.flags&&n.flags.svg?n.flags.svg:n.flag&&"string"==typeof n.flag?n.flag:"",u=n=>{const e="object"==typeof n.languages?Object.keys(n.languages).join(", "):"No information",o=`\n      <img src="${f(n)}" alt="${n.name}" />\n      <h2>${n.name.common}</h2>\n      <p><strong>Capital:</strong> ${n.capital}</p>\n      <p><strong>Population:</strong> ${n.population}</p>\n      <p><strong>Languages:</strong> ${e}</p>\n    `;l.innerHTML=o};a.addEventListener("input",s);
//# sourceMappingURL=index.559c6d8a.js.map
