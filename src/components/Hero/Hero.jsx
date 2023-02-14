import React from "react";
import { fadeIn, slideIn, staggerContainer } from "../../utils/motion";
import css from "./Hero.module.scss";
import { motion } from "framer-motion";
import { FaDiscord } from "react-icons/fa";

const Hero = () => {
  return (
    <section className={`paddings ${css.wrapper} `}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`innerWidth ${css.container}`}
      >
        <div className={css.upperElements}>
          <motion.span
            className="primaryText"
            // className="text-3xl font-bold underline"
            variants={fadeIn("right", "tween", 0.2, 1)}
          >
            Hey ,
            <br />
            ETHER
          </motion.span>
          <motion.span
            className="secondaryText"
            variants={fadeIn("left", "tween", 0.4, 1)}
          >
            Keep Fighting Kings,
            <br />
            We’ve Got Your Back VII & CV
          </motion.span>
        </div>

        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className={css.person}
        >
          <motion.img
            variants={slideIn("up", "tween", 0.5, 1.3)}
            src="./person.png"
            alt=""
          />
        </motion.div>
        {/* 
        <a className={css.email} href="mailto:zainkeepscode@gmail.com">
          zainkeepscode@gmail.com
        </a> */}

        <div className={css.lowerElements}>
          <motion.div
            variants={fadeIn("right", "tween", 0.3, 1)}
            className={css.experience}
          >
            <button className="button-30">
              <a
                className="button-29"
                href="https://discord.gg/etherproject"
              >
                Join <FaDiscord />
              </a>
            </button>
            {/* <div className="primaryText"></div> */}
            {/* <div className="secondaryText">
              <div>Years</div>
              <div>Experience</div>
            </div> */}
          </motion.div>

          <motion.div
            variants={fadeIn("left", "tween", 0.5, 1)}
            className={css.certificate}
          >
            <img src="./certificate.jpg" alt="ether" />
            <span>CERTIFIED NFT</span>
            <span>FOUNDER VII</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
