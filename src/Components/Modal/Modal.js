
import "./Modal.css"
import ModalImage from "../IMG-20211216-WA0001.jpg"
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa"
import { motion } from "framer-motion"

const Modal = () => {
    return (
        <motion.div className="modal"
            initial={{opacity: 0}}
            animate={{opacity: [0, 1]}}
        >
            <div className="modal-img">
                <img src={ModalImage} alt="Modal Image" />
            </div>
            <p>
            I created this website just to have my own Pixabay😂.
            It didn't take me a long time to do this, because I tried to make it as simple as possible.
            It was built with React, CSS and Pixabay API.

            </p>
            <section className="contact-section">
                <h2>Contact</h2>
                <p>For any project idea or any feedback</p>
                <div className="social-media">
                    <ul>
                        <li>
                            <FaFacebook />
                        </li>
                        <li>
                            <FaTwitter />
                        </li>
                        <li>
                            <FaGithub />
                        </li>
                        <li>
                            <FaInstagram />
                        </li>
                    </ul>
                </div>
            </section>
        </motion.div>
    )
}

export default Modal