 import { useState } from "react";
import { Link } from "react-router-dom";
 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-black shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        
        {/* Logo & Brand */}
        <Link to="/" className="flex items-center space-x-3">
           <img 
            src="/images/logo.webp" 
            alt="KT ALMADINA MOTORS" 
            className="h-12 w-12 object-contain drop-shadow-md"
           />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="relative text-gray-300 hover:text-red-900 font-medium transition duration-200
                         after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px]
                         after:bg-red-900 hover:after:w-full after:transition-all after:duration-300"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center text-gray-200 hover:text-red-900"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-transparent shadow-lg border-t border-gray-100">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="block px-6 py-3 text-gray-200 hover:bg-gray-500 hover:text-red-900 transition"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}


