import{a as R,i as N,S as Q,N as W,K as M,M as P}from"./assets/vendor-ed0fd6dc.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))s(c);new MutationObserver(c=>{for(const o of c)if(o.type==="childList")for(const A of o.addedNodes)A.tagName==="LINK"&&A.rel==="modulepreload"&&s(A)}).observe(document,{childList:!0,subtree:!0});function t(c){const o={};return c.integrity&&(o.integrity=c.integrity),c.referrerPolicy&&(o.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?o.credentials="include":c.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(c){if(c.ep)return;c.ep=!0;const o=t(c);fetch(c.href,o)}})();const D="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUAAAAEJCAYAAADlx/4OAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAONSURBVHgB7d29cdRQFIDRK+FgyVzC0gA2HbgE1AEJsBmYCqABZkOPE0qQqYAW6AC5gyUj8kNOwJ4NVrY1s9LecwLN+M3LvPMF+nm3CmC4dvUmqvi2c1+5OY/mch1MWh3AQywH7arqk2DyBBBISwCBtAQQSEsAgbQEEEhLAIG0BBBISwDhYbpBu0pcB5NXBfAw7Wq5c09z0QUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADTVgXT0749jar+0f97jv+tlZvzaC7XAYzmKJigZ6f95fjeUlWfBDCqOgCSEkAgLQGcpm5rpcR1AKPyEGSq2o/9PcA//+8DNhddAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPPkRGjmx9hQRmIsJjNkbCjjMBQJSEsAgbQEkDnqtlaMDeURPARhnowNBQAAAAAAAAAAAAAAAAAAAACAA+E4LOCwtavb64uoqq8R5c4cmfhiJgiQwVlfvNf3Vqr45URoIC0BBNISQCAtD0GAw9e+u7329wDrO/OkF1cBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAExiLCYfmavWrvy537OqiLF5Fs95EYgajw+FZDtvz5ziSE0AgLQEE0hJAIC0BBNISQCAtAQTSEkAgLQGEw9Pt3lI2EYvUL0HfOgrgsNx+4bHzJefnm+xfgQAAAAAAAAAAAAAAzJKZIOzWrt70v5RvO/eVm/NoLtcBM+FbYIZYDtpV1ScBMyKAQFoCCKQlgEBaAgikJYBAWgIIpCWAQFoCyBDdoF0lrgNmxJcgDNOuljv3NBddAAAAAAAAAPvlKTCwH0PPmdxWotx8GuPsSe8BAvtyFo9TRVW/jBEIIJCWAAJpCSCQlgACaQkgkJYAAmkJIJCWAAJpCSCQlgACaQkgkJYAAmkJILAvXTxWid8xAsdhAfvTrs7iURY/o1lvAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMquCp/v+/kOU6vTf3yWuo7n4HMCkCeAYrlZla63Eiz6CXQCTVQdAUgIIpCWAoyib7bXFJoBJOwqerlRNf13eWemiWQsgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAdPwF9+VsdVMPze8AAAAASUVORK5CYII=",F="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKoAAACECAYAAAAA0LDEAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAITSURBVHgB7d3BjdNAGAXg37s5hFtKiKgg2wElJB0sB8QuF1qgA3KC7cJ0QDogdJAScoMLGSYgSHYjOYjDemb9fZIj2fEhip5s69meaYIyfbr9EpFmHXtsIo2vYrHcxgBcBIXqDOneNOL7JAZCUKmCoFIFQaUKgkoVBJUqCCpVENRybbq/Trk/HQ+iQ90bBWXal/mdPemz7VDKfgAAAAAAAAAAAAAAAAAAAAAAAADgfzTR3s6jSe+PNq1j/nERUJBRRJrHrzmL/kjTgMIYcZoqCCpVyKf+H8uIy/R3S9p9DQAAAAAAAAAAAAD4N01wqn01i7ic/F4Zr2Ox3Aa9GgX3ta+X0TRvDxu+rfPHVdArr6KcaCbd6/RBUKmCoJ6VXJ8WwDXqqXeRYnVY3a0DAAAAAAAAAAB4eryKQnlOppSKlcf8KNDDKaXi2oPTVEFQqYJTPwUypRQAAAAAAAAAAAAAAAAAAAAAAMCQGciXg/YmJyI1Z2Mxv0vxyIzmx7FpXtq8TDr2WeXlZTwyQeXYNB9NZ2f2uY4egmogX6ogqFRBUKmCoFIFQaUKgkoVyqqnCi6ch+FiG7E7999uogel9ajTKLRwHoTFh3U+WDyP+7PmPTBeRw/KuoXa3rzIv+jz2f3md279DoxrVKogqFRBUKmCoFIFQaUKgkoVCutRyy2c6Vd5fWT7ZpbD2lH458J5sdwGg/ITMAtZKay3i5AAAAAASUVORK5CYII=",x=document.querySelector(".menu-btn"),w=document.querySelector(".btn-close"),f=document.querySelector(".mobile-container"),K=document.querySelectorAll(".menu-item-nav"),j=document.querySelector("body"),Y=document.querySelector(".social-list-box"),U=document.querySelector(".green-box"),J=()=>{f.classList.toggle("show"),x.classList.toggle("disabled"),w.classList.toggle("show"),j.classList.toggle("no-scroll")};x.addEventListener("click",J);w.addEventListener("click",J);K.forEach(e=>{e.addEventListener("click",()=>{f.classList.remove("show"),w.classList.remove("show"),x.classList.remove("disabled"),j.classList.remove("no-scroll")})});const i=document.querySelector(".switch-checkbox"),r=document.querySelector(".switch-checkbox-mob"),V=document.querySelector(".icon-menu"),$=document.querySelector(".icon-menu-close");r.addEventListener("change",function(){S(r.checked),i.checked=r.checked});i.addEventListener("change",function(){S(i.checked),r.checked=i.checked});function S(e){document.body.style.backgroundColor=e?"#292929":"#f0f0f0",document.body.style.color=e?"#f0f0f0":"#292929",V.style.fill=e?"#f0f0f0":"#292929",$.style.stroke=e?" #f0f0f0":"#292929",f.style.backgroundColor=e?"#292929":"#f0f0f0",U.style.backgroundColor=e?"#204136":"#BCDFD1",Y.style.backgroundColor=e?"#2a2d32":"#E4E5E6"}S(i.checked||r.checked);const O=document.querySelector(".background");O.style.setProperty("--background-image",`url(${D})`);const H=document.querySelector(".background");H.style.setProperty("--background-image-bottom",`url(${F})`);const X="/TalentStack/assets/power-fd80ffc2.webp",G="/TalentStack/assets/power-2x-3f9fafa4.webp",z="/TalentStack/assets/power-min-dc5a1c34.jpg",Z="/TalentStack/assets/power-2x-min-7a1fbbd3.jpg",_="/TalentStack/assets/mimino-2b5b8a74.webp",ee="/TalentStack/assets/mimino-2x-de044129.webp",te="/TalentStack/assets/mimino-min-3819552e.jpg",se="/TalentStack/assets/mimino-2x-min-494fbcaf.jpg",oe="/TalentStack/assets/vyshyvanka-de727801.webp",ce="/TalentStack/assets/vyshyvanka-2x-841e8400.webp",ne="/TalentStack/assets/vyshyvanka-min-3a9dd024.jpg",ae="/TalentStack/assets/vyshyvanka-2x-min-a051def3.jpg",Ae="/TalentStack/assets/green-c088cbc4.webp",ie="/TalentStack/assets/green-2x-99340e65.webp",re="/TalentStack/assets/green-min-9879c57a.jpg",le="/TalentStack/assets/green-2x-min-b0b2c1f7.jpg",ge="/TalentStack/assets/wallet-b3019c59.webp",de="/TalentStack/assets/wallet-2x-f516c841.webp",pe="/TalentStack/assets/wallet-min-86041c09.jpg",me="/TalentStack/assets/wallet-2x-min-5b295b0c.jpg",ue="/TalentStack/assets/chego-95fbcdda.webp",be="/TalentStack/assets/chego-2x-4d940ca7.webp",xe="/TalentStack/assets/chego-min-b5c2f6e2.jpg",we="/TalentStack/assets/chego-2x-min-5f3c1d1b.jpg",fe="/TalentStack/assets/energy-c6c58d07.webp",Se="/TalentStack/assets/energy-2x-5118f44d.webp",ye="/TalentStack/assets/energy-min-d20414c1.jpg",he="/TalentStack/assets/energy-2x-min-8cd25da6.jpg",ke="/TalentStack/assets/fruitbox-d08ffba9.webp",ve="/TalentStack/assets/fruitbox-2x-11e54913.webp",Te="/TalentStack/assets/fruitbox-min-0db2fa14.jpg",je="/TalentStack/assets/fruitbox-2x-min-051da1fe.jpg",Je="/TalentStack/assets/english-e6713cd4.webp",Ce="/TalentStack/assets/english-2x-7dc8952f.webp",Ee="/TalentStack/assets/english-min-df59428e.jpg",Be="/TalentStack/assets/english-2x-min-111f89b3.jpg",Le="/TalentStack/assets/starlight-efcf2d1a.webp",Ie="/TalentStack/assets/starlight-2x-4b86cd2d.webp",qe="/TalentStack/assets/starlight-min-5b96ea05.jpg",Re="/TalentStack/assets/starlight-2x-min-63c6cf4f.jpg",C=[{images:{webp:{"1x":X,"2x":G},jpg:{"1x":z,"2x":Z}},skills:"React, JavaScript, Node JS, Git",title:"power pulse webservice"},{images:{webp:{"1x":_,"2x":ee},jpg:{"1x":te,"2x":se}},skills:"React, JavaScript, Node JS, Git",title:"mimino website"},{images:{webp:{"1x":oe,"2x":ce},jpg:{"1x":ne,"2x":ae}},skills:"React, JavaScript, Node JS, Git",title:"vyshyvanka vibes Landing Page"},{images:{webp:{"1x":Ae,"2x":ie},jpg:{"1x":re,"2x":le}},skills:"React, JavaScript, Node JS, Git",title:"green harvest online store"},{images:{webp:{"1x":ge,"2x":de},jpg:{"1x":pe,"2x":me}},skills:"React, JavaScript, Node JS, Git",title:"wallet webservice"},{images:{webp:{"1x":ue,"2x":be},jpg:{"1x":xe,"2x":we}},skills:"React, JavaScript, Node JS, Git",title:"chego jewelry website"},{images:{webp:{"1x":fe,"2x":Se},jpg:{"1x":ye,"2x":he}},skills:"React, JavaScript, Node JS, Git",title:"energy flow webservice"},{images:{webp:{"1x":ke,"2x":ve},jpg:{"1x":Te,"2x":je}},skills:"React, JavaScript, Node JS, Git",title:"fruitbox online store"},{images:{webp:{"1x":Je,"2x":Ce},jpg:{"1x":Ee,"2x":Be}},skills:"React, JavaScript, Node JS, Git",title:"english excellence webservice"},{images:{webp:{"1x":Le,"2x":Ie},jpg:{"1x":qe,"2x":Re}},skills:"React, JavaScript, Node JS, Git",title:"starlight studio landing page"}],Ne="/TalentStack/assets/account-img1x-7dbf7516.png",Qe="/TalentStack/assets/account-img2x-591d9b52.png";document.querySelector(".accountImg").src=Ne;document.querySelector(".accountImg").srcset=Qe;const p=document.querySelector(".first-skills-list"),m=document.querySelector(".second-skills-list"),h=["HTML/CSS","JavaScript","React","Node.js","React Native","Typescript","HTML/CSS","JavaScript","React","Node.js","React Native","Typescript","HTML/CSS","Typescript"];function E(){const e=window.innerWidth;p.innerHTML="",m.innerHTML="",h.forEach(n=>{const t=document.createElement("li");t.className="skills-item green-mark",t.textContent=n;const s=document.createElement("li");s.className="skills-item black-mark",s.textContent=n,p.appendChild(t),m.appendChild(s)}),e>360&&h.forEach(n=>{const t=document.createElement("li");t.className="skills-item green-mark",t.textContent=n;const s=document.createElement("li");s.className="skills-item black-mark",s.textContent=n,p.appendChild(t),m.appendChild(s)})}E();window.addEventListener("resize",E);const y="/TalentStack/assets/icons-67c8d4a2.svg";function d(e,n){document.querySelectorAll(`.${e}`).forEach(s=>{s.innerHTML=`
      <svg class="benefits-svg-icon" width="24" height="24">
        <use href="${y}#${n}"></use>
      </svg>
    `})}d("icon-user-container","icon-user");d("icon-message-container","icon-message");d("icon-brush-container","icon-brush");d("icon-hourglass-container","icon-hourglass");const k="/TalentStack/assets/about-me-mobile-d61a7e0d.png",We="/TalentStack/assets/about-me-mobile@2x-d353a87c.png",Me="/TalentStack/assets/about-me-tablet-93a5c4e7.png",Pe="/TalentStack/assets/about-me-tablet@2x-1efddc38.png",De="/TalentStack/assets/about-me-desktop-147f2927.png",Fe="/TalentStack/assets/about-me-desktop@2x-6c1beb91.png",Ke=document.querySelector(".image-container"),Ye=[{media:"(min-width: 1280px)",srcset:`${De} 1x, ${Fe} 2x`},{media:"(min-width: 768px) and (max-width: 1279px)",srcset:`${Me} 1x, ${Pe} 2x`}],Ue=Ye.map(e=>`
  <source
    media="${e.media}"
    srcset="${e.srcset}"
  />
`).join(""),Ve=`
  <picture>
    ${Ue}
    <img
      src="${k}"
      srcset="${k} 1x, ${We} 2x"
      alt="developer with laptop"
      class="about-img"
    />
  </picture>
`;Ke.insertAdjacentHTML("beforeend",Ve);function $e(e,n,t,s){return` <svg class="${n}" width="${t}" height="${s}">
          <use href="${y}#${e}">
          </use>
        </svg>`}function B(e,n,t,s,c){typeof e=="string"&&(e=document.querySelector(e));const o=$e(n,t,s,c);e.insertAdjacentHTML("beforeend",o)}B(".swiper-button-prev","icon-arrow-narrow-left","arrow-icon",24,24);B(".swiper-button-next","icon-arrow-narrow-right","arrow-icon",24,24);function v(e){N.show({message:e,image:"../img/bi_x-octagon.svg",messageColor:"#FFF",position:"topRight",backgroundColor:"#d66c66",maxWidth:"472px",imageWidth:24})}function Oe(e){return` <li class="reviews-item swiper-slide" data-id="${e._id}" tabindex="0">
       <div class="reviews-content ">
       <p>${e.review}</p>
        </div>
        <div class="block-author-review">
          <img class="author-photo-review" src="${e.avatar_url}" alt="photo author">
          <p class="author-name-review">${e.author}</p>
        </div>
      </li>`}const L=document.querySelector(".swiper-button-prev"),I=document.querySelector(".swiper-button-next");function u(e){const n=document.querySelector(".reviews-list"),t=document.querySelector(".reviews-not-found");e=e||[],e.length?n.innerHTML=e.map(Oe).join(""):(L.disabled=!0,I.disabled=!0,n.classList.add("hidden"),t.classList.remove("hidden"))}function He(){const e=new Q(".swiper",{modules:[W,M,P],navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},autoHeight:!1,breakpoints:{320:{slidesPerView:1,spaceBetween:32},1280:{slidesPerView:2,spaceBetween:32}},keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:{invert:!1,forceToAxis:!0}});document.querySelectorAll(".swiper-slide").forEach((t,s)=>{t.addEventListener("focus",()=>{e.slideTo(s)})}),document.addEventListener("keydown",function(t){if(t.key==="Tab"){const s=document.activeElement;if(s&&s.classList.contains("swiper-slide")){t.shiftKey?e.slidePrev():e.slideNext(),t.preventDefault();const c=document.querySelector(".swiper-slide-active");c&&c.focus()}}}),e.on("slideChange",()=>{L.disabled=e.isBeginning,I.disabled=e.isEnd})}R.get("https://portfolio-js.b.goit.study/api/reviews").then(e=>{e.status===200?(u(e.data),He()):(v("Sorry, something went wrong. Try one more time."),u([]))}).catch(()=>{v("Sorry, something went wrong. Try one more time."),u([])});let b=!1;const a=document.querySelector("#reviews");document.querySelector("#switch").addEventListener("click",()=>{b=!b,b?(a.style.setProperty("--review-card-bg","#2A2D32"),a.style.setProperty("--review-btn-hover-bg","#3B3F45"),a.style.setProperty("--review-btn-arrow-color","#F0F0F0"),a.style.setProperty("--review-btn-border-color","#2A2D32")):(a.style.setProperty("--review-card-bg","var(--light-grey)"),a.style.setProperty("--review-btn-hover-bg","var(--light-grey)"),a.style.setProperty("--review-btn-arrow-color","#292929"),a.style.setProperty("--review-btn-border-color","rgba(41, 41, 41, 0.30)"))});const T=document.querySelector(".projects-list"),l=document.querySelector(".projects-load-btn");let g=0;const q=(e,n)=>{const t=e+n,s=C.slice(e,t),c=s.map(o=>`
    <li class="projects-item">
      <picture>
        <source class="projects-item-img" srcset="${o.images.webp["1x"]} 1x, ${o.images.webp["2x"]} 2x" type="image/webp">
        <source class="projects-item-img" srcset="${o.images.jpg["1x"]} 1x, ${o.images.jpg["2x"]} 2x" type="image/jpeg">
        <img class="projects-item-img" src="${o.images.jpg["1x"]}" alt="${o.title}">
      </picture>
      <p class="projects-item-skills">${o.skills}</p>
      <div class="projects-item-bottom">
        <h3 class="projects-item-title">${o.title}</h3>
        <a href="https://github.com/anastasiiatarasiuk/TalentStack" target="_blank" class="projects-item-btn">
          VISIT
          <svg class="projects-item-btn-icon">
            <use href="${y}#icon-arrow-visit"></use>
          </svg>
        </a>
      </div>
    </li>
  `).join("");T.insertAdjacentHTML("beforeend",c),s.forEach((o,A)=>{setTimeout(()=>{T.querySelector(`li:nth-child(${e+A+1})`).classList.add("show")},100*A)})},Xe=e=>{l.classList.add("load"),setTimeout(()=>{l.classList.remove("load"),g+=3,q(g,3),g>=C.length-1&&(l.style.display="none"),setTimeout(()=>{window.scrollBy({top:300,behavior:"smooth"})},100)},1e3)};q(g,3);l.addEventListener("click",Xe);
//# sourceMappingURL=commonHelpers.js.map
