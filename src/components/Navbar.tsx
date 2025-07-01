import '../index.css'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav className="bg-[#f7f7f7] w-full py-4 px-8 flex items-center justify-between">
            {/* Left side */}
            <Link to="/">
                <div className="flex items-center gap-3">
                    <span className="w-8 h-8 border-1 rounded-full animated-circle shadow-lg shadow-green-200/50"></span>
                    <span className="font-bold text-xl text-black">Rosanna Loader</span>
                    <span className="text-gray-500 ml-1">Marketing</span>
                </div>
            </Link>
            <div className="flex items-center gap-6 text-sm text-gray-700">
                <Link to="/portfolio" className='btn btn-blue'>Portfolio</Link>
                <span className="border-l border-gray-400 h-6 mx-2"></span>
                <Link to="/contact" className='btn btn-blue'>Contact</Link>
            </div>
        </nav>
    )
}

export default Navbar;