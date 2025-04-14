import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import blogImage1 from "../images/blog1.jpg";
import blogImage2 from "../images/blog2.jpeg";
import blogImage3 from "../images/blog3.webp";

const blogData = [
  {
    title: "Discover the Best Beaches in Samal",
    excerpt:
      "Samal Island is home to some of the most beautiful beaches in the Philippines. In this post, we take you on a tour of the best beaches you must visit during your stay in Samal.",
    image: blogImage1,
    link: "https://www.tripadvisor.com.ph/Attractions-g1600277-Activities-c61-t52-Samal_Island_Davao_del_Norte_Province_Mindanao.html",
  },
  {
    title: "The Hidden Gems of Samal Island",
    excerpt:
      "From secret coves to untouched nature, Samal Island is full of hidden gems. Explore some of the most beautiful and lesser-known spots on the island.",
    image: blogImage2,
    link: "https://www.tripadvisor.com.ph/Attractions-g1600277-Activities-zft12156-Samal_Island_Davao_del_Norte_Province_Mindanao.html",
  },
  {
    title: "Why Samal Island is Perfect for Your Next Getaway",
    excerpt:
      "Looking for the perfect vacation destination? Samal Island offers a mix of relaxation, adventure, and natural beauty that makes it the perfect place to unwind and recharge.",
    image: blogImage3,
    link: "https://www.discoverdavao.ph/blog/discovering-luxury-a-complete-guide-to-discovery-samal",
  },
];

const Blog = () => {
  return (
    <section className="w-full px-6 py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-14">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-950">
            Latest Blog Posts
          </h1>
          <p className="text-slate-700 mt-4 max-w-2xl mx-auto text-lg">
            Stay updated with the latest tips, guides, and stories about Samal
            Island.
          </p>
        </motion.div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
          {blogData.map((blog, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{
                scale: 1.05,
                y: -5,
                boxShadow: "0 15px 25px rgba(0,0,0,0.1)",
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="bg-white rounded-3xl shadow-xl overflow-hidden cursor-pointer"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="h-60 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-bold text-blue-950">
                  {blog.title}
                </h3>
                <p className="text-sm text-slate-600">{blog.excerpt}</p>
                <div className="pt-4">
                  <motion.a
                    href={blog.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="inline-block bg-blue-950 text-white text-sm px-4 py-2 rounded-full shadow-md hover:bg-blue-800 transition"
                  >
                    Read More <FaArrowRight className="inline-block ml-2" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
