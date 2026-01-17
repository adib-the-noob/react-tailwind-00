import { IoMenu, IoLogoElectron } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";

import DiscordIcon from "../assets/discord-icon.png";


const Navbar = () => {

    const handleMenu = () => {
        console.log("Menu clicked");
    }

    return (
        <>
            <nav className="p-3 flex justify-between items-center">
                <a href="#home" className="flex gap-2 items-center">
                    <img src={DiscordIcon} alt="ToDesktop Logo" className="h-8" />
                    <span className="text-lg font-medium font-primary hover:text-primary-600">ToDesktop</span>
                </a>
                <div id="nav-items" className="hidden md:flex gap-12">
                    <a href="" className="font-medium hover:text-primary-600">Price</a>
                    <a href="" className="font-medium hover:text-primary-600">Docs</a>
                    <a href="" className="font-medium hover:text-primary-600">ChangeLog</a>
                    <a href="" className="font-medium hover:text-primary-600">Blog</a>
                    <a href="" className="font-medium hover:text-primary-600">Login</a>
                </div>

                <button className="hidden md:flex gap-2 items-center font-medium hover:text-primary-800 border border-gray-300 hover:border-gray-500 px-6 py-2 rounded-lg" >
                    <IoLogoElectron size={28} className="text-primary-600 hover:text-primary-800" />
                    <span>Electron Developers</span>
                    <FaArrowRight size={14} className="text-primary-600 hover:text-primary-800" />
                </button>
                <button className="md:hidden text-primary-600 hover:text-primary-800" onClick={handleMenu}>
                    <IoMenu size={28} />
                </button>
            </nav>
        </>
    )
}

export default Navbar