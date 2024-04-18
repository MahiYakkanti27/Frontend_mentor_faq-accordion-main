var pl=document.getElementById('way1');
var p2=document.getElementById('way2');
var p3=document.getElementById('way3');
var p4=document.getElementById('way4');
var matter1=document.getElementById('wow1');
var matter2=document.getElementById('wow2');
var matter3=document.getElementById('wow3');
var matter4=document.getElementById('wow4');

pl.addEventListener('click', () =>{
    
    if (pl.getAttribute('src') === 'icon-plus.svg') {
        pl.setAttribute('src', 'icon-minus.svg');
        matter1.style.display='block'; 
      } else {
        pl.setAttribute('src', 'icon-plus.svg');
        matter1.style.display='none'; 
      }
})
p2.addEventListener('click', () =>{
    
    if (p2.getAttribute('src') === 'icon-plus.svg') {
        p2.setAttribute('src', 'icon-minus.svg');
        matter2.style.display='block'; 
      } else {
        p2.setAttribute('src', 'icon-plus.svg');
        matter2.style.display='none'; 
      }
})
p3.addEventListener('click', () =>{
    
    if (p3.getAttribute('src') === 'icon-plus.svg') {
        p3.setAttribute('src', 'icon-minus.svg');
        matter3.style.display='block'; 
      } else {
        p3.setAttribute('src', 'icon-plus.svg');
        matter3.style.display='none'; 
      }
})
p4.addEventListener('click', () =>{
    
    if (p4.getAttribute('src') === 'icon-plus.svg') {
        p4.setAttribute('src', 'icon-minus.svg');
        matter4.style.display='block'; 
      } else {
        p4.setAttribute('src', 'icon-plus.svg');
        matter4.style.display='none'; 
      }
})