import React from 'react';
import { motion } from 'framer-motion';

const Gallery = () => {
    // Add an 'imageCount' property to each section/subsection
    const eventSections = [
        { 
            id: 1, 
            title: "Darshan Yatra", 
            isNested: true,
            subsections: [
                { title: "Sawariya Seth", path: "darshan_yatra/sawariya_seth", imageCount: 29 },
                { title: "Kumbh", path: "darshan_yatra/kumbh", imageCount: 8 }, 
                { title: "Khatu Shyam", path: "darshan_yatra/khatu_shyam", imageCount: 10 }
            ]
        },
        { id: 2, title: "Blood Donation Drive", path: "blood_donation", imageCount: 33 }, 
        { id: 3, title: "Chhat Puja", path: "chhat", imageCount: 2 },
        { id: 4, title: "Gau Seva", path: "gau_seva", imageCount: 3 },
        { id: 5, title: "Kambal Vitaran", path: "kambal_vitaran", imageCount: 14 },
        { id: 6, title: "Pakshi Sanrakshan", path: "pakshi_sanrakshan", imageCount: 6 },
        { id: 7, title: "Samagri Vitaran", path: "samagri_vitaran", imageCount: 5 },
        { id: 8, title: "Others", path: "others", imageCount: 5 }
    ];

    // Handles fallback if a .jpg fails, swapping it dynamically to .jpeg
    const handleImageError = (e) => {
        const currentSrc = e.target.src;
        
        if (currentSrc.endsWith('.jpg')) {
            e.target.src = currentSrc.replace('.jpg', '.jpeg');
        } else if (currentSrc.endsWith('.jpeg')) {
            // Prevent an infinite loop if BOTH files don't exist
            e.target.onerror = null; 
            // Optional: You can set a generic broken-image placeholder here if desired
            // e.target.src = '/gallery/placeholder.png'; 
        }
    };

    // Helper function now accepts 'imageCount' to determine the array length
    const renderImageGrid = (folderPath, altTitle, imageCount) => {
        const images = Array.from(
            { length: imageCount }, 
            (_, i) => `/gallery/${folderPath}/image${i + 1}.jpg` // Default to .jpg first
        );

        return (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {images.map((image, index) => (
                    <motion.div 
                        key={index} 
                        className="bg-white rounded-lg shadow-lg overflow-hidden"
                        whileHover={{ scale: 1.05 }}
                    >
                        <img 
                            src={image} 
                            alt={`${altTitle} - ${index + 1}`} 
                            className="w-full h-64 object-cover"
                            onError={handleImageError} // Re-routes to .jpeg seamlessly if .jpg fails
                        />
                    </motion.div>
                ))}
            </div>
        );
    };

    return (
        <div className="max-w-7xl mx-auto px-4 py-12">
            <h2 className="text-4xl font-bold text-center text-amber-900 mb-12">Our Gallery</h2>
            
            {eventSections.map((section) => (
                <div key={section.id} className="mb-16">
                    {/* Main Section Heading */}
                    <div className="mb-8">
                        <h3 className="text-3xl font-semibold text-gray-800 inline-block border-b-4 border-amber-900 pb-2">
                            {section.title}
                        </h3>
                    </div>
                    
                    {/* Check if section has subfolders */}
                    {section.isNested ? (
                        <div className="pl-4">
                            {section.subsections.map((sub, subIndex) => (
                                <div key={subIndex} className="mb-12">
                                    <h4 className="text-2xl font-medium text-amber-800 mb-6">
                                        {sub.title}
                                    </h4>
                                    {/* Pass the dynamic image count here */}
                                    {renderImageGrid(sub.path, sub.title, sub.imageCount)}
                                </div>
                            ))}
                        </div>
                    ) : (
                        /* Pass the dynamic image count here */
                        renderImageGrid(section.path, section.title, section.imageCount)
                    )}
                </div>
            ))}
        </div>
    );
};

export default Gallery;