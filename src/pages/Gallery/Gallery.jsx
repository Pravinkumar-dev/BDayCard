import React, { useState } from "react";
import ImageOne from "../../assets/image/image 1.jpg";
import ImageTwo from "../../assets/image/image 2.jpg";
import * as motion from "motion/react-client";
import ImageModal from "../../components/common/ImageModal/ImageModal";
import ButtonComponent from "../../components/common/Button/ButtonComponent";
import { useNavigate } from "react-router-dom";

const opacityTransition = {
  duration: 1,
  delay: 0.5,
  ease: [0, 0.71, 0.2, 1.01],
};

function Gallery() {
  const navigate = useNavigate();

  const [selectedSrc, setSelectedSrc] = useState("");

  const handleSetImage = (image) => {
    setSelectedSrc(image);
  };

  const handleCloseModal = () => {
    setSelectedSrc("");
  };

  const handleNavigate = () => {
    navigate("/hug");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={opacityTransition}
      className="w-full h-full p-5 overflow-auto"
    >
      <p className="text-xl font-semibold pb-4">Our cutie Moments</p>
      <div className="flex gap-1.5">
        <div className="w-[50%] h-80 ">
          <img
            src={ImageOne}
            className="w-full h-full object-cover"
            onClick={() => handleSetImage(ImageOne)}
          />
        </div>
        <div className="w-[50%]">
          <div className="h-40 w-full  ">
            <img
              src={ImageOne}
              className="w-full h-full object-cover"
              onClick={() => handleSetImage(ImageOne)}
            />
          </div>
          <div className="h-40 w-full  pt-1.5">
            <img
              src={ImageOne}
              className="w-full h-full object-cover"
              onClick={() => handleSetImage(ImageOne)}
            />
          </div>
        </div>
      </div>
      <div className="w-full h-56 pt-1.5">
        <img
          src={ImageTwo}
          className="w-full h-full object-cover"
          onClick={() => handleSetImage(ImageTwo)}
        />
      </div>
      <div className="flex gap-1.5 pt-1.5">
        <div className="w-[50%] h-80 ">
          <img
            src={ImageOne}
            className="w-full h-full object-cover"
            onClick={() => handleSetImage(ImageOne)}
          />
        </div>
        <div className="w-[50%] h-80 ">
          <img
            src={ImageOne}
            className="w-full h-full object-cover"
            onClick={() => handleSetImage(ImageOne)}
          />
        </div>
      </div>
      <div className="relative">
        <div className="flex gap-1.5 pt-1.5">
          <div className="w-full flex gap-1.5">
            <div className="w-[50%] h-40">
              <img
                src={ImageOne}
                className="w-full h-full object-cover"
                onClick={() => handleSetImage(ImageOne)}
              />
            </div>
            <div className="w-[50%] h-40">
              <img
                src={ImageOne}
                className="w-full h-full object-cover"
                onClick={() => handleSetImage(ImageOne)}
              />
            </div>
          </div>
        </div>
        {/* circular image */}
        <div className="w-44 h-44 rounded-full p-1.5 bg-white absolute top-[-100px] left-[25%] right-[50%]">
          <img
            src={ImageOne}
            className="w-full h-full object-cover rounded-full"
            onClick={() => handleSetImage(ImageOne)}
          />
        </div>
      </div>
      <div className="w-full h-56 pt-1.5">
        <img
          src={ImageTwo}
          className="w-full h-full object-cover"
          onClick={() => handleSetImage(ImageTwo)}
        />
      </div>
      <div className="flex gap-1.5 pt-1.5">
        <div className="w-[50%] h-80 ">
          <img
            src={ImageOne}
            className="w-full h-full object-cover"
            onClick={() => handleSetImage(ImageOne)}
          />
        </div>
        <div className="w-[50%] h-80 ">
          <img
            src={ImageOne}
            className="w-full h-full object-cover"
            onClick={() => handleSetImage(ImageOne)}
          />
        </div>
      </div>
      <div className="pt-5 flex items-center justify-center">
        <ButtonComponent handleClick={handleNavigate} label={"Next"} />
      </div>
      {selectedSrc && (
        <ImageModal imageSrc={selectedSrc} onClose={handleCloseModal} />
      )}
    </motion.div>
  );
}

export default Gallery;
