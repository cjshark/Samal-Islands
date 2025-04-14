import React from "react";
import { motion } from "framer-motion";
import { FaGlobe, FaTree, FaWater } from "react-icons/fa";
import bgAbout from "../images/about.jpg";

const About = () => {
  return (
    <section className="relative w-full px-6 py-20 bg-white overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-blue-200 blur-2xl opacity-40 group-hover:opacity-50 z-0 transition-all duration-500"></div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center relative z-10">
        {/* Left Section (Text Content) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-950 leading-tight">
            Experience the Wonders of Samal Island
          </h1>
          <p className="text-base md:text-lg text-slate-700 leading-relaxed">
            Samal Island is a breathtaking escape with a perfect blend of
            adventure, serenity, and nature’s beauty.
          </p>
          <p className="text-base md:text-lg text-slate-700 leading-relaxed">
            Explore its pristine beaches, lush forests, and crystal-clear
            waters. Samal is a place where memories are made.
          </p>
          {/* Floating Learn More Button */}
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            className="inline-block mt-6 py-3 px-6 bg-blue-950 text-white font-semibold text-lg rounded-xl shadow-md hover:bg-blue-800 transition-all duration-300"
          >
            Learn More
          </motion.a>
        </motion.div>

        {/* Right Section (Image Section) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative w-full max-w-md md:max-w-lg lg:max-w-xl overflow-hidden group"
        >
          <div className="absolute inset-0 bg-blue-100 blur-3xl opacity-20 group-hover:opacity-40 transition-all duration-500 z-0" />
          <img
            src={bgAbout}
            alt="Samal Island"
            className="w-full h-[400px] md:h-[480px] object-cover rounded-xl relative z-10 transition-transform duration-500 group-hover:scale-105"
            style={{
              clipPath:
                "polygon(10% 0%, 90% 0%, 100% 20%, 100% 80%, 90% 100%, 10% 100%, 0% 80%, 0% 20%)",
            }}
          />
        </motion.div>
      </div>

      {/* New Dynamic Info Cards */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="w-full mt-20 grid sm:grid-cols-2 md:grid-cols-3 gap-8"
      >
        {[
          {
            icon: <FaGlobe size={40} color="#3b82f6" />,
            label1: "Breathtaking",
            label2: "Scenic Views",
            link: "#views",
          },
          {
            icon: <FaTree size={40} color="#3b82f6" />,
            label1: "Rich",
            label2: "Flora and Fauna",
            link: "#flora",
          },
          {
            icon: <FaWater size={40} color="#3b82f6" />,
            label1: "Crystal-Clear",
            label2: "Water Activities",
            link: "#water",
          },
        ].map((info, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center p-6 border border-slate-100 rounded-xl shadow-xl group transition-transform duration-300"
          >
            <div className="w-20 h-20 bg-blue-100 text-blue-950 rounded-full flex items-center justify-center mb-4 shadow-lg group-hover:bg-blue-200 transition-all duration-300">
              {info.icon}
            </div>
            <p className="text-slate-600 text-sm font-medium">{info.label1}</p>
            <p className="text-slate-600 text-sm font-medium">{info.label2}</p>
            {/* Learn More Link */}
            <motion.a
              href={info.link}
              className="text-blue-950 hover:text-blue-700 text-sm mt-3"
              whileHover={{ scale: 1.1 }}
            >
              Learn More
            </motion.a>
          </motion.div>
        ))}
      </motion.div>
    </section>

  );
};

export default About;
