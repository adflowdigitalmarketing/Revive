import { motion } from "motion/react";
import { Linkedin, Facebook, Youtube, Mail } from "lucide-react";
import { Link } from "react-router";

export function Footer() {
  return (
    <footer className="bg-gray-50 py-16 px-6 border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Left Column - Company Info */}
          <div>
            <div className="mb-6" style={{ fontSize: '1.75rem', fontWeight: 700, letterSpacing: '-0.02em' }}>
              REVIVE<span className="text-[#009C43]">.</span>
            </div>

            <div className="space-y-3 text-sm text-gray-600 mb-6">
              <div>
                <a href="tel:+353504022422" className="hover:text-[#009C43] transition-colors">
                  +353 (0)504 22422
                </a>
              </div>
              <div className="leading-relaxed">
                Building 1, Revive Eco Park<br />
                Cooleeney, Moyne, Thurles<br />
                Tipperary, E41 X3P9<br />
                Ireland
              </div>
              <div>
                <a href="mailto:info@revivegroup.com" className="hover:text-[#009C43] transition-colors">
                  info@revivegroup.com
                </a>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-2 uppercase tracking-wide">
                Newsletter
              </label>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 text-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#009C43]/20 focus:border-[#009C43]"
                  style={{ borderRadius: '8px' }}
                />
                <button
                  className="px-4 py-2 bg-[#009C43] text-white text-sm font-medium hover:bg-[#007A34] transition-colors"
                  style={{ borderRadius: '8px' }}
                >
                  <Mail size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Center-Left Column - About */}
          <div>
            <h4 className="text-xs font-bold text-gray-900 mb-4 uppercase tracking-wide">
              About
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/sustainability" className="text-gray-600 hover:text-[#009C43] transition-colors">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link to="/sustainability/ecopark" className="text-gray-600 hover:text-[#009C43] transition-colors">
                  Revive EcoPark
                </Link>
              </li>
              <li>
                <Link to="/sustainability/circular-economy" className="text-gray-600 hover:text-[#009C43] transition-colors">
                  The Circular Economy
                </Link>
              </li>
              <li>
                <Link to="/sustainability/green-credentials" className="text-gray-600 hover:text-[#009C43] transition-colors">
                  Green Credentials
                </Link>
              </li>
            </ul>
          </div>

          {/* Center-Right Column - Solutions/Tech */}
          <div>
            <h4 className="text-xs font-bold text-gray-900 mb-4 uppercase tracking-wide">
              Solutions
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/solutions/program" className="text-gray-600 hover:text-[#009C43] transition-colors">
                  Revive Program
                </Link>
              </li>
              <li>
                <Link to="/solutions/warrior" className="text-gray-600 hover:text-[#009C43] transition-colors">
                  Warrior Units
                </Link>
              </li>
              <li>
                <Link to="/solutions/machinery" className="text-gray-600 hover:text-[#009C43] transition-colors">
                  Specialized Industrial Machinery
                </Link>
              </li>
              <li>
                <Link to="/solutions/service" className="text-gray-600 hover:text-[#009C43] transition-colors">
                  Service & Parts
                </Link>
              </li>
            </ul>
          </div>

          {/* Right Column - Navigation */}
          <div>
            <h4 className="text-xs font-bold text-gray-900 mb-4 uppercase tracking-wide">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/news" className="text-gray-600 hover:text-[#009C43] transition-colors">
                  News
                </Link>
              </li>
              <li>
                <Link to="/global/ireland" className="text-gray-600 hover:text-[#009C43] transition-colors">
                  Global Representation
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-600 hover:text-[#009C43] transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-[#009C43] transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-300">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Social Media Icons */}
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center border border-gray-300 text-gray-600 hover:border-[#009C43] hover:text-[#009C43] transition-colors"
                style={{ borderRadius: '8px' }}
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center border border-gray-300 text-gray-600 hover:border-[#009C43] hover:text-[#009C43] transition-colors"
                style={{ borderRadius: '8px' }}
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center border border-gray-300 text-gray-600 hover:border-[#009C43] hover:text-[#009C43] transition-colors"
                style={{ borderRadius: '8px' }}
              >
                <Youtube size={18} />
              </a>
            </div>

            {/* Copyright */}
            <div className="text-sm text-gray-500">
              2020 © Revive Group. All rights reserved.
            </div>

            {/* Legal Links */}
            <div className="flex gap-6 text-sm">
              <Link to="/privacy" className="text-gray-600 hover:text-[#009C43] transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-600 hover:text-[#009C43] transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
