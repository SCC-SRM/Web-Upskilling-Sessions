import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Landing() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".textbox", {
      scale: 300,
      scrollTrigger: {
        trigger: ".envelope",
        scrub: true,
        start: "+=0",
      },
    });
  }, []);

  return (
    <div>
      <div className="envelope flex h-screen">
        <div className="m-auto align-middle text-center textbox text-8xl font-bold">
          BATLA
        </div>
      </div>
      <p>is GOD</p>
    </div>
  );
}
