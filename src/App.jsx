import { useEffect } from "react";
import "./App.css";
import Screen from "./pages/mainScreen/Screen";

function App() {
  useEffect(() => {
    const setViewportHeight = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
      console.log(vh, 'vh')
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
      <Screen />
    </main>
  );
}

export default App;
