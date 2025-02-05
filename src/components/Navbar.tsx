import React from 'react';
import { Shield, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-gradient-to-r from-slate-900 to-slate-800 border-b border-slate-700 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Shield className="w-8 h-8 text-blue-500" />
            <span className="ml-2 text-xl font-bold text-white">SBI Fraud Shield</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#" className="text-white hover:bg-slate-700 px-3 py-2 rounded-md text-sm font-medium">Home</a>
              <a href="#" className="text-gray-300 hover:bg-slate-700 px-3 py-2 rounded-md text-sm font-medium">Upload Data</a>
              <a href="#" className="text-gray-300 hover:bg-slate-700 px-3 py-2 rounded-md text-sm font-medium">View Results</a>
              <a href="#" className="text-gray-300 hover:bg-slate-700 px-3 py-2 rounded-md text-sm font-medium">About</a>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="text-white block px-3 py-2 rounded-md text-base font-medium">Home</a>
            <a href="#" className="text-gray-300 block px-3 py-2 rounded-md text-base font-medium">Upload Data</a>
            <a href="#" className="text-gray-300 block px-3 py-2 rounded-md text-base font-medium">View Results</a>
            <a href="#" className="text-gray-300 block px-3 py-2 rounded-md text-base font-medium">About</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;