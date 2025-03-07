import Header from "./Components/Header/Header";
import BirthDayText from "../../../assets/image/hbText.png";
import LeftRibbon from "../../../assets/image/leftRibbon.png";
import RightRibbon from "../../../assets/image/rightRibbon.png";
import Cake from "../../../assets/image/cake.png";
import "./wishPage.css";
import * as motion from "motion/react-client";
import Candle from "../../../components/common/Candle/Candle";

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
        <div className="w-full flex items-center justify-center relative">
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
    </section>
  );
}

export default WishPage;
