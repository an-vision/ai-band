// loading animation

document.addEventListener('DOMContentLoaded', function () {
  const loadingOverlay = document.getElementById('loading-overlay');

  loadingOverlay.style.display = 'flex'; 

  setTimeout(function () {
    loadingOverlay.style.display = 'none';
    document.body.classList.add('loaded');
  }, 5500); 
});

// document.addEventListener('DOMContentLoaded', function () {
//   const loadingWrapper = document.querySelector('.loading-wrapper');

//   loadingWrapper.style.display = 'flex';

//   setTimeout(function () {
//     loadingWrapper.style.display = 'none';
//     document.getElementById('main').style.display = 'block';
//     document.body.classList.add('loaded');
//   }, 5500);
// });

// scroll animation

function lazyLoadImages() {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        imageObserver.unobserve(img);
      }
    });
  });

  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.dataset.src = files(i);
    imageObserver.observe(img);
  }
}

// Rufen Sie lazyLoadImages auf, wenn die Seite geladen ist
document.addEventListener('DOMContentLoaded', () => {
  lazyLoadImages();
  loco();
  canvas();
});




function loco(){
  gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
el: document.querySelector("#main"),
smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
scrollTop(value) {
  return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
}, // we don't have to define a scrollLeft because we're only scrolling vertically.
getBoundingClientRect() {
  return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
},
// LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
loco()






function canvas(){
  const canvas = document.querySelector("#page7>canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
render();
});

function files(index) {
var data = `

AI-Band Images/0001.png
AI-Band Images/0002.png
AI-Band Images/0003.png
AI-Band Images/0004.png
AI-Band Images/0005.png
AI-Band Images/0006.png
AI-Band Images/0007.png
AI-Band Images/0008.png
AI-Band Images/0001.png
AI-Band Images/0009.png
AI-Band Images/0010.png
AI-Band Images/0011.png
AI-Band Images/0012.png
AI-Band Images/0013.png
AI-Band Images/0014.png
AI-Band Images/0015.png
AI-Band Images/0016.png
AI-Band Images/0017.png
AI-Band Images/0018.png
AI-Band Images/0019.png
AI-Band Images/0020.png
AI-Band Images/0021.png
AI-Band Images/0022.png
AI-Band Images/0023.png
AI-Band Images/0024.png
AI-Band Images/0025.png
AI-Band Images/0026.png
AI-Band Images/0027.png
AI-Band Images/0028.png
AI-Band Images/0029.png
AI-Band Images/0030.png
AI-Band Images/0031.png
AI-Band Images/0032.png
AI-Band Images/0033.png
AI-Band Images/0034.png
AI-Band Images/0035.png
AI-Band Images/0036.png
AI-Band Images/0037.png
AI-Band Images/0038.png
AI-Band Images/0039.png
AI-Band Images/0040.png
AI-Band Images/0041.png
AI-Band Images/0042.png
AI-Band Images/0043.png
AI-Band Images/0044.png
AI-Band Images/0045.png
AI-Band Images/0046.png
AI-Band Images/0047.png
AI-Band Images/0048.png
AI-Band Images/0049.png
AI-Band Images/0050.png
AI-Band Images/0051.png
AI-Band Images/0052.png
AI-Band Images/0053.png
AI-Band Images/0054.png
AI-Band Images/0055.png
AI-Band Images/0056.png
AI-Band Images/0057.png
AI-Band Images/0058.png
AI-Band Images/0059.png
AI-Band Images/0060.png
AI-Band Images/0061.png
AI-Band Images/0062.png
AI-Band Images/0063.png
AI-Band Images/0064.png
AI-Band Images/0065.png
AI-Band Images/0066.png
AI-Band Images/0067.png
AI-Band Images/0068.png
AI-Band Images/0069.png
AI-Band Images/0070.png
AI-Band Images/0071.png
AI-Band Images/0072.png
AI-Band Images/0073.png
AI-Band Images/0074.png
AI-Band Images/0075.png
AI-Band Images/0076.png
AI-Band Images/0077.png
AI-Band Images/0078.png
AI-Band Images/0079.png
AI-Band Images/0080.png
AI-Band Images/0081.png
AI-Band Images/0082.png
AI-Band Images/0083.png
AI-Band Images/0084.png
AI-Band Images/0085.png
AI-Band Images/0086.png
AI-Band Images/0087.png
AI-Band Images/0088.png
AI-Band Images/0089.png
AI-Band Images/0090.png
AI-Band Images/0091.png
AI-Band Images/0092.png
AI-Band Images/0093.png
AI-Band Images/0094.png
AI-Band Images/0095.png
AI-Band Images/0096.png
AI-Band Images/0097.png
AI-Band Images/0098.png
AI-Band Images/0099.png
AI-Band Images/0100.png
AI-Band Images/0101.png
AI-Band Images/0102.png
AI-Band Images/0103.png
AI-Band Images/0104.png
AI-Band Images/0105.png
AI-Band Images/0106.png
AI-Band Images/0107.png
AI-Band Images/0108.png
AI-Band Images/0109.png
AI-Band Images/0110.png
AI-Band Images/0111.png
AI-Band Images/0112.png
AI-Band Images/0113.png
AI-Band Images/0114.png
AI-Band Images/0115.png
AI-Band Images/0116.png
AI-Band Images/0117.png
AI-Band Images/0118.png
AI-Band Images/0119.png
AI-Band Images/0120.png
AI-Band Images/0121.png
AI-Band Images/0122.png
AI-Band Images/0123.png
AI-Band Images/0124.png
AI-Band Images/0125.png
AI-Band Images/0126.png
AI-Band Images/0127.png
AI-Band Images/0128.png
AI-Band Images/0129.png
AI-Band Images/0130.png
AI-Band Images/0131.png
AI-Band Images/0132.png
AI-Band Images/0133.png
AI-Band Images/0134.png
AI-Band Images/0135.png
AI-Band Images/0136.png
AI-Band Images/0137.png
AI-Band Images/0138.png
AI-Band Images/0139.png
AI-Band Images/0140.png


`;
return data.split("\n")[index];
}

const frameCount = 140;

const images = [];
const imageSeq = {
frame: 1,
};

for (let i = 0; i < frameCount; i++) {
const img = new Image();
img.src = files(i);
images.push(img);
}

gsap.to(imageSeq, {
frame: frameCount - 1,
snap: "frame",
ease: `none`,
scrollTrigger: {
  scrub: 0.15,
  trigger: `#page7>canvas`,
  //   set start end according to preference
  start: `top top`,
  end: `600% top`,
  scroller: `#main`,
},
onUpdate: render,
});

images[1].onload = render;

function render() {
scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
var canvas = ctx.canvas;
var hRatio = canvas.width / img.width;
var vRatio = canvas.height / img.height;
var ratio = Math.min(hRatio, vRatio);
var centerShift_x = (canvas.width - img.width * ratio) / 2;
var centerShift_y = (canvas.height - img.height * ratio) / 2;
ctx.clearRect(0, 0, canvas.width, canvas.height);
ctx.drawImage(
  img,
  0,
  0,
  img.width,
  img.height,
  centerShift_x,
  centerShift_y,
  img.width * ratio,
  img.height * ratio
);
}
ScrollTrigger.create({

trigger: "#page7>canvas",
pin: true,
// markers:true,
scroller: `#main`,
//   set start end according to preference
start: `top top`,
end: `600% top`,
});
}
canvas();


