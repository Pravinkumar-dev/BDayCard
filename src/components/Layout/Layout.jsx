import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";

function Layout() {
  useEffect(() => {
    const setViewportHeight = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
      console.log(vh, "vh");
    };

    setViewportHeight();
    window.addEventListener("resize", setViewportHeight);

    return () => {
      window.removeEventListener("resize", setViewportHeight);
    };
  }, []);
  return (
    <main
      style={{
        height: "calc(var(--vh, 1vh) * 100)",
        overflow: "hidden",
      }}
    >
      <Outlet />
    </main>
  );
}

export default Layout;
