import { motion } from "framer-motion";
import { Player } from "@lottiefiles/react-lottie-player";
import peepoNarutoRun from "@/public/peepoNarutoRun.gif";
import Image from "next/image";

export default function OrderAnimation() {
  return (
    <div className="flex items-center justify-center flex-col mt-24 p-12 pb-10">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Prepping your order 🤌
      </motion.h1>
      <Image
        src={peepoNarutoRun}
        alt="peepo run"
        width={200}
        height={200}
        className="mt-10"
      />
    </div>
  );
}
