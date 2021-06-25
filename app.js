const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to('.text', { y: '0%', duration: .7, stagger: 0.5 });
tl.to('.slider', { y: '-100%', duration: 1.5, delay: 0.3 });
tl.to('.intro', { y: '-100%', duration: 1 }, "-=1");
tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 2 });
tl.to(".big-text", { x: '0%', duration: .5 }, "-=2");