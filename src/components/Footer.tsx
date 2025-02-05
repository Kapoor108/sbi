import React from 'react';
import { Shield, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-slate-900 to-slate-800 border-t border-slate-700">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <Shield className="w-8 h-8 text-blue-500" />
              <span className="ml-2 text-xl font-bold text-white">SBI Fraud Shield</span>
            </div>
            <p className="text-gray-400 text-sm">
              Protecting your financial future with advanced AI-powered fraud detection
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Upload Data</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">View Results</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">About</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center text-gray-400">
                <Mail className="w-4 h-4 mr-2" />
                <span className="text-sm">support@sbifraudshield.com</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Phone className="w-4 h-4 mr-2" />
                <span className="text-sm">1800-111-222</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-slate-700">
          <p className="text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} SBI Fraud Shield. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;