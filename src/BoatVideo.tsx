import { motion } from "framer-motion";

function BoatVideo() {
  return (
    <div className="w-full flex justify-center my-8 overflow-hidden">
      <motion.video
        autoPlay
        muted
        loop
        className="w-full h-[220px] sm:h-[350px] md:h-[500px] lg:h-[650px] object-cover rounded-xl shadow-md"
        initial={{ clipPath: "ellipse(100% 100% at 50% 50%)" }}
        animate={{ clipPath: "ellipse(160% 160% at 50% 160%)" }}
        transition={{
          duration: 8,       
          ease: "easeInOut",
        }}
        style={{ willChange: "clip-path" }} 
      >
        <source src="/adt.mp4" type="video/mp4" />
      </motion.video>
    </div>
  );
}

export default BoatVideo;
