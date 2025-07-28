import React from "react";
import { assets } from "../../../helpers/AssetProvider";
import Container from "../../commonComponent/Container";
import { motion } from "motion/react";

const Arrival: React.FC = () => {
  return (
    <div className="">
      <Container>
        <div className="grid grid-cols-2 gap-x-4">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false }}
            className="w-full"
          >
            <img
              src={assets.arrival_banner_left}
              alt={assets.arrival_banner_left}
              className="w-full"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false }}
            className="w-full"
          >
            <img src={assets.arrival_banner_right} alt="" className="w-full" />
          </motion.div>
        </div>
      </Container>
    </div>
  );
};

export default Arrival;
