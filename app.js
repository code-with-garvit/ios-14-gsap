gsap.registerPlugin(ScrollTrigger);

var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".hero__content-text",
    scrub: 1,
    start: "center bottom",
    end: "+=80"
  }
});

tl.from(".hero__content-text", {
  y: 50,
  opacity: 0
});