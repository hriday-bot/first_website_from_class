let scroll = gsap.timeline({
  scrollTrigger: {
    trigger: "#portfolio-pictures",
    start: "top center",
    end: "bottom center",
    // markers: true,
    toggleAction: "none play none reset ",
  },
});

scroll.from(
  "#portfolio-pictures",
  { y: 100, opacity: 0 }
  // { y: 0, opacity: 1, duration: 1.3 }
);

//This is the gsap for the nav bar
let load = gsap.timeline();

// load.fromTo(
//   ".container  ",
//   { y: 10, opacity: 0 },
//   { y: 0, opacity: 1, stagger: { each: 0.4 }, duration: 1, delay: 0.5 }
// );
// load.fromTo(
//   ".container .logo ",
//   { y: 10, opacity: 0 },
//   { y: 0, opacity: 1, stagger: { each: 0.4 }, duration: 1, delay: 0.5 }
// );
// load.fromTo(
//   ".container li",
//   { y: 10, opacity: 0, rotation: "360 deg" },
//   {
//     y: 0,
//     opacity: 1,
//     stagger: { each: 0.4 },
//     duration: 1,
//     delay: 0.8,
//     rotation: "0 deg",
//   }
// );
//text animation
let scrollTrig = gsap.timeline({
  scrollTrigger: {
    trigger: ".btn",
    start: "top center",
    end: "bottom bottom ",
    markers: true,
    scrub: true,
  },
});
btn.fromTo(".main-text-1", { y: 100, opacity: 0 }, { y: 0, opacity: 1 });
load.fromTo(".main-text-2", { y: 50, opacity: 0 }, { y: 0, opacity: 1 }, ">.2");
load.fromTo(
  ".btn",
  { y: 50, opacity: 0 },
  { y: 0, opacity: 1, ease: "bounce.out" },
  ">.2"
);
