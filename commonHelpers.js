import{a as L,i as I,S as q,N as R,K as N,M as Q}from"./assets/vendor-ed0fd6dc.js";(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const A of document.querySelectorAll('link[rel="modulepreload"]'))o(A);new MutationObserver(A=>{for(const t of A)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function s(A){const t={};return A.integrity&&(t.integrity=A.integrity),A.referrerPolicy&&(t.referrerPolicy=A.referrerPolicy),A.crossOrigin==="use-credentials"?t.credentials="include":A.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(A){if(A.ep)return;A.ep=!0;const t=s(A);fetch(A.href,t)}})();const W="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUAAAAEJCAYAAADlx/4OAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAONSURBVHgB7d29cdRQFIDRK+FgyVzC0gA2HbgE1AEJsBmYCqABZkOPE0qQqYAW6AC5gyUj8kNOwJ4NVrY1s9LecwLN+M3LvPMF+nm3CmC4dvUmqvi2c1+5OY/mch1MWh3AQywH7arqk2DyBBBISwCBtAQQSEsAgbQEEEhLAIG0BBBISwDhYbpBu0pcB5NXBfAw7Wq5c09z0QUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADTVgXT0749jar+0f97jv+tlZvzaC7XAYzmKJigZ6f95fjeUlWfBDCqOgCSEkAgLQGcpm5rpcR1AKPyEGSq2o/9PcA//+8DNhddAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPPkRGjmx9hQRmIsJjNkbCjjMBQJSEsAgbQEkDnqtlaMDeURPARhnowNBQAAAAAAAAAAAAAAAAAAAACAA+E4LOCwtavb64uoqq8R5c4cmfhiJgiQwVlfvNf3Vqr45URoIC0BBNISQCAtD0GAw9e+u7329wDrO/OkF1cBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAExiLCYfmavWrvy537OqiLF5Fs95EYgajw+FZDtvz5ziSE0AgLQEE0hJAIC0BBNISQCAtAQTSEkAgLQGEw9Pt3lI2EYvUL0HfOgrgsNx+4bHzJefnm+xfgQAAAAAAAAAAAAAAzJKZIOzWrt70v5RvO/eVm/NoLtcBM+FbYIZYDtpV1ScBMyKAQFoCCKQlgEBaAgikJYBAWgIIpCWAQFoCyBDdoF0lrgNmxJcgDNOuljv3NBddAAAAAAAAAPvlKTCwH0PPmdxWotx8GuPsSe8BAvtyFo9TRVW/jBEIIJCWAAJpCSCQlgACaQkgkJYAAmkJIJCWAAJpCSCQlgACaQkgkJYAAmkJILAvXTxWid8xAsdhAfvTrs7iURY/o1lvAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMquCp/v+/kOU6vTf3yWuo7n4HMCkCeAYrlZla63Eiz6CXQCTVQdAUgIIpCWAoyib7bXFJoBJOwqerlRNf13eWemiWQsgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAdPwF9+VsdVMPze8AAAAASUVORK5CYII=",D="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKoAAACECAYAAAAA0LDEAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAITSURBVHgB7d3BjdNAGAXg37s5hFtKiKgg2wElJB0sB8QuF1qgA3KC7cJ0QDogdJAScoMLGSYgSHYjOYjDemb9fZIj2fEhip5s69meaYIyfbr9EpFmHXtsIo2vYrHcxgBcBIXqDOneNOL7JAZCUKmCoFIFQaUKgkoVBJUqCCpVENRybbq/Trk/HQ+iQ90bBWXal/mdPemz7VDKfgAAAAAAAAAAAAAAAAAAAAAAAADgfzTR3s6jSe+PNq1j/nERUJBRRJrHrzmL/kjTgMIYcZoqCCpVyKf+H8uIy/R3S9p9DQAAAAAAAAAAAAD4N01wqn01i7ic/F4Zr2Ox3Aa9GgX3ta+X0TRvDxu+rfPHVdArr6KcaCbd6/RBUKmCoJ6VXJ8WwDXqqXeRYnVY3a0DAAAAAAAAAAB4eryKQnlOppSKlcf8KNDDKaXi2oPTVEFQqYJTPwUypRQAAAAAAAAAAAAAAAAAAAAAAMCQGciXg/YmJyI1Z2Mxv0vxyIzmx7FpXtq8TDr2WeXlZTwyQeXYNB9NZ2f2uY4egmogX6ogqFRBUKmCoFIFQaUKgkoVyqqnCi6ch+FiG7E7999uogel9ajTKLRwHoTFh3U+WDyP+7PmPTBeRw/KuoXa3rzIv+jz2f3md279DoxrVKogqFRBUKmCoFIFQaUKgkoVCutRyy2c6Vd5fWT7ZpbD2lH458J5sdwGg/ITMAtZKay3i5AAAAAASUVORK5CYII=",b=document.querySelector(".menu-btn"),x=document.querySelector(".btn-close"),w=document.querySelector(".mobile-container"),F=document.querySelectorAll(".menu-item-nav"),v=document.querySelector("body"),K=document.querySelector(".social-list-box"),Y=document.querySelector(".green-box"),y=()=>{w.classList.toggle("show"),b.classList.toggle("disabled"),x.classList.toggle("show"),v.classList.toggle("no-scroll")};b.addEventListener("click",y);x.addEventListener("click",y);F.forEach(e=>{e.addEventListener("click",()=>{w.classList.remove("show"),x.classList.remove("show"),b.classList.remove("disabled"),v.classList.remove("no-scroll")})});const i=document.querySelector(".switch-checkbox"),r=document.querySelector(".switch-checkbox-mob"),M=document.querySelector(".icon-menu"),U=document.querySelector(".icon-menu-close");r.addEventListener("change",function(){f(r.checked),i.checked=r.checked});i.addEventListener("change",function(){f(i.checked),r.checked=i.checked});function f(e){document.body.style.backgroundColor=e?"#292929":"#f0f0f0",document.body.style.color=e?"#f0f0f0":"#292929",M.style.fill=e?"#f0f0f0":"#292929",U.style.stroke=e?" #f0f0f0":"#292929",w.style.backgroundColor=e?"#292929":"#f0f0f0",Y.style.backgroundColor=e?"#204136":"#BCDFD1",K.style.backgroundColor=e?"#2a2d32":"#E4E5E6"}f(i.checked||r.checked);const P=document.querySelector(".background");P.style.setProperty("--background-image",`url(${W})`);const V=document.querySelector(".background");V.style.setProperty("--background-image-bottom",`url(${D})`);const O="/TalentStack/assets/power-fd80ffc2.webp",H="/TalentStack/assets/power-2x-3f9fafa4.webp",X="/TalentStack/assets/power-min-dc5a1c34.jpg",G="/TalentStack/assets/power-2x-min-7a1fbbd3.jpg",$="/TalentStack/assets/mimino-2b5b8a74.webp",z="/TalentStack/assets/mimino-2x-de044129.webp",Z="/TalentStack/assets/mimino-min-3819552e.jpg",_="/TalentStack/assets/mimino-2x-min-494fbcaf.jpg",ee="/TalentStack/assets/vyshyvanka-de727801.webp",te="/TalentStack/assets/vyshyvanka-2x-841e8400.webp",se="/TalentStack/assets/vyshyvanka-min-3a9dd024.jpg",oe="/TalentStack/assets/vyshyvanka-2x-min-a051def3.jpg",Ae="/TalentStack/assets/green-c088cbc4.webp",ce="/TalentStack/assets/green-2x-99340e65.webp",ne="/TalentStack/assets/green-min-9879c57a.jpg",ae="/TalentStack/assets/green-2x-min-b0b2c1f7.jpg",ie="/TalentStack/assets/wallet-b3019c59.webp",re="/TalentStack/assets/wallet-2x-f516c841.webp",le="/TalentStack/assets/wallet-min-86041c09.jpg",ge="/TalentStack/assets/wallet-2x-min-5b295b0c.jpg",de="/TalentStack/assets/chego-95fbcdda.webp",me="/TalentStack/assets/chego-2x-4d940ca7.webp",pe="/TalentStack/assets/chego-min-b5c2f6e2.jpg",ue="/TalentStack/assets/chego-2x-min-5f3c1d1b.jpg",be="/TalentStack/assets/energy-c6c58d07.webp",xe="/TalentStack/assets/energy-2x-5118f44d.webp",we="/TalentStack/assets/energy-min-d20414c1.jpg",fe="/TalentStack/assets/energy-2x-min-8cd25da6.jpg",Se="/TalentStack/assets/fruitbox-d08ffba9.webp",ke="/TalentStack/assets/fruitbox-2x-11e54913.webp",he="/TalentStack/assets/fruitbox-min-0db2fa14.jpg",ve="/TalentStack/assets/fruitbox-2x-min-051da1fe.jpg",ye="/TalentStack/assets/english-e6713cd4.webp",Te="/TalentStack/assets/english-2x-7dc8952f.webp",je="/TalentStack/assets/english-min-df59428e.jpg",Je="/TalentStack/assets/english-2x-min-111f89b3.jpg",Ce="/TalentStack/assets/starlight-efcf2d1a.webp",Ee="/TalentStack/assets/starlight-2x-4b86cd2d.webp",Be="/TalentStack/assets/starlight-min-5b96ea05.jpg",Le="/TalentStack/assets/starlight-2x-min-63c6cf4f.jpg",T=[{images:{webp:{"1x":O,"2x":H},jpg:{"1x":X,"2x":G}},skills:"React, JavaScript, Node JS, Git",title:"power pulse webservice"},{images:{webp:{"1x":$,"2x":z},jpg:{"1x":Z,"2x":_}},skills:"React, JavaScript, Node JS, Git",title:"mimino website"},{images:{webp:{"1x":ee,"2x":te},jpg:{"1x":se,"2x":oe}},skills:"React, JavaScript, Node JS, Git",title:"vyshyvanka vibes Landing Page"},{images:{webp:{"1x":Ae,"2x":ce},jpg:{"1x":ne,"2x":ae}},skills:"React, JavaScript, Node JS, Git",title:"green harvest online store"},{images:{webp:{"1x":ie,"2x":re},jpg:{"1x":le,"2x":ge}},skills:"React, JavaScript, Node JS, Git",title:"wallet webservice"},{images:{webp:{"1x":de,"2x":me},jpg:{"1x":pe,"2x":ue}},skills:"React, JavaScript, Node JS, Git",title:"chego jewelry website"},{images:{webp:{"1x":be,"2x":xe},jpg:{"1x":we,"2x":fe}},skills:"React, JavaScript, Node JS, Git",title:"energy flow webservice"},{images:{webp:{"1x":Se,"2x":ke},jpg:{"1x":he,"2x":ve}},skills:"React, JavaScript, Node JS, Git",title:"fruitbox online store"},{images:{webp:{"1x":ye,"2x":Te},jpg:{"1x":je,"2x":Je}},skills:"React, JavaScript, Node JS, Git",title:"english excellence webservice"},{images:{webp:{"1x":Ce,"2x":Ee},jpg:{"1x":Be,"2x":Le}},skills:"React, JavaScript, Node JS, Git",title:"starlight studio landing page"}],Ie="/TalentStack/assets/account-img1x-7dbf7516.png",qe="/TalentStack/assets/account-img2x-591d9b52.png";document.querySelector(".accountImg").src=Ie;document.querySelector(".accountImg").srcset=qe;const m=document.querySelector(".first-skills-list"),p=document.querySelector(".second-skills-list"),S=["HTML/CSS","JavaScript","React","Node.js","React Native","Typescript","HTML/CSS","JavaScript","React","Node.js","React Native","Typescript","HTML/CSS","Typescript"];function j(){const e=window.innerWidth;m.innerHTML="",p.innerHTML="",S.forEach(c=>{const s=document.createElement("li");s.className="skills-item green-mark",s.textContent=c;const o=document.createElement("li");o.className="skills-item black-mark",o.textContent=c,m.appendChild(s),p.appendChild(o)}),e>360&&S.forEach(c=>{const s=document.createElement("li");s.className="skills-item green-mark",s.textContent=c;const o=document.createElement("li");o.className="skills-item black-mark",o.textContent=c,m.appendChild(s),p.appendChild(o)})}j();window.addEventListener("resize",j);const J="/TalentStack/assets/icons-789c940d.svg";function d(e,c){document.querySelectorAll(`.${e}`).forEach(o=>{o.innerHTML=`
      <svg class="benefits-svg-icon" width="24" height="24">
        <use href="${J}#${c}"></use>
      </svg>
    `})}d("icon-user-container","icon-user");d("icon-message-container","icon-message");d("icon-brush-container","icon-brush");d("icon-hourglass-container","icon-hourglass");const a={mobile:{"1x":"../img/about-me-img/about-me-mobile.png","2x":"../img/about-me-img/about-me-mobile@2x.png"},tablet:{"1x":"../img/about-me-img/about-me-tablet.png","2x":"../img/about-me-img/about-me-tablet@2x.png"},desktop:{"1x":"../img/about-me-img/about-me-desktop.png","2x":"../img/about-me-img/about-me-desktop@2x.png"}},Re=document.querySelector(".image-container"),Ne=`
  <picture>
    <source
      media="(min-width: 1280px)"
      srcset="${a.desktop["1x"]} 1x, ${a.desktop["2x"]} 2x"
    />
    <source
      media="(min-width: 768px) and (max-width: 1279px)"
      srcset="${a.tablet["1x"]} 1x, ${a.tablet["2x"]} 2x"
    />
    <img
      src="${a.mobile["1x"]}"
      srcset="${a.mobile["2x"]}"
      alt="developer with laptop"
      class="about-img"
    />
  </picture>
`;Re.insertAdjacentHTML("beforeend",Ne);function k(e){I.show({message:e,image:"../img/bi_x-octagon.svg",messageColor:"#FFF",position:"topRight",backgroundColor:"#d66c66",maxWidth:"472px",imageWidth:24})}function Qe(e){return` <li class="reviews-item swiper-slide" data-id="${e._id}" tabindex="0">
       <div class="reviews-content ">
       <p>${e.review}</p>
</div>
        <div class="block-author-review">
          <img class="author-photo-review" src="${e.avatar_url}" alt="photo author">
          <p class="author-name-review">${e.author}</p>
        </div>
      </li>`}const C=document.querySelector(".swiper-button-prev"),E=document.querySelector(".swiper-button-next");function u(e){const c=document.querySelector(".reviews-list"),s=document.querySelector(".reviews-not-found");e=e||[],e.length?c.innerHTML=e.map(Qe).join(""):(C.disabled=!0,E.disabled=!0,c.classList.add("hidden"),s.classList.remove("hidden"))}function We(){const e=new q(".swiper",{modules:[R,N,Q],navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},autoHeight:!1,breakpoints:{320:{slidesPerView:1,spaceBetween:32},1280:{slidesPerView:2,spaceBetween:32}},keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:{invert:!1,forceToAxis:!0}});document.querySelectorAll(".swiper-slide").forEach((s,o)=>{s.addEventListener("focus",()=>{e.slideTo(o)})}),document.addEventListener("keydown",function(s){if(s.key==="Tab"){const o=document.activeElement;if(o&&o.classList.contains("swiper-slide")){s.shiftKey?e.slidePrev():e.slideNext(),s.preventDefault();const A=document.querySelector(".swiper-slide-active");A&&A.focus()}}}),e.on("slideChange",()=>{C.disabled=e.isBeginning,E.disabled=e.isEnd})}L.get("https://portfolio-js.b.goit.study/api/reviews").then(e=>{e.status===200?(u(e.data),We()):(k("Sorry, something went wrong. Try one more time."),u([]))}).catch(()=>{k("Sorry, something went wrong. Try one more time."),u([])});const h=document.querySelector(".projects-list"),l=document.querySelector(".projects-load-btn");let g=0;const B=(e,c)=>{const s=e+c,o=T.slice(e,s),A=o.map(t=>`
    <li class="projects-item">
      <picture>
        <source class="projects-item-img" srcset="${t.images.webp["1x"]} 1x, ${t.images.webp["2x"]} 2x" type="image/webp">
        <source class="projects-item-img" srcset="${t.images.jpg["1x"]} 1x, ${t.images.jpg["2x"]} 2x" type="image/jpeg">
        <img class="projects-item-img" src="${t.images.jpg["1x"]}" alt="${t.title}">
      </picture>
      <p class="projects-item-skills">${t.skills}</p>
      <div class="projects-item-bottom">
        <h3 class="projects-item-title">${t.title}</h3>
        <a href="https://github.com/anastasiiatarasiuk/TalentStack" target="_blank" class="projects-item-btn">
          VISIT
          <svg class="projects-item-btn-icon">
            <use href="${J}#icon-arrow-visit"></use>
          </svg>
        </a>
      </div>
    </li>
  `).join("");h.insertAdjacentHTML("beforeend",A),o.forEach((t,n)=>{setTimeout(()=>{h.querySelector(`li:nth-child(${e+n+1})`).classList.add("show")},100*n)})},De=e=>{l.classList.add("load"),setTimeout(()=>{l.classList.remove("load"),g+=3,B(g,3),g>=T.length-1&&(l.style.display="none"),setTimeout(()=>{window.scrollBy({top:300,behavior:"smooth"})},100)},1e3)};B(g,3);l.addEventListener("click",De);
//# sourceMappingURL=commonHelpers.js.map
