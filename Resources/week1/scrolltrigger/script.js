gsap.registerPlugin(ScrollTrigger);

gsap.to(".box", {
	scrollTrigger: {
		trigger: ".box",
		start: "top center",
		end: "top top",
		markers: true,
		scrub: 1,
	},
	x: 500,
	rotate: 360,
	scale: 2,
});
