"use client";
import styles from "./index.module.scss";
import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";

export default function InfiniteText(props) {
  const { content } = props;

  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);

  let xPercent = 0;

  let direction = -1;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.set(secondText.current, {
      left: secondText.current.getBoundingClientRect().width,
    });

    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,

        scrub: 0.5,

        start: 0,

        end: window.innerHeight,

        onUpdate: (e) => (direction = e.direction * -1),
      },

      x: "-500px",
    });

    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0;
    } else if (xPercent > 0) {
      xPercent = -100;
    }

    gsap.set(firstText.current, { xPercent: xPercent });

    gsap.set(secondText.current, { xPercent: xPercent });

    requestAnimationFrame(animate);

    xPercent += 0.04 * direction;
  };

  return (
    <section className={styles.infiniteText}>
      <div className={styles.container}>
        <div ref={slider} className={styles.slider}>
          <p ref={firstText}>{content}</p>
          <p ref={secondText}>{content}</p>
        </div>
      </div>
    </section>
  );
}
