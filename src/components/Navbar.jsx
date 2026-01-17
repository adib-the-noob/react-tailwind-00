import { useRef } from "react";
import { IoMenu, IoLogoElectron } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import { IoIosCloseCircleOutline } from "react-icons/io";
import DiscordIcon from "../assets/discord-icon.png";


const Navbar = () => {
    const navDialogRef = useRef(null);

    const handleMenu = () => {
        navDialogRef.current.classList.toggle("hidden");
    }

    return (
        <>
            <nav className="p-3 flex justify-between items-center">
                <a href="#home" className="flex gap-2 items-center">
                    <img src={DiscordIcon} alt="ToDesktop Logo" className="h-8" />
                    <span className="text-lg font-medium font-primary hover:text-primary-600">ToDesktop</span>
                </a>
                <div id="nav-items" className="hidden lg:flex gap-12">
                    <a href="" className="font-medium hover:text-primary-600">Price</a>
                    <a href="" className="font-medium hover:text-primary-600">Docs</a>
                    <a href="" className="font-medium hover:text-primary-600">ChangeLog</a>
                    <a href="" className="font-medium hover:text-primary-600">Blog</a>
                    <a href="" className="font-medium hover:text-primary-600">Login</a>
                </div>

                {/* Electron Section */}
                <button className="hidden lg:flex gap-2 items-center font-medium hover:text-primary-800 border border-gray-300 hover:border-gray-500 px-6 py-2 rounded-lg" >
                    <IoLogoElectron size={28} className="text-primary-600 hover:text-primary-800" />
                    <span>Electron Developers</span>
                    <FaArrowRight size={14} className="text-primary-600 hover:text-primary-800" />
                </button>
                <button className="md:hidden text-primary-600 hover:text-primary-800" onClick={handleMenu}>
                    <IoMenu size={28} />
                </button>

                {/* mobile section appeared */}
                <div ref={navDialogRef} id="nav-dialog" className="hidden fixed z-10 md:hidden inset-0 p-3 bg-white">
                    <div id="nav-bar" className="flex justify-between">
                        <a href="#home" className="flex gap-2 items-center">
                            <img src={DiscordIcon} alt="ToDesktop Logo" className="h-8" />
                            <span className="text-lg font-medium font-primary hover:text-primary-600">ToDesktop</span>
                        </a>
                        <button className="md:hidden text-primary-600 hover:text-primary-800" onClick={handleMenu}>
                            <IoIosCloseCircleOutline size={28} className="text-primary-600 hover:text-primary-800" />
                        </button>
                    </div>
                    <div className="mt-6">
                        <a href="" className="font-medium m-3 p-3 hover:bg-gray-50 block rounded-lg">Profile</a>
                        <a href="" className="font-medium m-3 p-3 hover:bg-gray-50 block rounded-lg">Docs</a>
                        <a href="" className="font-medium m-3 p-3 hover:bg-gray-50 block rounded-lg">ChangeLog</a>
                        <a href="" className="font-medium m-3 p-3 hover:bg-gray-50 block rounded-lg">Blog</a>
                        <a href="" className="font-medium m-3 p-3 hover:bg-gray-50 block rounded-lg">Login</a>
                    </div>
                    <div className="h-px bg-gray-600"></div>
                    {/* Electron Section */}
                    <button className="flex w-full mt-6 md:flex gap-2 items-center font-medium hover:bg-gray-50 px-6 py-2 rounded-lg" >
                        <IoLogoElectron size={28} className="text-primary-600 hover:text-primary-800" />
                        <span>Electron Developers</span>
                    </button>
                </div>
            </nav>
        </>
    )
}

export default Navbar