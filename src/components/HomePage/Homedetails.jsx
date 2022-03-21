import React from "react";
import "./Homedetails.scss";
import avatar from "../../images__1_-removebg-preview.png";
import { motion } from "framer-motion";

const Homedetails = () => {
  return (
    <div className="home__details">
      <motion.h2 initial={{ y: 50 }} animate={{ y: 0 }}>
        Godwin Docs
      </motion.h2>
      <motion.p initial={{opacity: 0}} animate={{ opacity: 1 }} transition={{delay: 1, duration: 1}}>
        This is my personal library or reference. It is just like my second
        brain. I created this for myself and for anybody that likes it to reduce
        the rate at which I google the same thing different times
      </motion.p>
      <motion.p initial={{opacity: 0}} animate={{ opacity: 1}} transition={{delay: 2, duration: 1}}>
        It's very exhausting when I have to repeatedly search the same thing on
        Google, so I felt like I should create my own personal docs site
      </motion.p>
      <motion.p initial={{opacity: 0}} animate={{ opacity: 1}} transition={{delay: 3, duration: 1}}>
        If you found that there are some things that are outdated or may be
        useful for me too, let me know by sending them to my email.
      </motion.p>
      <div className="avatar">
        <motion.img src={avatar} alt="avatar" drag dragConstraints={{left: 80, right: 10, top: 10,  bottom: 100}} />
        <p>
          Did you know that you can drag this image any where?.. Sounds funny
        </p>
      </div>
    </div>
  );
};

export default Homedetails;
