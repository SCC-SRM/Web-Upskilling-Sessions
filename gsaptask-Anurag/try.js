gsap.to("#txt", {
  scale: 50,
  scrollTrigger: {
    trigger: "#txt",
    end: "+=5000",
    pin: true,
    scrub: 1,
  },
});
