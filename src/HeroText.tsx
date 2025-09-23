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
      className="flex flex-col items-center text-center"
    >
      
      <motion.div
        variants={reveal}
        initial="hiddenVariant"
        animate="revealedVariant"
        transition={{ delay: animationStart + 1, duration: 0.5 }}
        className="flex flex-col text-[3vw] md:text-[24px] font-bold mb-[30px] pt-[100px]"
      >
        <span className="flex items-center gap-[10px]">
          Innovative IT Solutions <Compass /> for Your Business
        </span>
        <motion.span
          variants={reveal}
          initial="hiddenVariant"
          animate="revealedVariant"
          transition={{ delay: animationStart + 1.1, duration: 0.5 }}
          className="mt-[10px] text-[14px] md:text-[16px] font-normal"
        >
         Empowering your digital transformation with expert IT services.
        </motion.span>
      </motion.div>

      
       <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: animationStart + 2, duration: 0.6 }}
            className="font-medium"
          >
            At <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-bold">
              ADT Company
            </span>, we specialize in delivering innovative IT solutions tailored to meet your business needs. 
            Our expertise in <span className="text-blue-600 font-semibold">software development</span> and{' '}
            <span className="text-purple-600 font-semibold">cloud services</span> ensures that your organization 
            stays ahead in the digital landscape.
          </motion.p>
           <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: animationStart + 2.3, duration: 0.6 }}
          >
            With over <span className="text-gradient bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent font-bold">
              15 years of experience
            </span> in providing electronic systems and IT solutions, we have worked extensively in government 
            and non-government projects in the Kurdistan Region.
          </motion.p>
             {/* Third Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: animationStart + 2.6, duration: 0.6 }}
          >
            Now, by establishing this company, we aim to expand our services in the region and to satisfy you as always. 
            The company's IT projects are carried out by a{' '}
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent font-semibold">
              university team
            </span>, ensuring reliability and excellence for you.
          </motion.p>
           <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: animationStart + 2.6, duration: 0.6 }}
          >
           <Isp />
          </motion.p>
         
     <div className="pt-[50px]"></div>
    </motion.div>

    
  );
}

export default HeroText;


