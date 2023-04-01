gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".box").forEach((box) => {
	ScrollTrigger.create({
		trigger: box,
		start: "top top",
		pin: true,
		// pinSpacing: false,
		pinSpacing: false,
		scrub: true,
	});
});
