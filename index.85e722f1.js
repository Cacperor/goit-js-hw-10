!function(){function n(n){return n&&n.__esModule?n.default:n}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=e.parcelRequired7c6;null==r&&((r=function(n){if(n in t)return t[n].exports;if(n in o){var e=o[n];delete o[n];var r={id:n,exports:{}};return t[n]=r,e.call(r.exports,r,r.exports),r.exports}var a=new Error("Cannot find module '"+n+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(n,e){o[n]=e},e.parcelRequired7c6=r);var a=r("bpxeT"),c=r("2TvXO"),i=r("37gXm"),l=document.getElementById("search-box"),u=document.querySelector(".country-list"),s=document.querySelector(".country-info"),f=document.querySelector(".notification"),g=_.debounce(n(a)(n(c).mark((function e(){var t,o;return n(c).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t=l.value.trim(),u.innerHTML="",s.innerHTML="",f.textContent="",""!==t){n.next=6;break}return n.abrupt("return");case 6:return n.prev=6,n.next=9,(0,i.fetchCountries)(t);case 9:(o=n.sent).length>10?Notiflix.Notify.info("Too many matches found. Please enter a more specific name."):o.length>=2&&o.length<=10?p(o):1===o.length?m(o[0]):Notiflix.Notify.info("Oops, there is no country with that name"),n.next=16;break;case 13:n.prev=13,n.t0=n.catch(6),Notiflix.Notify.info("".concat(n.t0.message));case 16:case"end":return n.stop()}}),e,null,[[6,13]])}))),300),p=function(n){u.innerHTML="",n.forEach((function(n){var e=document.createElement("li"),t=d(n);console.log("Country:",n),console.log("Flag URL:",t),e.innerHTML='\n      <img src="'.concat(t,'" alt="').concat(n.name.common,'" />\n      <span>').concat(n.name.common,"</span>\n    "),e.addEventListener("click",(function(){return m(n)})),u.appendChild(e)}))},d=function(n){return n.flags&&n.flags.svg?n.flags.svg:n.flag&&"string"==typeof n.flag?n.flag:""},m=function(n){var e="object"==typeof n.languages?Object.keys(n.languages).join(", "):"No information",t='\n      <img src="'.concat(d(n),'" alt="').concat(n.name,'" />\n      <h2>').concat(n.name.common,"</h2>\n      <p><strong>Capital:</strong> ").concat(n.capital,"</p>\n      <p><strong>Population:</strong> ").concat(n.population,"</p>\n      <p><strong>Languages:</strong> ").concat(e,"</p>\n    ");s.innerHTML=t};l.addEventListener("input",g)}();
//# sourceMappingURL=index.85e722f1.js.map
