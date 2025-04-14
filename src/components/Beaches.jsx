import React from "react";
import { motion } from "framer-motion";
import { FaSun, FaWater, FaTree } from "react-icons/fa";
import beach1 from "../images/beach1.jpg";
import beach2 from "../images/beach2.jpeg";
import beach3 from "../images/beach3.jpg";
import beach4 from "../images/beach4.jpg";

const beachesData = [
  {
    name: "White Sand Beach",
    description: "A beautiful stretch of white sand perfect for relaxation.",
    image: beach1,
    link: "whitesandhttps://www.samalguide.com/resort/white-sand-beach/    ",
  },
  {
    name: "Crystal Waters Beach",
    description: "Known for its clear waters, ideal for water sports.",
    image: beach2,
    link: "https://www.samalguide.com/resort/gem-crystal-water-resort/",
  },
  {
    name: "Hidden Cove",
    description:
      "A secluded beach with serene views and peaceful surroundings.",
    image: beach3,
    link: "https://steemit.com/travel/@lakawero/canibad-the-once-hidden-paradise-of-samal-island",
  },
  {
    name: "Sunset Beach",
    description: "The best spot to enjoy breathtaking sunsets.",
    image: beach4,
    link: "https://www.facebook.com/p/Sunset-Beach-Park-at-Samal-Island-100068859172401/",
  },
];

const Beaches = () => {
  return (
    <section className="w-full px-6 py-20 bg-white">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-blue-950"
        >
          Featured Beaches of Samal
        </motion.h1>
        <p className="text-slate-700 mt-4 text-lg max-w-2xl mx-auto">
          Discover some of the most pristine and breathtaking beaches in Samal
          Island, each offering its own unique beauty and charm.
        </p>
      </div>

      {/* Beaches Grid */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10"
      >
        {beachesData.map((beach, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            className="relative bg-white rounded-2xl overflow-hidden shadow-lg group cursor-pointer transition-all duration-300"
          >
            <img
              src={beach.image}
              alt={beach.name}
              className="w-full h-60 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="p-6 space-y-4">
              <h3 className="text-xl font-bold text-blue-950">{beach.name}</h3>
              <p className="text-sm text-slate-600">{beach.description}</p>
              <motion.a
                href={beach.link}
                target="_blank"
                className="inline-block mt-4 py-2 px-6 bg-blue-950 text-white rounded-full shadow-md hover:bg-blue-800 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
              >
                Learn More
              </motion.a>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Background Animation */}
      <div className="absolute inset-0 bg-blue-100 blur-2xl opacity-20 z-0"></div>
    </section>
  );
};

export default Beaches;
