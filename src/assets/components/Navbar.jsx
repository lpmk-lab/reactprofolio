// Navbar Component
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"
import logo from "../assets/kevinRushLogo.png"
import { FaSquareTwitter } from "react-icons/fa6"

const Navbar = () => {
    return (
        <nav className='mb-20 flex items-center justify-between py-6'>
            {/* Logo Section */}
            <div className='flex flex-shrink-0 items-center'>
                <img className="mx-2 w-10" src={logo} alt="logo" />
            </div> 
            {/* Social Icons Section */}
            <div className="flex items-center justify-center gap-6 text-2xl lg:text-3xl">
                <FaLinkedin className="hover:text-blue-600 transition duration-300" />
                <FaGithub className="hover:text-gray-400 transition duration-300" />
                <FaInstagram className="hover:text-pink-500 transition duration-300" />
                <FaSquareTwitter className="hover:text-blue-400 transition duration-300" />
            </div>
        </nav>
    )
}

export default Navbar