
const originalY = navbar.offsetTop; // 44

console.log(document.querySelector(".section-01").offsetTop);



        // scroll magic container
let controller = new ScrollMagic.Controller();

const section1 = document.querySelector(".section-01");
const mainText = section1.querySelector(".main-elem");
const msgText1 = section1.querySelector(".msg-elem-01");
const msgText2 = section1.querySelector(".msg-elem-02");
const msgText3 = section1.querySelector(".msg-elem-03");
const msgText4 = section1.querySelector(".msg-elem-04");

const canvas = document.getElementById("hero-lightpass");
const context = canvas.getContext("2d");
canvas.width = 1940;
canvas.height = 1000;

const images = [];
const airpods = {
  frame: 0,
};
const frameCount = 120;

const imagePaths = [
  'AI-Band/0001.png',
  'AI-Band/0002.png',
  'AI-Band/0003.png',
  'AI-Band/0004.png',
  'AI-Band/0005.png',
  'AI-Band/0006.png',
  'AI-Band/0007.png',
  'AI-Band/0008.png',
  'AI-Band/0009.png',
  'AI-Band/0010.png',
  'AI-Band/0011.png',
  'AI-Band/0012.png',
  'AI-Band/0013.png',
  'AI-Band/0014.png',
  'AI-Band/0015.png',
  'AI-Band/0016.png',
  'AI-Band/0017.png',
  'AI-Band/0018.png',
  'AI-Band/0019.png',
  'AI-Band/0020.png',
  'AI-Band/0021.png',
  'AI-Band/0022.png',
  'AI-Band/0023.png',
  'AI-Band/0024.png',
  'AI-Band/0025.png',
  'AI-Band/0026.png',
  'AI-Band/0027.png',
  'AI-Band/0028.png',
  'AI-Band/0029.png',
  'AI-Band/0030.png',
  'AI-Band/0031.png',
  'AI-Band/0032.png',
  'AI-Band/0033.png',
  'AI-Band/0034.png',
  'AI-Band/0035.png',
  'AI-Band/0036.png',
  'AI-Band/0037.png',
  'AI-Band/0038.png',
  'AI-Band/0039.png',
  'AI-Band/0040.png',
  'AI-Band/0041.png',
  'AI-Band/0042.png',
  'AI-Band/0043.png',
  'AI-Band/0044.png',
  'AI-Band/0045.png',
  'AI-Band/0046.png',
  'AI-Band/0047.png',
  'AI-Band/0048.png',
  'AI-Band/0049.png',
  'AI-Band/0050.png',
  'AI-Band/0051.png',
  'AI-Band/0052.png',
  'AI-Band/0053.png',
  'AI-Band/0054.png',
  'AI-Band/0055.png',
  'AI-Band/0056.png',
  'AI-Band/0057.png',
  'AI-Band/0058.png',
  'AI-Band/0059.png',
  'AI-Band/0060.png',

  'AI-Band/0001.png',
  'AI-Band/0002.png',
  'AI-Band/0003.png',
  'AI-Band/0004.png',
  'AI-Band/0005.png',
  'AI-Band/0006.png',
  'AI-Band/0007.png',
  'AI-Band/0008.png',
  'AI-Band/0009.png',
  'AI-Band/0010.png',
  'AI-Band/0011.png',
  'AI-Band/0012.png',
  'AI-Band/0013.png',
  'AI-Band/0014.png',
  'AI-Band/0015.png',
  'AI-Band/0016.png',
  'AI-Band/0017.png',
  'AI-Band/0018.png',
  'AI-Band/0019.png',
  'AI-Band/0020.png',
  'AI-Band/0021.png',
  'AI-Band/0022.png',
  'AI-Band/0023.png',
  'AI-Band/0024.png',
  'AI-Band/0025.png',
  'AI-Band/0026.png',
  'AI-Band/0027.png',
  'AI-Band/0028.png',
  'AI-Band/0029.png',
  'AI-Band/0030.png',
  'AI-Band/0031.png',
  'AI-Band/0032.png',
  'AI-Band/0033.png',
  'AI-Band/0034.png',
  'AI-Band/0035.png',
  'AI-Band/0036.png',
  'AI-Band/0037.png',
  'AI-Band/0038.png',
  'AI-Band/0039.png',
  'AI-Band/0040.png',
  'AI-Band/0041.png',
  'AI-Band/0042.png',
  'AI-Band/0043.png',
  'AI-Band/0044.png',
  'AI-Band/0045.png',
  'AI-Band/0046.png',
  'AI-Band/0047.png',
  'AI-Band/0048.png',
  'AI-Band/0049.png',
  'AI-Band/0050.png',
  'AI-Band/0051.png',
  'AI-Band/0052.png',
  'AI-Band/0053.png',
  'AI-Band/0054.png',
  'AI-Band/0055.png',
  'AI-Band/0056.png',
  'AI-Band/0057.png',
  'AI-Band/0058.png',
  'AI-Band/0059.png',
  'AI-Band/0060.png'

];

// Funktion zum Laden der Bilder
function loadImages() {
  imagePaths.forEach((path) => {
    const img = new Image();
    img.src = path;
    images.push(img);
  });
}

      // scroll line
let tl0 = gsap.timeline();
tl0
  .add("start0")
  .fromTo(canvas, { opacity: 0 }, { duration: 2, opacity: 1 }, "start0")
  .fromTo(
    mainText,
    { opacity: 0 },
    { duration: 1.5, delay: 0.75, opacity: 1 },
    "start0"
);

// GSAP Timeline #1
let tl1 = gsap.timeline();
tl1
  .add("start0")

  /* Main Text Animation */
  .to(mainText, { duration: 5, y: -500 }, "start0")

 
  .to(
    airpods,
    {
      duration: 8,
      frame: 138,
      snap: "frame",
      ease: "none",
      onUpdate: render,
    },
    "start0"
  )

  /* Message Text Animation - 1, 2, 3, 4 */
  .add("start1")
  .to(msgText1, { duration: 3.5, opacity: 1, y: -50 }, "start1")
  .to(msgText1, { duration: 3.5, opacity: 0, y: -100 })

  .add("start2")
  .to(msgText2, { duration: 3.5, opacity: 1, y: -50 }, "start2")
  .to(msgText2, { duration: 3.5, opacity: 0, y: -100 })

  .add("start3")
  .to(msgText3, { duration: 3.5, opacity: 1, y: -50 }, "start3")
  .to(msgText3, { duration: 3.5, opacity: 0, y: -100 })

  .add("start4")
  .to(msgText4, { duration: 3.5, opacity: 1, y: -50 }, "start4")
  .to(msgText4, { duration: 3.5, opacity: 0, y: -100 })

  /* Ending the scene - black screen in the end */
  .to(AI-Band, {
    duration: 1,
    frame: frameCount - 1,
    snap: "frame",
    ease: "none",
    onUpdate: render,
  })

  /* BG 'Image Scale' Animation */
  .to(canvas, { duration: 36, scale: 0.5, ease: Power1.easeIn }, "start0");

// ScrollMagic Scene #1
let scene1 = new ScrollMagic.Scene({
  triggerElement: ".section-01",
  duration: "4000",
  triggerHook: 0,
  //   offset: "100",
})
  .setTween(tl1)
  .setPin(".section-01")
  .addTo(controller);

// Initial image loading
loadImages();
images[0].onload = render;

// Rendering image on canvas
function render() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(images[AI_Band.frame], 0, 0);
}
