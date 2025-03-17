import React, { useState } from "react";
import { khabar } from "../data";
import { motion, AnimatePresence } from "framer-motion";

const News = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="w-full min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">
        Latest News
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {khabar.map((item) => (
          <div key={item.id} className="relative cursor-pointer" onClick={() => setSelectedImage(item.image)}>
            <motion.img
              src={item.image}
              alt="News"
              className="w-full h-56 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform"
            />
          </div>
        ))}
      </div>

      {/* Modal for Image Preview */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-white/50 bg-opacity-70 flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              src={selectedImage}
              alt="Expanded News"
              className="max-w-[90%] max-h-[90%] object-contain rounded-lg shadow-xl"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default News;
