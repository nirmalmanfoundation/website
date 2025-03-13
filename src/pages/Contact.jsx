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
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12 bg-gray-100">
      {/* Page Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-gray-800 mb-8"
      >
        Contact Us
      </motion.h1>

      {/* Contact Form */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg"
      >
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Get in Touch</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-600">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div>
            <label className="block text-gray-600">Mobile Number</label>
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div>
            <label className="block text-gray-600">Address</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
              rows="3"
              required
            ></textarea>
          </div>
          <div>
            <label className="block text-gray-600">Current Occupation</label>
            <input
              type="text"
              name="occupation"
              value={formData.occupation}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-amber-900 text-white py-2 rounded-lg font-medium hover:bg-amber-800 transition"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
          {message && <p className="text-center mt-2 text-gray-700">{message}</p>}
        </form>
      </motion.div>

      {/* Contact Info Cards */}
      <div className="grid md:grid-cols-2 gap-6 mt-10 w-full max-w-4xl">
        {/* Address Card */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white shadow-lg rounded-lg p-6 text-center"
        >
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Our Address</h3>
          <p className="text-gray-600">
            269 A Ganesh Vatika I,<br />
            Kallawala, Vatika Road,<br />
            Sanganer, Jaipur - 303905
          </p>
        </motion.div>

        {/* Phone Card */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white shadow-lg rounded-lg p-6 text-center"
        >
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Phone Numbers</h3>
          <p className="text-gray-600">+91 9694711457</p>
          <p className="text-gray-600">+91 9829333137</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
