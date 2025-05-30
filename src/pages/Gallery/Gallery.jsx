import { useState } from "react";
import Image1 from "../../assets/mine/image1.png";
import Image2 from "../../assets/mine/image2.png";
import Image3 from "../../assets/mine/image3.png";
import Image4 from "../../assets/mine/image4.png";
import Image5 from "../../assets/mine/image5.png";
import Image6 from "../../assets/mine/image6.png";
import Image7 from "../../assets/mine/image7.png";
import Image8 from "../../assets/mine/image8.png";
import Image9 from "../../assets/mine/image9.png";
import Image10 from "../../assets/mine/image10.png";
import Image11 from "../../assets/mine/image11.png";
import Image12 from "../../assets/mine/image12.png";
import Image13 from "../../assets/mine/image13.png";
import Image14 from "../../assets/mine/image14.png";
import Image15 from "../../assets/mine/image15.png";
import Image16 from "../../assets/mine/image16.png";
import Image17 from "../../assets/mine/image17.png";
import Image18 from "../../assets/mine/image18.png";
import Image19 from "../../assets/mine/image19.png";
import Image20 from "../../assets/mine/image20.png";
import Image21 from "../../assets/mine/image21.png";

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
      className="w-full h-full p-5 overflow-auto flex justify-center"
    >
      <div className="md:w-[500px] w-full">
        <p className="text-xl font-semibold pb-4">Our cutie Moments</p>
        <div className="flex gap-1.5">
          <div className="w-[50%] h-80 ">
            <img
              src={Image1}
              className="w-full h-full object-cover"
              onClick={() => handleSetImage(Image1)}
            />
          </div>
          <div className="w-[50%]">
            <div className="h-40 w-full  ">
              <img
                src={Image3}
                className="w-full h-full object-cover"
                onClick={() => handleSetImage(Image3)}
              />
            </div>
            <div className="h-40 w-full  pt-1.5">
              <img
                src={Image4}
                className="w-full h-full object-cover"
                onClick={() => handleSetImage(Image4)}
              />
            </div>
          </div>
        </div>
        <div className="w-full h-56 pt-1.5">
          <img
            src={Image5}
            className="w-full h-full object-cover"
            onClick={() => handleSetImage(Image5)}
          />
        </div>
        <div className="flex gap-1.5 pt-1.5">
          <div className="w-[50%] h-80 ">
            <img
              src={Image2}
              className="w-full h-full object-cover"
              onClick={() => handleSetImage(Image2)}
            />
          </div>
          <div className="w-[50%] h-80 ">
            <img
              src={Image15}
              className="w-full h-full object-cover"
              onClick={() => handleSetImage(Image15)}
            />
          </div>
        </div>
        <div className="relative">
          <div className="flex gap-1.5 pt-1.5">
            <div className="w-full flex gap-1.5">
              <div className="w-[50%] h-40">
                <img
                  src={Image7}
                  className="w-full h-full object-cover"
                  onClick={() => handleSetImage(Image7)}
                />
              </div>
              <div className="w-[50%] h-40">
                <img
                  src={Image8}
                  className="w-full h-full object-cover"
                  onClick={() => handleSetImage(Image8)}
                />
              </div>
            </div>
          </div>
          {/* circular image */}
          <div className="w-44 h-44 rounded-full p-1.5 bg-white absolute top-[-100px] left-[25%] right-[50%]">
            <img
              src={Image12}
              className="w-full h-full object-cover rounded-full"
              onClick={() => handleSetImage(Image12)}
            />
          </div>
        </div>
        <div className="w-full h-56 pt-1.5">
          <img
            src={Image9}
            className="w-full h-full object-cover"
            onClick={() => handleSetImage(Image9)}
          />
        </div>
        <div className="flex gap-1.5 pt-1.5">
          <div className="w-[50%] h-80 ">
            <img
              src={Image10}
              className="w-full h-full object-cover"
              onClick={() => handleSetImage(Image10)}
            />
          </div>
          <div className="w-[50%] h-80 ">
            <img
              src={Image11}
              className="w-full h-full object-cover"
              onClick={() => handleSetImage(Image11)}
            />
          </div>
        </div>
        <div className="w-full h-56 pt-1.5">
          <img
            src={Image19}
            className="w-full h-full object-cover"
            onClick={() => handleSetImage(Image19)}
          />
        </div>
        <div className="flex gap-1.5 pt-1.5">
          <div className="w-[50%] h-80 ">
            <img
              src={Image13}
              className="w-full h-full object-cover"
              onClick={() => handleSetImage(Image13)}
            />
          </div>
          <div className="w-[50%] h-80 ">
            <img
              src={Image14}
              className="w-full h-full object-cover"
              onClick={() => handleSetImage(Image14)}
            />
          </div>
        </div>
        <div className="w-full h-56 pt-1.5">
          <img
            src={Image20}
            className="w-full h-full object-cover"
            onClick={() => handleSetImage(Image20)}
          />
        </div>
        <div className="flex gap-1.5 pt-1.5">
          <div className="w-full flex gap-1.5">
            <div className="w-[50%] h-40">
              <img
                src={Image17}
                className="w-full h-full object-cover"
                onClick={() => handleSetImage(Image17)}
              />
            </div>
            <div className="w-[50%] h-40">
              <img
                src={Image18}
                className="w-full h-full object-cover"
                onClick={() => handleSetImage(Image18)}
              />
            </div>
          </div>
        </div>
        <div className="w-full h-56 pt-1.5">
          <img
            src={Image21}
            className="w-full h-full object-cover"
            onClick={() => handleSetImage(Image21)}
          />
        </div>
        <div className="flex gap-1.5 pt-1.5">
          <div className="w-[50%] h-80 ">
            <img
              src={Image16}
              className="w-full h-full object-cover"
              onClick={() => handleSetImage(Image16)}
            />
          </div>
          <div className="w-[50%] h-80 ">
            <img
              src={Image6}
              className="w-full h-full object-cover"
              onClick={() => handleSetImage(Image6)}
            />
          </div>
        </div>
        <div className="pt-5 flex items-center justify-center">
          <ButtonComponent handleClick={handleNavigate} label={"A Big Huggg 🫂"} />
        </div>
        {selectedSrc && (
          <ImageModal imageSrc={selectedSrc} onClose={handleCloseModal} />
        )}
      </div>
    </motion.div>
  );
}

export default Gallery;
