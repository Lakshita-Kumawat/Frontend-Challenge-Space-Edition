//background video
const video = document.createElement('video');
video.src="assets/space.mp4";
video.autoplay='true';
video.muted='true';
video.loop='true';
document.querySelector('header').append(video);


//slider
const swiperContainer = document.createElement('div');

swiperContainer.innerHTML=`
<div class="swiper mySwiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide"><img src="assets/planets/earth.png"><img src="assets/planets/jupiter.png"><img src="assets/planets/mars.png"></div>
      <div class="swiper-slide"><img src="assets/moon/moon.png"><img src="assets/moon/europa.png"><img src="assets/moon/titan.png"></div>
      <div class="swiper-slide"><img src="assets/planets/neptune.png"><img src="assets/planets/uranus.png"><img src="assets/planets/venus.png"></div>
    </div>
  </div>
`;

document.querySelector('.solar-system-overview').append(swiperContainer);

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

//image inserter
function insertImg(name,imgSrc){
  const articleContainer = document.querySelector('.' + name);
  const imgContainer= document.createElement('div');
  imgContainer.className="align";
  imgContainer.innerHTML= `<img src="${imgSrc}" alt="${name}" loading="lazy"></img>`;
  articleContainer.prepend(imgContainer);
}

//image details
const imageDetails = [
  {
    name:"mercury",
    src:"assets/planets/mercury.png"
  },
  {
    name:"venus",
    src:"assets/planets/venus.png"
  },
  {
    name:"earth",
    src:"assets/planets/earth.png"
  },
  {
    name:"mars",
    src:"assets/planets/mars.png"
  },
  {
    name:"jupiter",
    src:"assets/planets/jupiter.png"
  },
  {
    name:"saturn",
    src:"assets/planets/saturn.png"
  },
  {
    name:"uranus",
    src:"assets/planets/uranus.png"
  },
  {
    name:"neptune",
    src:"assets/planets/neptune.png"
  },
  {
    name:"earth-moon",
    src:"assets/moon/moon.png"
  },
  {
    name:"titan",
    src:"assets/moon/titan.png"
  },
  {
    name:"europa",
    src:"assets/moon/europa.png"
  },
  {
    name:"comets",
    src:"assets/other-object/comet.jpg"
  },
  {
    name:"asteroid-belt",
    src:"assets/other-object/asteroid-belt.png"
  },
  {
    name:"kuiper-belt",
    src:"assets/other-object/kuiper-belt.jpg"
  },
];

imageDetails.forEach(({name,src}) => insertImg(name,src));

//nyan cat
const catContainer = document.createElement('div');
catContainer.id="nyan-cat";
catContainer.innerHTML = `<img src="assets/nyan-cat.png" alt="nyan-cat"></img>`;
document.querySelector('.solar-system-overview').append(catContainer);

//gsap
gsap.registerPlugin(ScrollTrigger);

const width = window.innerWidth;

gsap.to("#nyan-cat img",{
  left:width-150+"px",
  scrollTrigger:{
    trigger:"#nyan-cat",
    scrub:3
  }
})

gsap.fromTo("h1, header p",{
  y:30,
  opacity:0
},{
  y:0,
  opacity:1,
  duration:1
});

gsap.utils.toArray('h2').forEach(h2=>{
  gsap.fromTo(h2,{
    x:-100,
    skewX:-20,
    opacity:0
  },{
    x:0,
    skewX:0,
    opacity:1,
    duration:1,
    delay:0.5,
    scrollTrigger:h2
  })
})

gsap.utils.toArray('.planet, .solar-system-objects article').forEach(article=>{
  gsap.fromTo(article,{
    x:-140,
    opacity:0
  },{
    x:0,
    opacity:1,
    duration:2,
    delay:0.5,
    scrollTrigger:article
  })
})

gsap.utils.toArray('.planet:nth-child(even)').forEach(article=>{
  gsap.fromTo(article,{
    x:140,
  },{
    x:0,
    duration:2,
    delay:0.5,
    scrollTrigger:article
  })
})

gsap.utils.toArray('.moon').forEach(moon=>{
  gsap.fromTo(moon,{
    y:100,
    opacity:0
  },{
    y:0,
    opacity:1,
    duration:1,
    delay:1,
    scrollTrigger:moon
  })
})
