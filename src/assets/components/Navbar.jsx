// Navbar Component
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"
import logo from "/logo.png"
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
                <a href="https://www.linkedin.com/in/la-pyae-min-khant-6410b12b4/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin style={{ fontSize: '24px' }} className="hover:text-blue-600 transition duration-300" />
                </a>
                <a href="https://github.com/lpmk-lab" target="_blank" rel="noopener noreferrer">
                    <FaGithub style={{ fontSize: '24px' }} className="hover:text-gray-400 transition duration-300" />
                </a>
                <a href="https://www.instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
                    <FaInstagram style={{ fontSize: '24px' }} className="hover:text-pink-500 transition duration-300" />
                </a>
                <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
                    <FaSquareTwitter style={{ fontSize: '24px' }} className="hover:text-blue-400 transition duration-300" />
                </a>
            </div>
        </nav>
    )
}

export default Navbar