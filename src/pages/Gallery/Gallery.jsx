import React from "react";
import ImageOne from "../../assets/image/image 1.jpg";
import ImageTwo from "../../assets/image/image 2.jpg";
import * as motion from "motion/react-client";

const opacityTransition = {
  duration: 1,
  delay: 0.5,
  ease: [0, 0.71, 0.2, 1.01],
};

function Gallery() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={opacityTransition}
      className="w-full h-full p-5 overflow-auto"
    >
      <div className="flex gap-1.5">
        <div className="w-[50%] h-80 bg-amber-50">
          <img src={ImageOne} className="w-full h-full object-cover" />
        </div>
        <div className="w-[50%]">
          <div className="h-40 w-full bg-amber-50 ">
            <img src={ImageOne} className="w-full h-full object-cover" />
          </div>
          <div className="h-40 w-full bg-amber-50 pt-1.5">
            <img src={ImageOne} className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
      <div className="w-full h-56 pt-1.5">
        <img src={ImageTwo} className="w-full h-full object-cover" />
      </div>
      <div className="flex gap-1.5 pt-1.5">
        <div className="w-[50%] h-80 bg-amber-50">
          <img src={ImageOne} className="w-full h-full object-cover" />
        </div>
        <div className="w-[50%] h-80 bg-amber-50">
          <img src={ImageOne} className="w-full h-full object-cover" />
        </div>
      </div>
      <div className="flex gap-1.5 pt-1.5">
        <div className="w-[50%]">
          <div className="h-40 w-full bg-amber-50 ">
            <img src={ImageOne} className="w-full h-full object-cover" />
          </div>
          <div className="h-40 w-full bg-amber-50 pt-1.5">
            <img src={ImageOne} className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="w-[50%]">
          <div className="h-40 w-full bg-amber-50 ">
            <img src={ImageOne} className="w-full h-full object-cover" />
          </div>
          <div className="h-40 w-full bg-amber-50 pt-1.5">
            <img src={ImageOne} className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Gallery;
