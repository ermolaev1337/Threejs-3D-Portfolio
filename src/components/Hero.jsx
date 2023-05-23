import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 xs:top-[120px] top-[70px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText}`}>
            <span className="text-primary">Hello, I am </span><span className="text-[#915EFF]">Egor Ermolaev</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-secondary`}>
            Doctoral Researcher<br/>
            Software Engineer<br/>
            Entrepreneur
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
