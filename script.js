gsap.to(".img-container", {
  scrollTrigger: ".img-container", // start animation when ".box" enters the viewport
  x: 100,
  scrub: false,
  toggleActions: "play pause reverse restart",
});
