"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    gsap: any;
    ScrollTrigger: any;
  }
}

export default function Animations() {
  useEffect(() => {
    // Load scripts sequentially then run animations
    const loadScript = (src: string): Promise<void> => {
      return new Promise((resolve, reject) => {
        const existing = document.querySelector(`script[src="${src}"]`);
        if (existing) {
          resolve();
          return;
        }
        const script = document.createElement("script");
        script.src = src;
        script.onload = () => resolve();
        script.onerror = reject;
        document.body.appendChild(script);
      });
    };

    const runAnimations = () => {
      const gsap = window.gsap;
      const ScrollTrigger = window.ScrollTrigger;

      if (!gsap || !ScrollTrigger) return;

      gsap.registerPlugin(ScrollTrigger);

      // Animate lines on Services section
      const servicesSection = document.querySelector(".section.services");
      if (servicesSection) {
        const animate = gsap.timeline({
          scrollTrigger: {
            trigger: servicesSection,
            start: "top center",
          },
        });
        animate.to(".service-line", {
          width: "100%",
          duration: 1,
          ease: "Power4.easeOut",
          stagger: { each: 0.3, from: "start" },
        });
      }

    };

    loadScript("/js/gsap.min.js")
      .then(() => loadScript("/js/CustomEase.min.js"))
      .then(() => loadScript("/js/ScrollTrigger.min.js"))
      .then(() => runAnimations())
      .catch(console.error);

    // Footer hover effect
    const scrollTopBtn = document.getElementById("scroll-to-top-btn");
    const innerTop = document.querySelector(".inner-top");
    const arrowFooter = document.querySelector(".arrow-footer");

    if (scrollTopBtn && innerTop && arrowFooter) {
      scrollTopBtn.addEventListener("mouseenter", () => {
        innerTop.classList.add("open");
        arrowFooter.classList.add("open");
      });
      scrollTopBtn.addEventListener("mouseleave", () => {
        innerTop.classList.remove("open");
        arrowFooter.classList.remove("open");
      });
    }

    // Scroll to top
    const scrollTopAnchor = document.querySelector('a[href="#scroll-to-top"]');
    if (scrollTopAnchor) {
      scrollTopAnchor.addEventListener("click", (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }

    // App height for mobile viewport
    const appHeight = () => {
      document.documentElement.style.setProperty(
        "--app-height",
        `${window.innerHeight}px`
      );
    };
    window.addEventListener("resize", appHeight);
    appHeight();

    return () => {
      window.removeEventListener("resize", appHeight);
    };
  }, []);

  return null;
}
