import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Home() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".events", {
      duration: 0.5,
      scale: 300,
      scrollTrigger: {
        trigger: ".element",
        start: "+=0",
        scrub: true,
      },
    });

    gsap.to(".events", {
      duration: 3,
      background: "radial-gradient(circle at center, #ff0080, #5e00ff)",
      repeat: -1,
      yoyo: true,
    });
  }, []);

  return (
    <div>
      <div className="h-screen flex justify-center items-center element">
        <div className="events w-64 h-64 rounded-full flex justify-center items-center text-white text-6xl font-bold">
          NITIN
        </div>
      </div>
    </div>
  );
}
