import React from 'react';

const QR = () => {
    return (
        <section className="py-16 px-4 bg-[#800020] relative overflow-hidden">
            {/* Subtle Mandala Background Graphic Placeholder */}
            <div className="absolute top-0 right-0 opacity-10 pointer-events-none transform translate-x-1/3 -translate-y-1/4 text-[400px] leading-none text-[#C9A84C] font-['Yatra_One',_cursive]">
                ॐ
            </div>

            <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
                <h2 className="text-4xl md:text-5xl font-['Yatra_One',_cursive] text-[#C9A84C] mb-4 text-center">
                    Offer Your Support
                </h2>
                <p className="text-[#FDF6EC] text-lg mb-10 text-center max-w-2xl font-['Crimson_Pro',_serif]">
                    Your generous contribution helps us sustain our divine mission. Scan to donate directly via UPI.
                </p>

                <div className="bg-[#FDF6EC] p-8 md:p-10 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.3)] border-4 border-[#C9A84C] flex flex-col items-center transform transition duration-500 hover:scale-[1.02]">
                    <div className="mb-6 flex space-x-4 items-center justify-center">
                        <div className="h-12 w-12 border border-dashed border-[#800020] flex items-center justify-center rounded-full">
                            <span className="text-[10px] text-center text-[#800020] leading-tight">
                                <img src="diya.svg" alt="Diyas Icon" className="h-full w-full object-contain" />
                            </span>
                        </div>
                        <h3 className="text-2xl font-bold text-[#800020]">NirmalMan Foundation</h3>
                        <div className="h-12 w-12 border border-dashed border-[#800020] flex items-center justify-center rounded-full">
                            <span className="text-[10px] text-center text-[#800020] leading-tight">
                                <img src="diya.svg" alt="Diyas Icon" className="h-full w-full object-contain" />
                            </span>
                        </div>
                    </div>

                    <a
                        href="upi://pay?pa=0793549A0225226.bqr@kotak&pn=Nirmal%20Name%20Donation&cu=INR"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                    >
                        <div className="h-64 w-64 md:h-80 md:w-80 border-2 border-dashed border-[#C9A84C] bg-white flex items-center justify-center rounded-xl p-2 hover:opacity-90 transition-opacity">
                            <span className="text-[#800020] font-['Yatra_One',_cursive] text-xl text-center">
                                <img src="members/nmfqr.jpg" alt="QR Code" className="h-full w-full object-contain" />
                                {/* [PHOTO: High-Res QR Code Image — 400×400px] */}
                            </span>
                        </div>
                    </a>
                    <p className="mt-6 text-sm text-gray-600 font-semibold tracking-wide uppercase">
                        Scan with any UPI App
                    </p>
                </div>
            </div>
        </section>
    );
};

export default QR;