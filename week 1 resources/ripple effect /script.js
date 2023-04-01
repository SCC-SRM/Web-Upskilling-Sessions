var tl = gsap.timeline({ repeat: -1, repeatDelay: 0 });
gsap.utils.toArray(".circles").forEach((circle) => {
	tl.fromTo(
		circle,
		{ opacity: 1, scale: 0, duration: 1 },
		{ opacity: 0, scale: 1, duration: 1 }
	);
});
