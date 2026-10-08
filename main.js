const b=document.querySelector('.burger'),m=document.getElementById('menu');
const close=()=>{m.classList.remove('open');b.setAttribute('aria-expanded',false)};
b.addEventListener('click',()=>{const o=m.classList.toggle('open');b.setAttribute('aria-expanded',o)});
m.addEventListener('click',e=>{if(e.target.tagName==='A')close()});
document.addEventListener('keydown',e=>{if(e.key==='Escape')close()});
const io='IntersectionObserver'in window?new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12}):null;
document.querySelectorAll('.rv').forEach(el=>io?io.observe(el):el.classList.add('in'));
const d=document.getElementById('lb');
if(d){document.querySelectorAll('.shot button').forEach(x=>x.addEventListener('click',()=>{const i=x.querySelector('img'),l=d.querySelector('img');l.src=i.src;l.alt=i.alt;d.showModal()}));d.addEventListener('click',e=>{if(e.target===d)d.close()})}
