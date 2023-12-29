


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

AI-Band/0001.png
AI-Band/0002.png
AI-Band/0003.png
AI-Band/0004.png
AI-Band/0005.png
AI-Band/0006.png
AI-Band/0007.png
AI-Band/0008.png
AI-Band/0009.png
AI-Band/0010.png
AI-Band/0011.png
AI-Band/0012.png
AI-Band/0013.png
AI-Band/0014.png
AI-Band/0015.png
AI-Band/0016.png
AI-Band/0017.png
AI-Band/0018.png
AI-Band/0019.png
AI-Band/0020.png
AI-Band/0021.png
AI-Band/0022.png
AI-Band/0023.png
AI-Band/0024.png
AI-Band/0025.png
AI-Band/0026.png
AI-Band/0027.png
AI-Band/0028.png
AI-Band/0029.png
AI-Band/0030.png
AI-Band/0031.png
AI-Band/0032.png
AI-Band/0033.png
AI-Band/0034.png
AI-Band/0035.png
AI-Band/0036.png
AI-Band/0037.png
AI-Band/0038.png
AI-Band/0039.png
AI-Band/0040.png
AI-Band/0041.png
AI-Band/0042.png
AI-Band/0043.png
AI-Band/0044.png
AI-Band/0045.png
AI-Band/0046.png
AI-Band/0047.png
AI-Band/0048.png
AI-Band/0049.png
AI-Band/0050.png
AI-Band/0051.png
AI-Band/0052.png
AI-Band/0053.png
AI-Band/0054.png
AI-Band/0055.png
AI-Band/0056.png
AI-Band/0057.png
AI-Band/0058.png
AI-Band/0059.png
AI-Band/0060.png

AI-Band/0001.png
AI-Band/0002.png
AI-Band/0003.png
AI-Band/0004.png
AI-Band/0005.png
AI-Band/0006.png
AI-Band/0007.png
AI-Band/0008.png
AI-Band/0009.png
AI-Band/0010.png
AI-Band/0011.png
AI-Band/0012.png
AI-Band/0013.png
AI-Band/0014.png
AI-Band/0015.png
AI-Band/0016.png
AI-Band/0017.png
AI-Band/0018.png
AI-Band/0019.png
AI-Band/0020.png
AI-Band/0021.png
AI-Band/0022.png
AI-Band/0023.png
AI-Band/0024.png
AI-Band/0025.png
AI-Band/0026.png
AI-Band/0027.png
AI-Band/0028.png
AI-Band/0029.png
AI-Band/0030.png
AI-Band/0031.png
AI-Band/0032.png
AI-Band/0033.png
AI-Band/0034.png
AI-Band/0035.png
AI-Band/0036.png
AI-Band/0037.png
AI-Band/0038.png
AI-Band/0039.png
AI-Band/0040.png
AI-Band/0041.png
AI-Band/0042.png
AI-Band/0043.png
AI-Band/0044.png
AI-Band/0045.png
AI-Band/0046.png
AI-Band/0047.png
AI-Band/0048.png
AI-Band/0049.png
AI-Band/0050.png
AI-Band/0051.png
AI-Band/0052.png
AI-Band/0053.png
AI-Band/0054.png
AI-Band/0055.png
AI-Band/0056.png
AI-Band/0057.png
AI-Band/0058.png
AI-Band/0059.png
AI-Band/0060.png

`;
return data.split("\n")[index];
}

const frameCount = 120;

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


