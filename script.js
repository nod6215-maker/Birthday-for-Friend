// ==========================================
// GSAP INTRO
// ==========================================

gsap.from(".title",{
    y:-80,
    opacity:0,
    duration:1.2
});

gsap.from(".subtitle",{
    opacity:0,
    delay:.5,
    duration:1
});

gsap.from(".profile",{
    scale:0,
    rotation:360,
    delay:.8,
    duration:1.5
});

// ==========================================
// ELEMENTS
// ==========================================

const hero=document.querySelector(".hero");

const slideshow=document.querySelector(".slideshow");

const envelopePage=document.querySelector(".envelope-page");

const letterPage=document.querySelector(".letter-page");

const finalPage=document.querySelector(".final-page");

const music=document.getElementById("bgMusic");

// ==========================================
// PETALS
// ==========================================

function createPetal(){

    const petal=document.createElement("div");

    petal.className="petal";

    petal.innerHTML="🌸";

    petal.style.left=Math.random()*100+"vw";

    petal.style.animationDuration=(5+Math.random()*5)+"s";

    petal.style.fontSize=(16+Math.random()*18)+"px";

    document.querySelector(".petals").appendChild(petal);

    setTimeout(()=>{

        petal.remove();

    },10000);

}

setInterval(createPetal,500);

// ==========================================
// START WEBSITE
// ==========================================

document.body.addEventListener("click",startJourney,{once:true});

function startJourney(){

    music.play().catch(()=>{});

    gsap.to(".hero",{

        opacity:0,

        duration:1

    });

    setTimeout(()=>{

        hero.style.display="none";

        slideshow.style.display="flex";

        startSlideshow();

    },1000);

}
// ==========================================
// SLIDESHOW
// ==========================================

const slides = document.querySelectorAll(".slide");

const progress = document.querySelector(".progress");

const caption = document.getElementById("caption");

const captions = [

    "Your beautiful smile ❤️",

    "One of my favourite memories 🌸",

    "Keep smiling always 😊",

    "Stay happy and blessed ✨",

    "Thank you for being an amazing friend 💖",

    "Wishing you success 🎂",

    "Happy Birthday ❤️"

];

const effects = [

    "zoom",

    "fade",

    "slide-left",

    "rotate",

    "zoom",

    "fade",

    "slide-left"

];

let currentSlide = 0;

function startSlideshow(){

    showSlide();

}

function showSlide(){

    slides.forEach(slide=>{

        slide.classList.remove(

            "active",

            "zoom",

            "fade",

            "slide-left",

            "rotate"

        );

    });

    progress.style.transition="none";

    progress.style.width="0%";

    void progress.offsetWidth;

   progress.style.transition="width 6s linear";

    progress.style.width="100%";

    slides[currentSlide].classList.add("active");

    slides[currentSlide].classList.add(effects[currentSlide]);

    caption.innerHTML = captions[currentSlide];

    setTimeout(()=>{

        currentSlide++;

        if(currentSlide < slides.length){

            showSlide();

        }else{

            openEnvelope();

        }

    },6000);

}

// ==========================================
// SHOW ENVELOPE
// ==========================================

function openEnvelope(){

    slideshow.style.display="none";

    envelopePage.style.display="flex";

    gsap.from(".envelope",{

        y:200,

        opacity:0,

        duration:1.2,

        ease:"bounce.out"

    });

}
// ==========================================
// ENVELOPE
// ==========================================

const envelope = document.querySelector(".envelope");
const message = document.getElementById("message");

const bengaliLetter = `

💌
শুভ জন্মদিন! 🎉🎂

তোমার জীবনের এই বিশেষ দিনটি অনেক আনন্দ, হাসি আর সুন্দর মুহূর্তে ভরে উঠুক।
তোমার মুখের হাসি যেন সবসময় এমনই থাকে এবং তোমার প্রতিটি স্বপ্ন একদিন সত্যি হয়ে ওঠে।

জীবনের প্রতিটি পথে তুমি সাহস, আত্মবিশ্বাস আর নতুন আশা নিয়ে এগিয়ে চলো।
তোমার পরিশ্রম যেন তোমাকে সফলতার শিখরে পৌঁছে দেয় এবং সুখ, শান্তি ও ভালোবাসা সবসময় তোমার সঙ্গী হয়।

আমাদের বন্ধুত্ব আমার কাছে অনেক মূল্যবান।
তোমার সঙ্গে কাটানো সুন্দর স্মৃতি, হাসি আর গল্পগুলো সবসময় মনে থাকবে।

কঠিন সময় এলে কখনো হাল ছেড়ো না, কারণ তুমি অনেক শক্তিশালী এবং তোমার মধ্যে অনেক কিছু অর্জন করার ক্ষমতা আছে।

আজকের দিনটা শুধুই তোমার। অনেক হাসো, আনন্দ করো এবং জীবনের প্রতিটি মুহূর্ত উপভোগ করো।

ঈশ্বর তোমাকে সুস্থ রাখুন, সুখী রাখুন এবং তোমার জীবনকে অসংখ্য সুন্দর মুহূর্তে ভরে দিন।

আবারও...

🎉 শুভ জন্মদিন! 🎂❤️

সবসময় হাসিখুশি থেকো এবং নিজের স্বপ্নের পিছনে ছুটে চলো। ✨

— তোমার বন্ধু,
Preetam ❤️
`;

envelope.addEventListener("click", openLetter);

function openLetter() {

    envelope.classList.add("open");

    setTimeout(() => {

        envelopePage.style.display = "none";

        letterPage.style.display = "flex";

        typeLetter();

    }, 1000);

}

// ==========================================
// TYPEWRITER EFFECT
// ==========================================

let index = 0;

function typeLetter() {

    if (index < bengaliLetter.length) {

        message.innerHTML += bengaliLetter.charAt(index);

        index++;

        setTimeout(typeLetter, 45);

    } else {

        document.getElementById("nextBtn").style.display="block";

    }

}

// ==========================================
// FINAL PAGE
// ==========================================

function showFinalPage() {

    letterPage.style.display = "none";

    finalPage.style.display = "flex";

    startFireworks();

}

// ==========================================
// SIMPLE FIREWORKS
// ==========================================

const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function random(min, max) {

    return Math.random() * (max - min) + min;

}

function firework() {

    const x = random(100, canvas.width - 100);
    const y = random(100, canvas.height - 200);

    for (let i = 0; i < 60; i++) {

        ctx.beginPath();

        ctx.arc(
            x + random(-80, 80),
            y + random(-80, 80),
            2,
            0,
            Math.PI * 2
        );

        ctx.fillStyle =
            `hsl(${Math.random() * 360},100%,60%)`;

        ctx.fill();

    }

}

function startFireworks() {

    setInterval(() => {

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        firework();

    }, 700);

}

// ==========================================
// RESPONSIVE
// ==========================================

window.addEventListener("resize", () => {

    canvas.width = window.innerWidth;

    canvas.height = window.innerHeight;

});
document
.getElementById("nextBtn")
.addEventListener("click",()=>{

    showFinalPage();

});