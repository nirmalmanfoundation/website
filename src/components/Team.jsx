import React from 'react';
import { motion } from 'framer-motion';

const Team = () => {
    // Array map would go here
    const members = [
        { name: 'Kamlesh Sharma', role: 'Patron', image: 'members/kamleshkumarsharma.jpg' },
        { name: 'Kailash Ojha', role: 'President', image: 'members/kailashojha.jpg' },
        { name: 'Rahul Saini', role: 'Vice President', image: 'members/rahulsaini.jpg' },
        { name: 'Roshan Jha', role: 'Treasurer', image: 'members/roshanjha.jpg' },
        { name: 'Kavita Jha', role: 'Secretary', image: 'members/kavitajha.jpg' },
        { name: 'Jitendra Chaudhary', role: 'Joint Secretary', image: 'members/jitendrachaudhry.jpg' },
        { name: 'Jaivir Singh', role: 'General Secretary', image: 'members/jaivirsingh.jpg' },
        { name: 'Harpal Singh', role: 'Organisation Minister', image: 'members/harpalsingh.jpg' }
    ];

    return (
        <section className="max-w-7xl mx-auto py-16 px-4 md:px-8 bg-[#FDF6EC]">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-['Yatra_One',_cursive] text-[#800020]">
                    Pillars of the Trust
                </h2>
                <div className="w-24 h-1 bg-[#FF9933] mx-auto mt-4 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {members.map((_, index) => (
                    <motion.div
                        key={index}
                        className="bg-white p-8 rounded-2xl shadow-md border-b-4 border-[#C9A84C] text-center flex flex-col items-center"
                        whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="w-32 h-32 mb-6 rounded-full border-4 border-[#FDF6EC] shadow-inner overflow-hidden relative">
                            <div className="absolute inset-1 rounded-full border-2 border-dashed border-[#800020] overflow-hidden">
                                <img
                                    src={members[index].image}
                                    alt={members[index].name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                        <h3 className="text-2xl font-bold text-[#800020] mb-1 font-['Crimson_Pro',_serif]">{members[index].name}</h3>
                        <p className="text-[#FF9933] font-semibold text-sm uppercase tracking-widest">{members[index].role}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Team;