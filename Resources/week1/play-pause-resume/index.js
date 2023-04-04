let nav = document.querySelector(".nav");

let tween = gsap.to(".purple", {
	duration: 10,
	x: () => nav.offsetWidth, // animate by the px width of the nav
	xPercent: -100, // offset by the width of the box
	rotation: 360,
	ease: "none",
	paused: true,
});

document.querySelector("#play").onclick = () => tween.play();
document.querySelector("#pause").onclick = () => tween.pause();
document.querySelector("#resume").onclick = () => tween.resume();
document.querySelector("#reverse").onclick = () => tween.reverse();
document.querySelector("#restart").onclick = () => tween.restart();
