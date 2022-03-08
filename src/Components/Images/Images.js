import "./Images.css"
import { motion } from "framer-motion"

const ImagesCard = ({ url, index}) => {
    return (
        <>
        <motion.div className="img-container"
            initial={{opacity: 0}}
            animate={{ opacity: [0, 1]}}
            transition={{ duration: 0.5, delay: index / 5 }}
        >
        <img src={url} alt="img" />
        </motion.div>
        </>
    )
}
export default ImagesCard