import React from 'react';
import { motion } from 'framer-motion';

const Gallery = () => {
    // Dynamically generate image paths
    const totalImages = 70; // Replace with the actual number of images in your "gallery" folder
    const images = Array.from({ length: totalImages }, (_, index) => `gallery/image${index + 1}.jpg`);

    return (
        <div className="max-w-7xl mx-auto px-4 py-12">
            <h2 className="text-4xl font-bold text-center text-amber-900 mb-10">Gallery</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {images.map((image, index) => (
                    <motion.div 
                        key={index} 
                        className="bg-white rounded-lg shadow-lg overflow-hidden"
                        whileHover={{ scale: 1.05 }}
                    >
                        <img 
                            src={image} 
                            alt={`Gallery Image ${index + 1}`} 
                            className="w-full h-64 object-cover"
                        />
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;
