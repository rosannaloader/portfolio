import '../index.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <nav className="bg-[#f7f7f7] w-full py-4 px-4 md:px-8 flex items-center justify-between relative">
            {/* Left side - Logo */}
            <Link to="/" onClick={() => setIsMenuOpen(false)}>
                <div className="flex items-center gap-2 md:gap-3">
                    <span className="w-6 h-6 md:w-8 md:h-8 border-1 rounded-full animated-circle shadow-lg shadow-green-200/50"></span>
                    <div className="flex flex-col md:flex-row md:items-center md:gap-1">
                        <span className="font-bold text-lg md:text-xl text-black">Rosanna Loader</span>
                        <span className="text-gray-500 text-xs md:text-sm md:ml-1">Marketing</span>
                    </div>
                </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6 text-sm text-gray-700">
                <Link to="/portfolio" className='btn btn-blue'>Portfolio</Link>
                <span className="border-l border-gray-400 h-6 mx-2"></span>
                <Link to="/contact" className='btn btn-blue'>Contact</Link>
            </div>

            {/* Mobile Hamburger Menu Button */}
            <button 
                className="md:hidden p-2 rounded-md hover:bg-gray-200 transition-colors"
                onClick={toggleMenu}
                aria-label="Toggle menu"
            >
                <div className="w-6 h-6 flex flex-col justify-center items-center">
                    <span className={`block w-5 h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'}`}></span>
                    <span className={`block w-5 h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                    <span className={`block w-5 h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'}`}></span>
                </div>
            </button>

            {/* Mobile Navigation Menu */}
            <div className={`md:hidden absolute top-full left-0 right-0 bg-[#f7f7f7] border-t border-gray-200 shadow-lg transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                <div className="flex flex-col py-4 px-4 space-y-3">
                    <Link 
                        to="/portfolio" 
                        className='btn btn-blue text-center py-3'
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Portfolio
                    </Link>
                    <Link 
                        to="/contact" 
                        className='btn btn-blue text-center py-3'
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;