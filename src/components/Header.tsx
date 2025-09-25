import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img 
                src="/Untitled_design.svg" 
                alt="Zenvve" 
                className="h-6 w-auto bg-gray-100 p-1 rounded"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
          </nav>

          {/* CTA Buttons - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/pricing"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium h-8 flex items-center"
            >
              See Pricing
            </Link>
            <a
              href="/book-demo"
              className="bg-blue-600 text-white px-6 py-2 h-8 flex items-center rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium shadow-sm"
            >
              Book a Demo
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors duration-200"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100 py-4">
            <nav className="flex flex-col space-y-4">
              <div className="pt-4 border-t border-gray-100">
                <Link
                  to="/pricing"
                  className="block text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium mb-3"
                >
                  See Pricing
                </Link>
                <a
                  href="/book-demo"
                  className="block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium text-center"
                >
                  Book a Demo
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;