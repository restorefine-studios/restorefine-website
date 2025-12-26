// myComponent.tsx

import React, { useState, useEffect } from "react";
// @ts-ignore
import BubbleUI from "react-bubble-ui";
import "react-bubble-ui/dist/index.css";
import Child from "./ChildComponent";
import { data } from "./data";
// import "../BubbleUi/";

interface BubbleProps {
  onClientSelect?: (bub: React.ReactElement) => void;
  bubbleData?: React.ReactElement[];
}

export default function Bubble({ onClientSelect, bubbleData }: BubbleProps) {
  const [bubble, setBubble] = useState<React.ReactElement | string>("");
  const [isMobile, setIsMobile] = useState(false);

  // Use bubbleData if provided, otherwise fall back to all data
  const displayData = bubbleData || data.map((item) => item.element);

  // Detect mobile screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Different options for mobile and desktop
  const options = isMobile
    ? {
        size: 105,
        minSize: 28,
        gutter: 0,
        provideProps: false,
        numCols: 5,
        fringeWidth: 50,
        yRadius: 60,
        xRadius: 60,
        cornerRadius: 60,
        showGuides: false,
        compact: false,
        gravitation: 8,
      }
    : {
        size: 200,
        minSize: 45,
        gutter: 10,
        provideProps: true,
        numCols: 5,
        fringeWidth: 40,
        yRadius: 190,
        xRadius: 190,
        cornerRadius: 60,
        showGuides: false,
        compact: false,
        gravitation: 8,
      };

  useEffect(() => {
    const bubbles = document.querySelector("._2MD0k") as HTMLElement | null;
    const img = document.querySelectorAll(".childComponent") as NodeListOf<HTMLElement>;
    if (bubbles) {
      img.forEach(
        (i) =>
          (i.ondragstart = () => {
            return false;
          })
      );
      const dragspeed = 1;
      let isDown = false;
      let startX: number;
      let startY: number;
      let scrollLeft: number;
      let scrollTop: number;

      bubbles.addEventListener("mousedown", (e: MouseEvent) => {
        isDown = true;
        bubbles.classList.add("active");
        startX = e.pageX - bubbles.offsetLeft;
        startY = e.pageY - bubbles.offsetTop;
        scrollLeft = bubbles.scrollLeft;
        scrollTop = bubbles.scrollTop;
      });
      bubbles.addEventListener("mouseleave", () => {
        isDown = false;
        bubbles.classList.remove("active");
      });
      bubbles.addEventListener("mouseup", () => {
        isDown = false;
        bubbles.classList.remove("active");
      });
      bubbles.addEventListener("mousemove", (e: MouseEvent) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - bubbles.offsetLeft;
        const y = e.pageY - bubbles.offsetTop;
        const walk = (x - startX) * dragspeed;
        const topwalk = (y - startY) * dragspeed;
        bubbles.scrollLeft = scrollLeft - walk;
        bubbles.scrollTop = scrollTop - topwalk;
      });
    }
  });

  const handleClick = (bub: React.ReactElement) => {
    setBubble(bub);
    // Call the parent callback if provided
    if (onClientSelect) {
      onClientSelect(bub);
    }
  };

  const children = displayData?.map((data, i) => {
    return <Child data={data} className="child" key={i} setClick={handleClick} />;
  });

  return (
    <>
      <BubbleUI key={1} options={options} className="myBubbleUI lg:mt-4 pb-8 ">
        {children}
      </BubbleUI>
    </>
  );
}
