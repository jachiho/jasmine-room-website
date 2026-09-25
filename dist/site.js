const toggle=document.querySelector('.menu-toggle');
const nav=document.getElementById('site-nav');
const year=document.getElementById('year');
if(year) year.textContent=new Date().getFullYear();
if(toggle&&nav){
  toggle.addEventListener('click',()=>{
    const open=nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded',String(open));
  });
  nav.addEventListener('click',event=>{
    if(event.target.closest('a')){
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded','false');
    }
  });
}
