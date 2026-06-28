import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    address: "",
    occupation: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");

    try {
      const serviceID = "your_service_id"; // Replace with your EmailJS Service ID
      const templateID = "your_template_id"; // Replace with your EmailJS Template ID
      const publicKey = "your_public_key"; // Replace with your EmailJS Public Key

      await emailjs.send(serviceID, templateID, formData, publicKey);

      setMessage("Form submitted successfully! We will get in touch soon.");
      setFormData({ name: "", mobile: "", address: "", occupation: "" });
    } catch (error) {
      console.error("Email sending failed:", error);
      setMessage("Error submitting form. Please try again.");
    }

    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Contact <span className="text-amber-900">Us</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Whether you want to volunteer, donate, or simply learn more about the Nirmal Mann Foundation, we would love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* Contact Information Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col space-y-8"
          >
            {/* Address Card */}
            <div className="bg-white p-8 rounded-3xl shadow-lg flex items-start space-x-6 transition hover:shadow-xl">
              <div className="bg-amber-100 p-4 rounded-full text-amber-900 flex-shrink-0">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Our Address</h3>
                <p className="text-gray-600 leading-relaxed">
                  269 A Ganesh Vatika I,<br />
                  Kallawala, Vatika Road,<br />
                  Sanganer, Jaipur - 303905
                </p>
              </div>
            </div>

            {/* Phone Card */}
            <div className="bg-white p-8 rounded-3xl shadow-lg flex items-start space-x-6 transition hover:shadow-xl">
              <div className="bg-amber-100 p-4 rounded-full text-amber-900 flex-shrink-0">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Phone Numbers</h3>
                <p className="text-gray-600 text-lg">+91 9694711457</p>
                <p className="text-gray-600 text-lg">+91 9829333137</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-3xl shadow-xl p-8 lg:p-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Send us a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-900 focus:border-amber-900 transition outline-none"
                  placeholder="John Doe"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Mobile Number</label>
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-900 focus:border-amber-900 transition outline-none"
                  placeholder="+91 XXXXX XXXXX"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-900 focus:border-amber-900 transition outline-none resize-none"
                  rows="3"
                  placeholder="Your full address..."
                  required
                ></textarea>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Current Occupation</label>
                <input
                  type="text"
                  name="occupation"
                  value={formData.occupation}
                  onChange={handleChange}
                  className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-900 focus:border-amber-900 transition outline-none"
                  placeholder="e.g. Student, Engineer, Business Owner"
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-amber-900 text-white py-4 rounded-xl font-bold text-lg hover:bg-amber-800 transition shadow-lg hover:shadow-xl disabled:opacity-70"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Submit Form"}
              </button>
              
              {message && (
                <motion.p 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  className={`text-center font-medium mt-4 ${message.includes('Error') ? 'text-red-600' : 'text-green-600'}`}
                >
                  {message}
                </motion.p>
              )}
            </form>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Contact;