import React, { useEffect, useState } from "react";
import styles from "./index.module.css";

export const Layout = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const offset = scrollY * 0.2; // Установите коэффициент смещения здесь

  const calculateTopPosition = (baseTop: number) => {
    const newPosition = baseTop - offset;
    return newPosition > window.innerHeight ? newPosition - window.innerHeight : newPosition < -200 ? newPosition + window.innerHeight : newPosition;
  };

  return (
    <div className={styles.background}>
      <img
        style={{ position: "absolute", top: `${calculateTopPosition(100)}px`, left: "10%" }}
        src={require("../../assest/broccoli.png")}
        alt="broccoli"
      />
      <img
        style={{ position: "absolute", top: `${calculateTopPosition(150)}px`, right: "15%" }}
        src={require("../../assest/champignon.png")}
        alt="champignon"
      />
      <img
        style={{ position: "absolute", top: `${calculateTopPosition(window.innerHeight - 400)}px`, left: "15%" }}
        src={require("../../assest/pepper.png")}
        alt="pepper"
      />
      <img
        style={{ position: "absolute", top: `${calculateTopPosition(window.innerHeight - 400)}px`, right: "10%" }}
        src={require("../../assest/potatoes.png")}
        alt="potatoes"
      />
      <img
        style={{ position: "absolute", top: `${calculateTopPosition(window.innerHeight - 150)}px`, right: "15%" }}
        src={require("../../assest/tomatoes.png")}
        alt="tomatoes"
      />
    </div>
  );
};
