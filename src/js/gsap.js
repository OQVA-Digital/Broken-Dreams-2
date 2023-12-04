import { gsap } from "gsap"
    
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const anim01 = gsap.timeline({
    scrollTrigger: {
        trigger: ".intro",
        start: "top top",
        end: "+=500",
        scrub: 0.8,
        pin: false,
        markers:false,
    }
});

anim01.to(".scroll_animate1", {y: 300, opacity:0, duration: 1, ease: "power1.out",})

const anim02 = gsap.timeline({
    scrollTrigger: {
        trigger: ".mission",
        start: "-=900",
        end: "+=1300",
        scrub: 3,
        pin: false,
        markers:false,
    }
});

anim02.from(".mission .shapes", {x: 400, opacity: 0, duration: 1})




const anim03 = gsap.timeline({
    scrollTrigger: {
        trigger: "section.contact",
        start: "-=400",
        end: "+=1200",
        scrub: 2,
        pin: false,
        markers:false,
    }
});

anim03.from(".contact .city", {yPercent: 24, duration: 1})




const anim04 = gsap.timeline({
    scrollTrigger: {
        trigger: ".baristas_platform",
        start: "-=600",
        end: "+=1000",
        scrub: 3,
        pin: false,
        markers:false,
    }
});

anim04.from(".baristas_platform .composition img", {xPercent: -15, duration: 1})