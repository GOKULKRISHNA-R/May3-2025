import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1a1a1a]/90 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold">
              GokulKrishna Raju
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="hover:text-blue-400 transition-colors">
                Home
              </Link>
              <Link to="/about" className="hover:text-blue-400 transition-colors">
                About
              </Link>
              <Link to="/projects" className="hover:text-blue-400 transition-colors">
                Projects
              </Link>
              <Link to="/contact" className="hover:text-blue-400 transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="mt-20">
        {children}
      </main>

      <footer className="bg-[#1a1a1a] py-12">
        <div className="container mx-auto px-6">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} GokulKrishna Raju. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
