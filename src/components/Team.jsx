import React from 'react';
import { motion } from 'framer-motion';
const members = [
    { name: 'Kailash Ojha', role: 'President', image: 'members/kailashojha.jpg' },
    { name: 'Kamlesh Sharma', role: 'Patron', image: 'members/kamleshkumarsharma.jpg' },
    { name: 'Rahul Saini', role: 'Vice President', image: 'members/rahulsaini.jpg' },
    { name: 'Roshan Jha', role: 'Treasurer', image: 'members/roshanjha.jpg' },
    { name: 'Kavita Jha', role: 'Secretary', image: 'members/kavitajha.jpg' },
    { name: 'Jitendra Chaudhary', role: 'Joint Secretary', image: 'members/jitendrachaudhry.jpg' },
    { name: 'Jaivir Singh', role: 'General Secretary', image: 'members/jaivirsingh.jpg' },
    { name: 'Harpal Singh', role: 'Organisation Minister', image: 'members/harpalsingh.jpg' },
];

const Team = () => {
    return (
         <div className="container px-6 mx-auto py-12">
                <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">Meet Our Team</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {members.map((member, index) => (
                        <motion.div
                            key={index}
                            className="bg-white p-6 rounded-lg shadow-lg text-center transform transition duration-300 hover:scale-105"
                            whileHover={{ scale: 1.05 }}
                        >
                            <img src={member.image} alt={member.name} className="w-32 h-32 mx-auto rounded-full object-cover" />
                            <h3 className="text-xl font-medium text-gray-800 mt-4">{member.name}</h3>
                            <p className="text-gray-600">{member.role}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
    );
};

export default Team;