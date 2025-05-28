import Header from "./Components/Header/Header";
import BirthDayText from "../../../assets/image/hbText.png";
import LeftRibbon from "../../../assets/image/leftRibbon.png";
import RightRibbon from "../../../assets/image/rightRibbon.png";
import Cake from "../../../assets/image/cake.png";
import "./wishPage.css";
import * as motion from "motion/react-client";
import Candle from "../../../components/common/Candle/Candle";
import { LABELS } from "../../../utils/appConstants";
import Confetti from "../../../components/Confetti/Confetti";

function WishPage({ step, isCandleOn }) {
  return (
    <section>
      <Header />
      {step.currentStep >= 3 && (
        <>
          <motion.img
            src={LeftRibbon}
            alt="ribbon"
            className="absolute top-0 left-0"
            width={40}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          <div className="w-full flex items-center justify-center">
            <motion.img
              src={BirthDayText}
              alt="BCard"
              initial={{ y: "-100vh", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 2, ease: "easeInOut", delay: 2 }}
            />
          </div>
          <motion.img
            src={RightRibbon}
            alt="ribbon"
            className="absolute top-0 right-0"
            width={40}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </>
      )}
      {step.currentStep >= 4 && (
        <div
          className={`w-full flex items-center justify-center relative ${
            step.currentStep === 5 && "hideCake removeCake"
          } `}
        >
          <motion.div
            className={"absolute top-14"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut", delay: 2 }}
          >
            <Candle isOn={isCandleOn} />
          </motion.div>
          <motion.img
            src={Cake}
            alt="cake"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            width={250}
            className="mt-32"
          />
        </div>
      )}
      {step.currentStep === 5 && (
        <div className="w-full flex items-center justify-center">
          <div className="w-[320px] pt-16">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, ease: "easeInOut", delay: 3.5 }}
              className="font-semibold text-xl"
            >
              {LABELS.WISH_HEAD}
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, ease: "easeInOut", delay: 3.5 }}
              className="pt-2"
            >
              {LABELS.WISH_SUB}
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, ease: "easeInOut", delay: 3.5 }}
              className="pt-2"
            >
              {LABELS.WISH_TEXT}
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, ease: "easeInOut", delay: 3.5 }}
              className="pt-8 font-semibold"
            >
              {LABELS.WISH_TEXT2}
            </motion.p>
          </div>
          <Confetti />
        </div>
      )}
    </section>
  );
}

export default WishPage;
