import "./button.css";
import * as motion from "motion/react-client";

const opacityTransition = {
  duration: 1,
  delay: 2,
  ease: [0, 0.71, 0.2, 1.01],
};

function ButtonComponent({ isVisible, handleClick, label }) {
  return (
    isVisible && (
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={opacityTransition}
        onClick={handleClick}
        className="button-50"
        role="button"
      >
        {label}
      </motion.button>
    )
  );
}

export default ButtonComponent;
