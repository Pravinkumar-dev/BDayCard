import React, { useEffect, useState } from "react";
// import { useWindowSize } from "react-use";
import ReactConfetti from "react-confetti";

function Confetti() {
  const [resolution, setResolution] = useState({ width: null, height: null });

  useEffect(() => {
    const windowWidth = window.screen.width;
    const windowHeight = window.screen.height;

    setResolution({ width: windowWidth, height: windowHeight });
  }, []);

  return <ReactConfetti width={resolution.width} height={resolution.height} />;
}

export default Confetti;
