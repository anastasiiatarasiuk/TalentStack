(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function g(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=g(e);fetch(e.href,o)}})();const l=document.querySelector(".menu-btn"),u=document.querySelector(".btn-close"),d=document.querySelector(".mobile-container"),y=document.querySelectorAll(".menu-item-nav"),f=document.querySelector("body"),b=document.querySelector(".social-list-box"),h=document.querySelector(".green-box"),m=()=>{d.classList.toggle("show"),l.classList.toggle("disabled"),u.classList.toggle("show"),f.classList.toggle("no-scroll")};l.addEventListener("click",m);u.addEventListener("click",m);y.forEach(t=>{t.addEventListener("click",()=>{d.classList.remove("show"),u.classList.remove("show"),l.classList.remove("disabled"),f.classList.remove("no-scroll")})});const c=document.querySelector(".switch-checkbox"),n=document.querySelector(".switch-checkbox-mob"),L=document.querySelector(".icon-menu"),p=document.querySelector(".icon-menu-close");n.addEventListener("change",function(){i(n.checked),c.checked=n.checked});c.addEventListener("change",function(){i(c.checked),n.checked=c.checked});function i(t){document.body.style.backgroundColor=t?"#292929":"#f0f0f0",document.body.style.color=t?"#f0f0f0":"#292929",L.style.fill=t?"#f0f0f0":"#292929",p.style.stroke=t?" #f0f0f0":"#292929",d.style.backgroundColor=t?"#292929":"#f0f0f0",b.style.backgroundColor=t?"#2a2d32":"#E4E5E6",h.style.backgroundColor=t?"#204136":"#BCDFD1"}i(c.checked||n.checked);const S="/TalentStack/assets/account-img1x-7dbf7516.png",k="/TalentStack/assets/account-img2x-591d9b52.png";document.querySelector(".accountImg").src=S;document.querySelector(".accountImg").srcset=k;
//# sourceMappingURL=commonHelpers.js.map
