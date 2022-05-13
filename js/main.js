const searchEl =document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click',function(){
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus',function(){
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder','통합검색'); //(속성이름,속성에 들어갈 실제 값)
});

searchInputEl.addEventListener('blur',function(){
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder',''); //(속성이름,속성에 들어갈 실제 값)
});

const badgeEl = document.querySelector('header .badges');

window.addEventListener('scroll', _.throttle(function(){
  console.log(window.scrollY);
  if(window.scrollY >500){
    //배지숨기기
    //gsap.to(요소,지속시간(s),옵션);
    gsap.to(badgeEl, .6, {
      opacity:0,
      display: 'none'
    });
  }else{
    //배지 보이기
    gsap.to(badgeEl, .6, {
      opacity:1,
      display: 'block'
    });
  }
},300)); //300은 0.3초 함수가 한번에 막 실행되는 걸 방지!(throttle)
// _.throttle(함수,시간(ms))

const fadeEls =document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl,index){
  gsap.to(fadeEl,1,{
    delay:(index+1)*.7,
    opacity: 1
  });
});

//new Swiper(선택자,옵션)
new Swiper('.notice-line .swiper-container',{
  slidesPerView : 'auto',
  direction:'vertical',
  autoplay:true,
  loop:true
});