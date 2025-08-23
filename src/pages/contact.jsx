 import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from "lucide-react";

export default function ContactPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! (UI only, not connected yet)");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-red-800 to-red-600 text-white">
      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center py-10"
      >
        Contact Us
      </motion.h1>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto px-6">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white text-gray-900 rounded-2xl shadow-lg p-6"
        >
          <h2 className="text-2xl font-semibold mb-4">Send Us a Message</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600"
              required
            />
            <input
              type="tel"
              placeholder="Your Phone (Optional)"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600"
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-red-900 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition"
            >
              Send Message
            </button>
          </form>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="bg-red-800/60 rounded-2xl p-6 shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <div className="space-y-3">
              <p className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-white" />
                <a href="tel:+2348035861474" className="hover:underline">
                  +234 803 586 1474
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-white" />
                <a href="mailto:Almuktarbawaventures@gmail.com" className="hover:underline">
                  Almuktarbawaventures@gmail.com
                </a>
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-white" />
                No. 11 IBB Way, Katsina, Nigeria
              </p>
              <p className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-white" />
                Mon - Sat: 9am - 6pm
              </p>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-lg h-64">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.838877392272!2d7.49508!3d9.05785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0a5d0fcb0f4f%3A0x9b33c9d65a7a0a88!2sAbuja%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1692621612345!5m2!1sen!2sng"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
           /> 
          </div>

          {/* Social Media */}
          <div className="flex gap-4 justify-center">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <Facebook className="w-7 h-7 hover:text-gray-300" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <Instagram className="w-7 h-7 hover:text-gray-300" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <Twitter className="w-7 h-7 hover:text-gray-300" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto mt-16 bg-red-800/60 rounded-2xl p-8 shadow-lg">
        <h2 className="text-2xl font-semibold mb-6 text-center">Frequently Asked Questions</h2>
        <ul className="space-y-4">
          <li>
            <strong>Do you deliver cars outside Katsina?</strong>
            <p>✅ Yes, we deliver nationwide. Delivery fees depend on the location.</p>
          </li>
          <li>
            <strong>Can I pay in installments?</strong>
            <p>✅ Yes, we offer flexible payment plans. Contact us for details.</p>
          </li>
          <li>
            <strong>Do you accept trade-ins?</strong>
            <p>✅ Yes, bring your car for evaluation and we’ll make you an offer.</p>
          </li>
        </ul>
      </div>

      {/* Testimonial */}
      <div className="max-w-2xl mx-auto mt-12 text-center">
        <p className="italic text-lg">
          "I bought my car from Al-Muktar Bawa Ventures and it was the best decision! Professional and affordable service."
        </p>
        <p className="mt-2 font-semibold">– Aisha, Abuja</p>
      </div>

      {/* Call-to-Action Banner */}
      <div className="bg-red-700 mt-16 p-8 rounded-2xl text-center shadow-lg max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Your Dream Car?</h2>
        <p className="mb-6">Visit our showroom or contact us today for exclusive deals!</p>
        <a
          href="tel:+2348035861474"
          className="bg-white text-red-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
        >
          Call Now
        </a>
      </div>

      {/* Footer */}
      <footer className="mt-20 bg-red-950 text-gray-300 py-10 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-3">Al-Muktar Bawa Ventures</h3>
            <p>Reliable car dealership in Katsina, delivering quality vehicles across Nigeria.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/products" className="hover:underline">products</a></li>
              <li><a href="/about" className="hover:underline">About Us</a></li>
              <li><a href="/contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">Contact Info</h3>
            <p>📍 No. 11 IBB Way, Katsina, Nigeria</p>
            <p>📞 +234 803 586 1474</p>
            <p>✉️ Almuktarbawaventures@gmail.com</p>
          </div>
        </div>
        <div className="text-center mt-8 text-gray-400 text-sm">
          © {new Date().getFullYear()} Al-Muktar Bawa Ventures. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

