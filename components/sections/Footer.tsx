'use client';

import { motion } from 'framer-motion';
import { Dumbbell, Linkedin, Mail, Facebook } from 'lucide-react';
import Image from 'next/image';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    { name: 'Features', href: '#features' },
    { name: 'About', href: '#about' },
    { name: 'Benefits', href: '#benefits' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/company/djedfit', label: 'LinkedIn' },
    { icon: Facebook, href: 'https://www.facebook.com/profile.php?id=61580294721308', label: 'Facebook' },
    // { icon: Mail, href: 'djedfit@gmail.com', label: 'Email' }
  ];

  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
        >
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <Image
                src="/logo.png"
                alt="DjedFit Logo"
                width={26}   // same as w-12 (12 * 4px = 26px)
                height={26}  // same as h-12
              />
              <h3 className="text-2xl font-bold gradient-text">DjedFit</h3>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Unifying fitness management into one powerful platform. 
              Connecting gyms, coaches, and clients for optimal results.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                  target='_blank'
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {links.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>djedfit@gmail.com</li>
              <li>01002784461</li>
              {/* <li>San Francisco, CA</li> */}
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-12 pt-8 text-center"
        >
          <p className="text-gray-400">
            © {currentYear} DjedFit. All rights reserved. Built with ❤️ for the fitness community.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}