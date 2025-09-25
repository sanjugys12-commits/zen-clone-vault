import { Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1">
            <div className="flex items-center mb-4">
              <Link to="/">
                <img 
                  src="/Untitled_design.svg" 
                  alt="Zenvve" 
                  className="h-6 w-auto bg-gray-100 p-1 rounded"
                />
              </Link>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Scale your LinkedIn outreach with real, human-managed accounts.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors duration-200">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/how-it-works" className="text-gray-400 hover:text-white transition-colors duration-200">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/book-demo" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Book a Demo
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <Mail className="w-4 h-4 text-gray-400 mt-1" />
                <a 
                  href="mailto:support@zenvve.com" 
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  support@zenvve.com
                </a>
              </li>
              <li className="text-gray-400">
                <div className="mb-1">3rd Floor, Rent A Desk, Plot # 682,</div>
                <div className="mb-1">Babukhan Rasheed Plaza, Road # 36,</div>
                <div className="mb-1">Jubilee Hills, Hyderabad. 500 033,</div>
                <div>Telangana</div>
              </li>
            </ul>
            <div className="mt-4">
              <a
                href="https://linkedin.com"
                className="p-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors duration-200 inline-block"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="text-center">
            <div className="text-gray-400 text-sm">
              © 2025 Zenvve. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;