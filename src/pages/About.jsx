import React from 'react';
import { motion } from 'framer-motion';

const slides = [
    'attachments/image1.jpg',
    'attachments/image2.jpg',
    'attachments/image3.jpg',
];

const About = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-16">

            {/* --- NGO Information Section --- */}
            <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* About Details */}
                <div className="text-center lg:text-left">
                    <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                        About Our <span className="text-amber-900">Organisation</span>
                    </h1>
                    <p className="mt-6 text-lg text-gray-600 text-justify leading-relaxed">
                        The Nirmal Mann Foundation, established in 2024, is dedicated to promoting inclusivity and uplifting underserved communities. Guided by its mission, <span className="font-semibold italic text-gray-800">"Sabko saath lekar chalne ka prana"</span> (Taking everyone along), the foundation focuses on providing education to underprivileged children, empowering women, protecting the environment, promoting cow welfare, and supporting animal welfare. Its initiatives aim to reach and uplift every section of society that has been left behind, striving for a better and more equitable future.
                    </p>
                </div>

                {/* Slideshow */}
                <div className="relative overflow-hidden rounded-2xl shadow-2xl h-80 lg:h-[400px] w-full bg-gray-200">
                    <img
                        src="attachments/image1.jpg" /* Replace with your specific image path */
                        alt="Nirmal Mann Foundation Initiative"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>

            {/* --- Founder Section --- */}
            <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-24">
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">

                    {/* Founder Image (Replace with actual image path) */}
                    <div className="md:w-2/5 lg:w-1/3">
                        <img
                            src="founder.jpg"
                            alt="Kailash Ojha - Founder"
                            className="w-full h-full min-h-[350px] object-cover object-center"
                        />
                    </div>

                    {/* Founder Details */}
                    <div className="md:w-3/5 lg:w-2/3 p-8 lg:p-12 flex flex-col justify-center">
                        <div className="uppercase tracking-widest text-sm font-bold text-amber-900 mb-2">
                            Meet Our Founder
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Kailash Ojha
                        </h2>
                        <div className="w-16 h-1 bg-amber-900 mb-6 rounded"></div>

                        <div className="text-gray-600 text-lg leading-relaxed space-y-4 text-justify">
                            <p>
                                Founded in 2024 by Kailash Ojha, the Nirmal Mann Foundation was born out of a deep-seated desire to bridge the gap between privilege and poverty. Witnessing firsthand the daily struggles of marginalized families and the silent suffering of voiceless animals, Kailash realized that true societal progress is impossible if the vulnerable are left behind.
                            </p>
                            <p>
                                Known for his profound empathy and unwavering commitment to grassroots change, he chose to step beyond personal success to create a platform that doesn't just offer charity, but builds lasting empowerment. His vision is rooted in a simple but powerful belief: that every act of kindness, whether educating a child, uplifting a woman, or caring for a stray, creates a ripple effect capable of transforming the world.
                            </p>
                        </div>
                    </div>

                </div>
            </div>

            {/* Team Members Placeholder */}
            <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-24">
                {/* Future Team Members section can go here */}
            </div>

        </div>
    );
};

export default About;