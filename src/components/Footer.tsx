import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img
              src="/public/dipapa-logo-wh.png"
              alt="DIPAPA Holdings"
              className="h-12 w-auto mb-4"
            />
            <p className="text-sm">
              Building sustainable communities through innovation and empowerment.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-secondary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-secondary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/companies" className="hover:text-secondary transition-colors">
                  Our Companies
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-secondary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Our Companies</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/companies/dips-robotics" className="hover:text-secondary transition-colors">
                  DIPS Robotics
                </Link>
              </li>
              <li>
                <Link to="/companies/dipapa-properties" className="hover:text-secondary transition-colors">
                  Dipapa Properties
                </Link>
              </li>
              <li>
                <Link to="/companies/dps-better-life" className="hover:text-secondary transition-colors">
                  DPS Better Life Club
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <a href="tel:0824173071" className="hover:text-secondary transition-colors">
                  082 417 3071
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <a href="mailto:info@dipapa.co.za" className="hover:text-secondary transition-colors">
                  info@dipapa.co.za
                </a>
              </li>
              <li className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                <span>South Africa</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700">
          <p className="text-center text-sm">
            © {new Date().getFullYear()} DIPAPA Holdings. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
