import{i as s}from"./vendor-651d7991.js";const r=document.querySelector(".form");r.addEventListener("submit",function(i){i.preventDefault();const n=r.elements.delay,o=r.elements.state,e=parseInt(n.value,10),a=o.value;if(isNaN(e)||e<=0){s.error({title:"Error",message:"Please enter a valid delay (greater than 0)."});return}new Promise((t,l)=>{setTimeout(()=>{a==="fulfilled"?t(e):l(e)},e)}).then(t=>{s.success({title:"Success",message:`✅ Fulfilled promise in ${t}ms`})},t=>{s.error({title:"Error",message:`❌ Rejected promise in ${t}ms`})})});
//# sourceMappingURL=2-snackbar-2d380107.js.map