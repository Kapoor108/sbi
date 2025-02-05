import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Shield, Upload, BarChart3, AlertCircle } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-8">
            <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
              SBI Fraud Detection System
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Protecting your financial institution with advanced AI and machine learning technology
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg bg-slate-800 transform hover:scale-105 transition-transform duration-300 border border-slate-700">
              <Upload className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Upload Data</h3>
              <p className="text-gray-400">
                Securely upload loan application data for analysis
              </p>
            </div>
            
            <div className="p-6 rounded-lg bg-slate-800 transform hover:scale-105 transition-transform duration-300 border border-slate-700">
              <BarChart3 className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Analyze Results</h3>
              <p className="text-gray-400">
                Get detailed insights and fraud detection analysis
              </p>
            </div>
            
            <div className="p-6 rounded-lg bg-slate-800 transform hover:scale-105 transition-transform duration-300 border border-slate-700">
              <AlertCircle className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Real-time Alerts</h3>
              <p className="text-gray-400">
                Receive instant notifications for suspicious activities
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-blue-500 mb-2">99.9%</div>
              <div className="text-gray-400">Accuracy Rate</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-blue-500 mb-2">24/7</div>
              <div className="text-gray-400">Monitoring</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-blue-500 mb-2">1M+</div>
              <div className="text-gray-400">Applications Analyzed</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Secure Your Institution?</h2>
          <p className="text-xl mb-8">Start analyzing loan applications today</p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
            Get Started
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;