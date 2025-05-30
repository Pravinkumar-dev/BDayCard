import React from "react";
import "./imageModal.css";
import * as motion from "motion/react-client";
import CloseIcon from "../../../assets/icons/close.svg";

const opacityTransition = {
  duration: 0.3,
  delay: 0.5,
  easeInOut: [0, 0.71, 0.2, 1.01],
};

function ImageModal({ imageSrc, onClose }) {
  return (
    <motion.div
      className="modal"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={opacityTransition}
    >
      <div className="closeBtn" onClick={onClose}>
        <img src={CloseIcon} alt="closeIcon" />
      </div>
      <motion.div
        className="content flex items-center justify-center"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={opacityTransition}
      >
        <img
          src={imageSrc}
          alt="modalImage"
        />
      </motion.div>
    </motion.div>
  );
}

export default ImageModal;
