import React from 'react';

const QR = () => {
    return (
        <div className="flex flex-col items-center justify-center p-4 bg-red-50 px-4">
            <h2 className="text-4xl font-bold text-red-400 mb-10 font-lexend">Donate Now</h2>

            <div className="flex items-center gap-8">
                {/* Left Donate Icon */}
                <img
                    src="donate.png"
                    alt="Donate Icon Left"
                    className="h-24 w-24 object-contain"
                />

                {/* QR Code */}
                <img
                    src="members/nmfqr.jpg"
                    alt="QR Code"
                    className="h-72 w-72 object-contain rounded-xl shadow-lg border border-gray-300"
                />

                {/* Right Donate Icon */}
                <img
                    src="donate.png"
                    alt="Donate Icon Right"
                    className="h-24 w-24 object-contain"
                />
            </div>
        </div>
    );
};

export default QR;
