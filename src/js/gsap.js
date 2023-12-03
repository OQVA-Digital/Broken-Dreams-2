import { gsap } from "gsap"
    
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const anim01 = gsap.timeline({
    scrollTrigger: {
        trigger: ".intro",
        start: "top top",
        end: "+=500",
        scrub: 0.5,
        pin: false,
        markers:false,
    }
});

anim01.to(".scroll_animate1", {y: 300, opacity:0, duration: 1, ease: "power1.out",})

const anim02 = gsap.timeline({
    scrollTrigger: {
        trigger: ".mission",
        start: "-=900",
        scrub: 3,
        pin: false,
        markers:false,
    }
});

anim02.from(".shapes", {xPercent: 38, opacity: 0, duration: 1})
// anim02.from(".city", {yPercent: 5, duration: 1})