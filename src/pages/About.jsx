import React from 'react';
import { motion } from 'framer-motion';


const slides = [
    'attachments/image1.jpg',
    'attachments/image2.jpg',
    'attachments/image3.jpg',
];

const About = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            <div className="container mx-auto py-12 px-6 flex flex-col md:flex-row items-center">
                {/* About Details */}
                <div className="md:w-1/2 text-center md:text-left">
                    <h1 className="text-4xl font-bold text-gray-800">About Our Organisation</h1>
                    <p className="mt-4 text-lg text-gray-600 text-justify mr-5">
                        The Nirmal Mann Foundation, established in 2024, is dedicated to promoting inclusivity and uplifting underserved communities. Guided by its mission, "Sabko saath lekar chalne ka prana" (Taking everyone along), the foundation focuses on providing education to underprivileged children, empowering women, protecting the environment, promoting cow welfare, and supporting animal welfare. Its initiatives aim to reach and uplift every section of society that has been left behind, striving for a better and more equitable future.
                    </p>
                </div>

                {/* Slideshow */}
                <div className="md:w-1/2 mt-8 md:mt-0 relative overflow-hidden">
                    <motion.div
                        className="flex w-full h-80"
                        initial={{ x: 0 }}
                        animate={{ x: ['0%', '-100%', '-200%', '-300%', '0%'] }}
                        transition={{ repeat: Infinity, duration: 16, ease: 'linear' }}
                    >
                        {slides.map((slide, index) => (
                            <img
                                key={index}
                                src={slide}
                                alt={`Slide ${index + 1}`}
                                className="w-full h-full object-cover rounded-lg shadow-lg"
                                style={{ aspectRatio: "16/9" }}
                            />
                        ))}
                    </motion.div>
                </div>
            </div>


            {/* Team Members */}
          
        </div>
    );
};

export default About;
