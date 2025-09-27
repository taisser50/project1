import { motion } from "framer-motion";
import Compass from "./Compass";
import { animationStart, reveal } from "./utils/animation";
import Isp from "./Pages/isp";

function HeroText() {
   return (
    <motion.div
      layout
      initial={{ height: 0 }}
      animate={{ height: "unset" }}
      transition={{ delay: animationStart, duration: 1 }}
      className="flex flex-col items-center text-center px-4 md:px-10 lg:px-20 max-w-5xl mx-auto"
    >
      {/* العنوان */}
      <motion.div
        variants={reveal}
        initial="hiddenVariant"
        animate="revealedVariant"
        transition={{ delay: animationStart + 1, duration: 0.5 }}
        className="flex flex-col text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-6 pt-[100px]"
      >
        <span className="flex items-center justify-center gap-2 flex-wrap">
          Innovative IT Solutions <Compass /> for Your Business
        </span>

        <motion.span
          variants={reveal}
          initial="hiddenVariant"
          animate="revealedVariant"
          transition={{ delay: animationStart + 1.1, duration: 0.5 }}
          className="mt-3 text-sm sm:text-base md:text-lg font-normal"
        >
          Empowering your digital transformation with expert IT services.
        </motion.span>
      </motion.div>

      {/* الفقرة الأولى */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: animationStart + 2, duration: 0.6 }}
        className="text-sm sm:text-base md:text-lg leading-relaxed mb-4"
      >
        At{" "}
        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-bold">
          ADT Company
        </span>
        , we specialize in delivering innovative IT solutions tailored to meet
        your business needs. Our expertise in{" "}
        <span className="text-blue-600 font-semibold">software development</span>{" "}
        and{" "}
        <span className="text-purple-600 font-semibold">cloud services</span>{" "}
        ensures that your organization stays ahead in the digital landscape.
      </motion.p>

      {/* الفقرة الثانية */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: animationStart + 2.3, duration: 0.6 }}
        className="text-sm  sm:text-base md:text-lg leading-relaxed mb-4"
      >
        With over{" "}
        <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent font-bold">
          15 years of experience
        </span>{" "}
        in providing electronic systems and IT solutions, we have worked
        extensively in government and non-government projects in the Kurdistan
        Region.
      </motion.p>

      {/* الفقرة الثالثة */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: animationStart + 2.6, duration: 0.6 }}
        className="text-sm font-heading sm:text-base md:text-lg leading-relaxed mb-4"
      >
        Now, by establishing this company, we aim to expand our services in the
        region and to satisfy you as always. The company's IT projects are
        carried out by a{" "}
        <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent font-semibold">
          university team
        </span>
        , ensuring reliability and excellence for you.
      </motion.p>

      {/* ISP Component */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: animationStart + 2.9, duration: 0.6 }}
        className="w-full mt-4"
      >
        <Isp />
      </motion.div>

     
   
   </motion.div>
  );
}
 export default HeroText;
