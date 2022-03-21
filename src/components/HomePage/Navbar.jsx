import { Link } from "react-router-dom";
import { FaCaretDown, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import "./Navbar.css";

const Navbar = ({ shownav, setShownav }) => {
  const removeNav = () => {
    setShownav(false);
  };
  return (
    <>
      <motion.nav animate={{ opacity: [0, 1] }}>
        <ul>
          <li>
            <input className="search" type="text" placeholder="Search" />
            <motion.span
            whileTap={{rotate: 360}}>
              <FaTimes className="times" onClick={removeNav} />
            </motion.span>
          </li>
          <li onClick={removeNav}>
            <Link to="/">Introduction</Link>
          </li>

          <li onClick={removeNav}>
            <span>
              Software Development <FaCaretDown />{" "}
            </span>
            <div className="submenu">
              <ul>
                <li onClick={removeNav}>
                  <Link to="/html">HTML</Link>
                </li>
                <li onClick={removeNav}>
                  <Link to="/css">CSS</Link>
                </li>
                <li onClick={removeNav}>
                  <Link to="/js">JavaScript</Link>
                </li>
                <li onClick={removeNav}>
                  <Link to="/react">React</Link>
                </li>
                <li onClick={removeNav}>
                  <Link to="/firebase">Firebase</Link>
                </li>
                <li onClick={removeNav}>
                  <Link to="/git">Git</Link>
                </li>
                <li onClick={removeNav}>
                  <Link to="/python">Python</Link>
                </li>
              </ul>
            </div>
          </li>
          <li onClick={removeNav}>
            <span>How To</span>
          </li>
          <li>
            <span>
              Interview Questions <FaCaretDown />{" "}
            </span>
            <div className="submenu">
              <ul>
                <li onClick={removeNav}>
                  <Link to="/jsq">JavaScript</Link>
                </li>
                <li onClick={removeNav}>
                  <Link to="/reactq">React</Link>
                </li>
                <li onClick={removeNav}>
                  <Link to="/pyq">Python</Link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </motion.nav>
    </>
  );
};

export default Navbar;
