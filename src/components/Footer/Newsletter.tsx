import React from "react";
import { assets } from "../../helpers/AssetProvider";
import Button from "../commonComponent/Button";
import { motion } from "motion/react";

const Newsletter = () => {
  return (
    <section className="bg-secondary-700 text-[var(--color-gray-00)] py-12! px-4! md:px-20! text-center flex items-center justify-center flex-col">
      <h2 className="heading2 text-gray-00 mb-4!">
        Subscribe to our newsletter
      </h2>
      <p className="body-small-400 text-gray-00 opacity-75 max-w-lg mx-auto mb-6!">
        Praesent fringilla erat a laoreet egestas. Donec vehicula tempor libero
        et cursus. Donec non quam urna. Quisque vitae porta ipsum.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center rounded px-4! py-2! items-center w-[624px] mx-auto bg-gray-00">
        <input
          type="email"
          placeholder="Email address"
          className="w-full sm:w-auto flex-1 px-4! py-2! rounded-md text-black outline-none"
        />
        <Button className="bg-primary-500 hover:bg-primary-700 px-6! py-2! rounded-md text-white font-semibold transition-all">
          SUBSCRIBE
        </Button>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-8 mt-8!">
        <motion.div
          initial={{ scale: 1 }}
          transition={{ duration: 0.4 }}
          whileHover={{ scale: 1.2 }}
          className=""
        >
          <img src={assets.google} alt="Google" className="" />
        </motion.div>
        <motion.div
          initial={{ scale: 1 }}
          transition={{ duration: 0.4 }}
          whileHover={{ scale: 1.2 }}
          className=""
        >
          <img src={assets.amazon} alt="Amazon" className="" />
        </motion.div>
        <motion.div
          initial={{ scale: 1 }}
          transition={{ duration: 0.4 }}
          whileHover={{ scale: 1.2 }}
          className=""
        >
          <img src={assets.philips} alt="Philips" className="" />
        </motion.div>
        <motion.div
          initial={{ scale: 1 }}
          transition={{ duration: 0.4 }}
          whileHover={{ scale: 1.2 }}
          className=""
        >
          <img src={assets.toshiba} alt="Toshiba" className="" />
        </motion.div>
        <motion.div
          initial={{ scale: 1 }}
          transition={{ duration: 0.4 }}
          whileHover={{ scale: 1.2 }}
          className=""
        >
          <img src={assets.samsung} alt="Samsung" className="" />
        </motion.div>
      </div>
    </section>
  );
};

export default React.memo(Newsletter) || Newsletter;
