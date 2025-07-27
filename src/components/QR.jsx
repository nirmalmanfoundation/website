import React from 'react';

const QR = () => {
    return (
        <div className="flex flex-col items-center justify-center p-4 bg-red-50 px-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-red-400 mb-8 font-lexend text-center">
                Donate Now
            </h2>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8">
                {/* Left Donate Icon */}
                <img
                    src="donate.png"
                    alt="Donate Icon Left"
                    className="h-20 w-20 sm:h-24 sm:w-24 object-contain"
                />

                {/* QR Code with UPI Link */}
                <a
                    href="upi://pay?pa=0793549A0225226.bqr@kotak&pn=Nirmal%Man&am=100&cu=INR"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src="members/nmfqr.jpg"
                        alt="QR Code"
                        className="h-60 w-60 sm:h-72 sm:w-72 object-contain rounded-xl shadow-lg border border-gray-300 hover:scale-105 transition-transform"
                    />
                </a>

                {/* Right Donate Icon */}
                <img
                    src="donate.png"
                    alt="Donate Icon Right"
                    className="h-20 w-20 sm:h-24 sm:w-24 object-contain"
                />
            </div>
        </div>
    );
};

export default QR;
