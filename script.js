// loading animation

document.addEventListener('DOMContentLoaded', function () {
  const loadingOverlay = document.getElementById('loading-overlay');

  loadingOverlay.style.display = 'flex'; 

  setTimeout(function () {
    loadingOverlay.style.display = 'none';
    document.body.classList.add('loaded');
  }, 4500); 
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


AI Band Images/0001-min.png
AI Band Images/0002-min.png
AI Band Images/0003-min.png
AI Band Images/0004-min.png
AI Band Images/0005-min.png
AI Band Images/0006-min.png
AI Band Images/0007-min.png
AI Band Images/0008-min.png
AI Band Images/0009-min.png
AI Band Images/0010-min.png
AI Band Images/0011-min.png
AI Band Images/0012-min.png
AI Band Images/0013-min.png
AI Band Images/0014-min.png
AI Band Images/0015-min.png
AI Band Images/0016-min.png
AI Band Images/0017-min.png
AI Band Images/0018-min.png
AI Band Images/0019-min.png
AI Band Images/0020-min.png
AI Band Images/0021-min.png
AI Band Images/0022-min.png
AI Band Images/0023-min.png
AI Band Images/0024-min.png
AI Band Images/0025-min.png
AI Band Images/0026-min.png
AI Band Images/0027-min.png
AI Band Images/0028-min.png
AI Band Images/0029-min.png
AI Band Images/0030-min.png
AI Band Images/0031-min.png
AI Band Images/0032-min.png
AI Band Images/0033-min.png
AI Band Images/0034-min.png
AI Band Images/0035-min.png
AI Band Images/0036-min.png
AI Band Images/0037-min.png
AI Band Images/0038-min.png
AI Band Images/0039-min.png
AI Band Images/0040-min.png
AI Band Images/0041-min.png
AI Band Images/0042-min.png
AI Band Images/0043-min.png
AI Band Images/0044-min.png
AI Band Images/0045-min.png
AI Band Images/0046-min.png
AI Band Images/0047-min.png
AI Band Images/0048-min.png
AI Band Images/0049-min.png
AI Band Images/0050-min.png
AI Band Images/0051-min.png
AI Band Images/0052-min.png
AI Band Images/0053-min.png
AI Band Images/0054-min.png
AI Band Images/0055-min.png
AI Band Images/0056-min.png
AI Band Images/0057-min.png
AI Band Images/0058-min.png
AI Band Images/0059-min.png
AI Band Images/0060-min.png
AI Band Images/0061-min.png
AI Band Images/0062-min.png
AI Band Images/0063-min.png
AI Band Images/0064-min.png
AI Band Images/0065-min.png
AI Band Images/0066-min.png
AI Band Images/0067-min.png
AI Band Images/0068-min.png
AI Band Images/0069-min.png
AI Band Images/0070-min.png
AI Band Images/0071-min.png
AI Band Images/0072-min.png
AI Band Images/0073-min.png
AI Band Images/0074-min.png
AI Band Images/0075-min.png
AI Band Images/0076-min.png
AI Band Images/0077-min.png
AI Band Images/0078-min.png
AI Band Images/0079-min.png
AI Band Images/0080-min.png
AI Band Images/0081-min.png
AI Band Images/0082-min.png
AI Band Images/0083-min.png
AI Band Images/0084-min.png
AI Band Images/0085-min.png
AI Band Images/0086-min.png
AI Band Images/0087-min.png
AI Band Images/0088-min.png
AI Band Images/0089-min.png
AI Band Images/0090-min.png
AI Band Images/0091-min.png
AI Band Images/0092-min.png
AI Band Images/0093-min.png
AI Band Images/0094-min.png
AI Band Images/0095-min.png
AI Band Images/0096-min.png
AI Band Images/0097-min.png
AI Band Images/0098-min.png
AI Band Images/0099-min.png
AI Band Images/0100-min.png
AI Band Images/0101-min.png
AI Band Images/0102-min.png
AI Band Images/0103-min.png
AI Band Images/0104-min.png
AI Band Images/0105-min.png
AI Band Images/0106-min.png
AI Band Images/0107-min.png
AI Band Images/0108-min.png
AI Band Images/0109-min.png
AI Band Images/0110-min.png
AI Band Images/0111-min.png
AI Band Images/0112-min.png
AI Band Images/0113-min.png
AI Band Images/0114-min.png
AI Band Images/0115-min.png
AI Band Images/0116-min.png
AI Band Images/0117-min.png
AI Band Images/0118-min.png
AI Band Images/0119-min.png
AI Band Images/0120-min.png
AI Band Images/0121-min.png
AI Band Images/0122-min.png
AI Band Images/0123-min.png
AI Band Images/0124-min.png
AI Band Images/0125-min.png
AI Band Images/0126-min.png
AI Band Images/0127-min.png
AI Band Images/0128-min.png
AI Band Images/0129-min.png
AI Band Images/0130-min.png
AI Band Images/0131-min.png
AI Band Images/0132-min.png
AI Band Images/0133-min.png
AI Band Images/0134-min.png
AI Band Images/0135-min.png
AI Band Images/0136-min.png
AI Band Images/0137-min.png
AI Band Images/0138-min.png
AI Band Images/0139-min.png
AI Band Images/0140-min.png





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


