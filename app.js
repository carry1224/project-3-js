let image=document.querySelector('.img-container')
let para=document.getElementById('info')
let btn=document.querySelector('.button-container')
let prev=btn.querySelector('.prev-btn')
prev.addEventListener('click',function(){
  para.style.color='red'
  para.style.fontSize='40px'
  para.style.padding='18px' 
})
let next=btn.querySelector('.next-btn')
next.addEventListener('click',function(){
  para.style.color='green'
  para.style.fontSize='40px'
  para.style.padding='18px'
})
let last_btn=document.querySelector('.random-btn')
last_btn.addEventListener('click',function(){
  para.style.color='aqua'
  para.style.fontSize='40px'
  para.style.padding='18px'
})
console.log(para)