//load ScrollTrigger Plugin
gsap.registerPlugin(ScrollTrigger);

const bgGroup=document.querySelector(".bg-group");
const bgPurple=document.querySelector(".bg-purple");
const bgLighter=document.querySelector(".bg-lighter");
const bgDanger=document.querySelector(".bg-danger");
const bgWarning=document.querySelector(".bg-warning");
const bgInfo=document.querySelector(".bg-info");
const tltest=gsap.timeline();
gsap.defaults({
    ease: "none",
    duration: 2,
});
//鏈式寫法
tltest.from(bgLighter,{xPercent: -100}).from(bgDanger,{xPercent: 100}).from(bgWarning,{yPercent:-100}).from(bgInfo,{yPercent: 100});

ScrollTrigger.create({
    animation: tltest,
    start: "top top",
    end: "+=4000",
    scrub: true,
    pin: bgGroup,
    markers: true,
})

