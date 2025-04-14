import React from "react";
import bg from "../images/bg.jpg";
import { TreePalm } from "lucide-react";
import { MdBeachAccess } from "react-icons/md";
import { FaHotel } from "react-icons/fa";
import { HiOutlineGlobeAlt } from "react-icons/hi";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="w-full px-6 py-20 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-14">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 space-y-6"
        >
          <div className="flex">
            <h1 className="text-4xl md:text-5xl font-extrabold text-blue-950 leading-tight">
              Welcome To
            </h1>
            <h1 className="ml-3 text-4xl md:text-5xl font-extrabold text-blue-500 leading-tight">
              Samal Island
            </h1>
          </div>

          <p className="text-base md:text-lg text-slate-500 leading-relaxed">
            Samal Island is a tropical paradise in the Philippines, with
            crystal-clear waters, white sand beaches, and lush greenery — ideal
            for nature lovers and adventurers alike.
          </p>
          <p className="text-base md:text-lg text-slate-500 leading-relaxed">
            Discover snorkeling, hiking, island hopping, and tranquil beaches
            across this hidden gem.
          </p>

          <div className="flex gap-6 pt-4">
            {[
              { icon: <FaFacebookF size={35} />, color: "#1877F2", href: "#" },
              { icon: <FaInstagram size={35} />, color: "#E1306C", href: "#" },
              { icon: <FaTwitter size={35} />, color: "#1DA1F2", href: "#" },
            ].map((item, idx) => (
              <motion.a
                key={idx}
                href={item.href}
                whileHover={{ scale: 1.3, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="text-2xl"
                style={{ color: item.color }}
              >
                {item.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="flex-1 w-full max-w-md md:max-w-lg lg:max-w-xl relative"
        >
          <div className="relative group rounded-[2.5rem] overflow-hidden shadow-2xl shadow-blue-700">
            <div className="absolute -inset-2 bg-blue-200 rounded-[2.5rem] blur-2xl opacity-20 group-hover:opacity-40 z-0 transition-all duration-500" />
            <img
              src={bg}
              alt="Samal Island"
              className="w-full h-[400px] md:h-[480px] object-cover rounded-[2.5rem] relative z-10 transition-transform duration-500 group-hover:scale-105"
              style={{
                clipPath:
                  "polygon(15% 0%, 85% 0%, 100% 25%, 100% 75%, 85% 100%, 15% 100%, 0% 75%, 0% 25%)",
              }}
            />
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="w-full mt-16 bg-white border border-slate-100 shadow-lg shadow-blue-700 rounded-2xl px-6 py-8 flex flex-wrap justify-center gap-10"
      >
        {[
          {
            icon: <TreePalm size={35} color="#403ea8 " />,
            label1: "Total of",
            label2: "5+ Islands",
          },
          {
            icon: <MdBeachAccess size={35} color="#403ea8" />,
            label1: "Over",
            label2: "50+ Beaches",
          },
          {
            icon: <HiOutlineGlobeAlt size={35} color="#403ea8" />,
            label1: "Covers",
            label2: "28,000 Hectares",
          },
          {
            icon: <FaHotel size={35} color="#403ea8" />,
            label1: "Over",
            label2: "100+ Hotels",
          },
          // Additional info cards
          {
            icon: <FaHotel size={35} color="#403ea8" />,
            label1: "Known For",
            label2: "Luxury Resorts",
          },
          {
            icon: <MdBeachAccess size={35} color="#403ea8" />,
            label1: "Perfect For",
            label2: "Beach Lovers",
          },
          {
            icon: <HiOutlineGlobeAlt size={35} color="#403ea8" />,
            label1: "Best Season",
            label2: "December to May",
          },
          {
            icon: <TreePalm size={35} color="#403ea8" />,
            label1: "Popular Activity",
            label2: "Island Hopping",
          },
        ].map((info, idx) => (
          <div key={idx} className="flex flex-col items-center">
            {info.icon}
            <p className="text-slate-400 text-sm font-medium">{info.label1}</p>
            <p className="text-slate-400 text-sm font-medium">{info.label2}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Hero;
