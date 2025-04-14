import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaRegCalendarAlt } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const navItems = ["home", "about", "island", "beaches", "blog"];
  const [activeSection, setActiveSection] = useState("home");

  // Ensure "home" is active on initial load
  useEffect(() => {
    setActiveSection("home");
  }, []);

  return (
    <motion.div
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 flex justify-center items-center h-20 w-full z-20 px-10 bg-transparent"
    >
      <ul className="flex space-x-8 py-2 px-6 rounded-full backdrop-blur-lg justify-center items-center bg-white/10 shadow-sm shadow-blue-500">
        {navItems.map((item) => (
          <motion.li
            whileHover={{ scale: 1.1 }}
            key={item}
            className="transition-all duration-200"
          >
            <Link
              to={item}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onSetActive={() => setActiveSection(item)}
              className={`text-md font-semibold transition-all duration-300 transform hover:text-blue-500 ${
                activeSection === item
                  ? "text-blue-500 scale-105 font-bold"
                  : "text-gray-600"
              }`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          </motion.li>
        ))}
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="flex items-center justify-center text-xs md:text-sm lg:text-base font-semibold text-white bg-slate-700 hover:bg-blue-600 transition-all duration-300 px-4 py-3 md:px-5 md:py-2 lg:px-6 lg:py-2 rounded-full shadow-lg"
        >
          <FaRegCalendarAlt className="md:hidden text-white text-xl" />
          <span className="hidden md:inline-block">Book Now</span>
        </motion.button>
      </ul>
    </motion.div>
  );
};

export default Navbar;
