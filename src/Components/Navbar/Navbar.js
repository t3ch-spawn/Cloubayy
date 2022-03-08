import { FaBars, FaImage } from "react-icons/fa"
import "./Navbar.css"

const Navbar = ({ showModal }) => {
    return (
        <header>
            <div className="header">
                <div className="logo">
                    <FaImage className="logo-img" />
                    CloudBay</div>
                <nav>
                    <ul>
                        
                        <FaBars className="bars" onClick={showModal} />
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Navbar