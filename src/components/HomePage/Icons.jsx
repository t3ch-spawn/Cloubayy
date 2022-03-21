import React from "react";
import { FaMoon, FaSun, FaGithub, FaBars } from "react-icons/fa";
import { motion } from "framer-motion";
import "./icons.scss";

const Icons = ({ showNav }) => {
  let clickedClass = "clicked";
  const body = document.body;
  const lightTheme = "light";
  const darkTheme = "dark";
  let theme;

  if (localStorage) {
    theme = localStorage.getItem("theme");
  }

  if (theme === lightTheme || theme === darkTheme) {
    body.classList.add(theme);
  } else {
    body.classList.add(lightTheme);
  }

  const switchTheme = (e) => {
    if (theme === darkTheme) {
      body.classList.replace(darkTheme, lightTheme);
      e.target.classList.remove(clickedClass);
      localStorage.setItem("theme", "light");
      theme = lightTheme;
    } else {
      body.classList.replace(lightTheme, darkTheme);
      e.target.classList.add(clickedClass);
      localStorage.setItem("theme", "dark");
      theme = darkTheme;
    }
  };
  return (
    <div className="icons">
      <button
        className={theme === "dark" ? clickedClass : ""}
        id="darkMode"
        onClick={(e) => switchTheme(e)}
      >
        {
          <>
            <FaMoon className="moon" />
            <FaSun className="sun" />
          </>
        }
      </button>
      <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.5 }}>
        <FaGithub />
      </motion.button>
      <motion.button whileTap={{scale: 1.1}}>
        <FaBars className="bars" onClick={showNav} />
      </motion.button>
    </div>
  );
};

export default Icons;
