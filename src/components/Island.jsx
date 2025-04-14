import React, { useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Your island images
import island1 from "../images/island1.jpg";
import island2 from "../images/island2.jpeg";
import island3 from "../images/island3.jpeg";
import island4 from "../images/island4.jpg";

const islandsData = [
  {
    name: "Talikud Island",
    description:
      "A serene destination with white sands and stunning coral gardens — perfect for snorkeling and peaceful escapes.",
    rating: 4.8,
    image: island1,
    link: "https://example.com/talikud-island",
  },
  {
    name: "Kaputian Island",
    description:
      "Famous for its laid-back vibe, white beaches, and crystal-clear waters. A must-visit for beach lovers.",
    rating: 4.5,
    image: island2,
    link: "https://example.com/kaputian-island",
  },
  {
    name: "Malipano Island",
    description:
      "A luxurious private island known for high-end resorts, exclusive experiences, and breathtaking views.",
    rating: 4.7,
    image: island3,
    link: "https://example.com/malipano-island",
  },
  {
    name: "Pearl Farm Island",
    description:
      "Home to the famous Pearl Farm Resort, this island combines natural beauty with top-tier accommodations.",
    rating: 4.9,
    image: island4,
    link: "https://example.com/pearl-farm-island",
  },
];

const Islands = () => {
  const [activeSlide, setActiveSlide] = useState(1);
  const swiperRef = useRef(null);

  return (
    <section className="w-full px-6 py-20 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-14">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-950">
            Stunning Islands of Samal
          </h1>
          <p className="text-slate-700 mt-4 max-w-2xl mx-auto text-lg">
            Explore the gems of Davao — where every island tells a story of
            beauty and tranquility.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative w-full">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={(swiper) => setActiveSlide(swiper.realIndex + 1)}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false, // Prevent autoplay from pausing on interaction
            }}
            loop={true}
            allowTouchMove={window.innerWidth < 768}
            spaceBetween={30}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="w-full"
          >
            {islandsData.map((island, idx) => (
              <SwiperSlide key={idx}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{
                    scale: 1.03,
                    y: -5,
                    boxShadow: "0 15px 25px rgba(0,0,0,0.1)",
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="bg-white rounded-3xl shadow-2xl overflow-hidden cursor-pointer"
                >
                  <img
                    src={island.image}
                    alt={island.name}
                    className="h-60 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="p-6 space-y-3">
                    <h3 className="text-xl font-bold text-blue-950">
                      {island.name}
                    </h3>
                    <p className="text-sm text-slate-600">
                      {island.description}
                    </p>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={`${
                            i < Math.floor(island.rating)
                              ? "text-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <div className="pt-4">
                      <motion.a
                        href={island.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="inline-block bg-blue-950 text-white text-sm px-4 py-2 rounded-full shadow-md hover:bg-blue-800 transition"
                      >
                        Learn More
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
            {/* Navigation Buttons with Animation */}
            <div className="swiper-button-prev-custom absolute top-1/2 -left-1 z-10 -translate-y-1/2">
              <motion.button
                whileHover={{ scale: 1.2, rotate: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-white rounded-full shadow-lg w-10 h-10 text-blue-700 hover:bg-blue-100 flex items-center justify-center"
              >
                <FaArrowLeft />
              </motion.button>
            </div>
            <div className="swiper-button-next-custom absolute top-1/2 -right-1 z-10 -translate-y-1/2">
              <motion.button
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-white rounded-full shadow-lg w-10 h-10 text-blue-700 hover:bg-blue-100 flex items-center justify-center"
              >
                <FaArrowRight />
              </motion.button>
            </div>
          </Swiper>

          {/* Slide counter */}
          <div className="text-center text-slate-600 mt-4">
            {activeSlide} / {islandsData.length}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Islands;
