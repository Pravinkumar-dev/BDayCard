import { useState } from "react";
import { steps } from "../../utils/appConstants";
import Footer from "../../components/Footer/Footer";
import * as motion from "motion/react-client";
import WishPage from "./WishPage/WishPage";
import "./screen.css"

const initialState = { label: steps[0].label, isVisible: true, currentStep: 0 };

const opacityTransition = {
  duration: 1,
  delay: 0.5,
  ease: [0, 0.71, 0.2, 1.01],
};

const wishPageTransition = {
  duration: 5,
  delay:0.5,
  ease: [0, 0.71, 0.2, 1.01],
};

function Screen() {
  const [step, setstep] = useState(initialState);

  const handleClick = () => {
    const nextStep = steps[step.currentStep + 1];
    if (nextStep) {
      setTimeout(() => {
        setstep((prev) => ({
          ...prev,
          isVisible: false,
          currentStep: step.currentStep + 1,
        }));
      }, 300);
      setTimeout(() => {
        setstep({
          label: nextStep.label,
          isVisible: true,
        });
      }, nextStep.timeOut);
    }
  };

  return (
    <main
      className={`w-full h-screen overflow-hidden ${
        step.currentStep === 0
          ? "flex flex-col items-center justify-center bg-slate-700"
          : "flex flex-col items-center justify-between wishPageBg bgAnimation"
      }`}
    >
      {step.currentStep === 0 ? (
        <motion.p
          className="text-4xl text-white px-5 text-center mb-10"
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
          <WishPage />
        </motion.div>
      )}
      <Footer state={step} onClick={handleClick} />
    </main>
  );
}

export default Screen;
