import React from "react";
import * as motion from "motion/react-client";
import Hugging from "../../assets/image/hugs.gif";
import { LABELS } from "../../utils/appConstants";
import ButtonComponent from "../../components/common/Button/ButtonComponent";
import { useNavigate } from "react-router-dom";

const opacityTransition = {
  duration: 1,
  delay: 0.5,
  ease: [0, 0.71, 0.2, 1.01],
};

const opacityTransition1 = {
  duration: 1,
  delay: 1.8,
  ease: [0, 0.71, 0.2, 1.01],
};

function Hug() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={opacityTransition}
      className="w-full h-full p-5 flex flex-col justify-between"
    >
      <div>
        <div className="flex justify-center">
          <img src={Hugging} alt="hugs" width={300} height={300} />
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={opacityTransition1}
          className="w-full flex items-center justify-center pt-10"
        >
          <div className="w-[320px]">
            <p className="font-semibold text-2xl">{LABELS.HUG_TEXT1}</p>
            <p className="font-semibold text-xl pt-4">{LABELS.HUG_TEXT2}</p>
            <p className="font-semibold text-xl">{LABELS.HUG_TEXT3}</p>
            <p className="font-semibold text-xl">{LABELS.HUG_TEXT4}</p>
          </div>
        </motion.div>
      </div>
      <div className="md:pb-0 pb-24 flex items-center justify-center">
        <ButtonComponent label="Restart" handleClick={handleNavigate} />
      </div>
    </motion.div>
  );
}

export default Hug;
