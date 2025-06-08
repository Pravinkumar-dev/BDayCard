import { useEffect, useState } from "react";
import { steps } from "../../utils/appConstants";
import Footer from "../../components/Footer/Footer";
import * as motion from "motion/react-client";
import WishPage from "./WishPage/WishPage";
import "./screen.css";
import { useNavigate } from "react-router-dom";

const initialState = { label: steps[0].label, isVisible: true, currentStep: 0 };

const opacityTransition = {
  duration: 1,
  delay: 0.5,
  ease: [0, 0.71, 0.2, 1.01],
};

const wishPageTransition = {
  duration: 5,
  delay: 0.5,
  ease: [0, 0.71, 0.2, 1.01],
};

function Screen({ setPlayMusic }) {
  const navigate = useNavigate();

  const [step, setstep] = useState(initialState);
  const [isCandleOn, setIsCandleOn] = useState(true);

  const startMusic = () => {
    setPlayMusic(true);
  };

  const handleClick = () => {
    setTimeout(() => {
      if (step.currentStep === 1) {
        startMusic();
      } else if (step.currentStep === 4) {
        setIsCandleOn(false);
      } else if (step.currentStep === 5) {
        navigate("/gallery");
      }
      setstep((prev) => ({
        ...prev,
        isVisible: false,
        currentStep: step.currentStep + 1,
      }));
    }, 300);

    const nextStep = steps[step.currentStep + 1];
    if (nextStep) {
      setTimeout(() => {
        setstep((prev) => ({
          ...prev,
          label: nextStep.label,
          isVisible: true,
        }));
      }, nextStep.timeOut);
    }
  };

  useEffect(() => {
    return () => {
      setstep(initialState);
      setIsCandleOn(true);
    };
  }, []);

  return (
    <main
      className={`w-full h-screen overflow-hidden ${
        step.currentStep === 0 ? "  bg-slate-700" : "wishPageBg"
      }`}
    >
      <div
        className={`w-full h-full flex flex-col items-center ${
          step.currentStep !== 0
            ? "bgAnimation justify-between"
            : "justify-center"
        }`}
      >
        {step.currentStep === 0 ? (
          <motion.p
            className="text-4xl text-white px-5 text-center mb-10 leading-14"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={opacityTransition}
          >
            This room is really dim. Let&apos;s add some lighting.
          </motion.p>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={wishPageTransition}
          >
            <WishPage step={step} isCandleOn={isCandleOn} />
          </motion.div>
        )}
        <Footer state={step} onClick={handleClick} />
      </div>
    </main>
  );
}

export default Screen;
