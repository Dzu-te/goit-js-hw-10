import{f,i}from"./vendor-651d7991.js";function n(e){return e.toString().padStart(2,"0")}function h(e){const s=Math.floor(e/864e5),a=Math.floor(e%864e5/36e5),l=Math.floor(e%864e5%36e5/6e4),m=Math.floor(e%864e5%36e5%6e4/1e3);return{days:s,hours:a,minutes:l,seconds:m}}const y=document.getElementById("datetime-picker"),o=document.querySelector("[data-start]"),S=document.querySelector("[data-days]"),D=document.querySelector("[data-hours]"),E=document.querySelector("[data-minutes]"),C=document.querySelector("[data-seconds]");let c;f(y,{enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){c=e[0];const t=new Date;c<=t?(i.error({title:"Error",message:"Please choose a date in the future"}),o.disabled=!0):o.disabled=!1}});o.addEventListener("click",()=>{o.disabled=!0;const e=setInterval(()=>{const t=new Date,r=c-t;if(r<=0){clearInterval(e),i.success({title:"Success",message:"Countdown completed!"});return}const{days:u,hours:d,minutes:s,seconds:a}=h(r);S.textContent=n(u),D.textContent=n(d),E.textContent=n(s),C.textContent=n(a)},1e3)});
//# sourceMappingURL=1-timer-a5662c2b.js.map
