import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white py-10">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-between md:flex-row gap-8 px-6">
        {/* Left Section: About */}
        <div className="text-center md:text-left">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-extrabold text-white"
          >
            Discover Samal Island
          </motion.h2>
          <p className="mt-4 text-slate-200 text-lg">
            Your gateway to paradise. Explore stunning beaches, lush landscapes,
            and hidden gems in Samal.
          </p>
        </div>

        {/* Middle Section: Visit Us */}
        <div className="text-center md:text-left">
          <motion.h3
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xl font-semibold text-white"
          >
            Visit Us
          </motion.h3>
          <div className="mt-4 flex justify-center md:justify-start gap-6 text-2xl">
            <motion.a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="hover:text-blue-500 transition"
            >
              <FaFacebook />
            </motion.a>
            <motion.a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="hover:text-pink-500 transition"
            >
              <FaInstagram />
            </motion.a>
            <motion.a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="hover:text-blue-400 transition"
            >
              <FaTwitter />
            </motion.a>
          </div>
        </div>

        {/* Right Section: Contact Information */}
        <div className="text-center md:text-right">
          <motion.h3
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xl font-semibold text-white"
          >
            Contact Us
          </motion.h3>
          <p className="mt-4 text-slate-200">
            Email:{" "}
            <a href="mailto:info@discovery-samal.com" className="text-blue-300">
              info@discovery-samal.com
            </a>
          </p>
          <p className="text-slate-200">
            Phone: <span className="text-blue-300">(123) 456-7890</span>
          </p>
        </div>
      </div>

      {/* Bottom Section: Copyright */}
      <div className="mt-8 text-center text-slate-400">
        <p>© 2025 Discovery Samal. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
