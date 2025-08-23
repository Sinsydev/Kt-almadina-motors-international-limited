 import { motion } from "framer-motion";
import { Car, Building, Ship, ShoppingBag, Wrench, Globe, Star, Shield, Users } from "lucide-react";

const services = [
  { title: "Car Sales", desc: "Affordable cars with high quality and trusted service.", icon: Car },
  { title: "Import & Export", desc: "Reliable import and export of vehicles across the globe.", icon: Ship },
  { title: "Spare Parts", desc: "Durable spare parts available anytime you need them.", icon: Wrench },
  { title: "Real Estate", desc: "We also provide property investment and leasing services.", icon: Building },
  { title: "Shopping & Delivery", desc: "Easy shopping with fast and secure delivery.", icon: ShoppingBag },
  { title: "International Deals", desc: "Expanding our business across borders.", icon: Globe },
];

// Framer Motion animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function AboutServices() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-gray-100" id="services">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-4xl md:text-5xl font-extrabold text-gray-900"
        >
          Our Services
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: false }}
          className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto"
        >
          We specialize in delivering top-quality services that keep our customers satisfied across industries.
        </motion.p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            whileHover={{ scale: 1.05, boxShadow: "0px 15px 30px rgba(0,0,0,0.2)" }}
            className="bg-white p-8 rounded-2xl shadow-lg flex flex-col items-center text-center transition-all duration-300"
          >
            <service.icon className="w-14 h-14 text-blue-600 mb-6" />
            <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
            <p className="text-gray-600">{service.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* New Half Background Image Section */}
      <section className="relative mt-24 grid grid-cols-1 md:grid-cols-2 rounded-3xl overflow-hidden shadow-xl">
        {/* Background Image Side */}
        <div
        className="h-80 md:h-auto bg-cover bg-center"
        style={{ backgroundImage: "url('/images/about-bg2.webp')" }}
      />

        {/* Content Side */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col justify-center p-10">
          <motion.h3
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: false }}
            className="text-3xl font-extrabold text-blue-900 mb-6"
          >
            Why Choose Us
          </motion.h3>

          <div className="space-y-6">
            {[
              { icon: Star, text: "Trusted by thousands of happy customers worldwide" },
              { icon: Shield, text: "Guaranteed quality and transparency in every deal" },
              { icon: Users, text: "Dedicated team committed to customer satisfaction" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.2, duration: 0.7 }}
                viewport={{ once: false }}
                className="flex items-center space-x-4"
              >
                <item.icon className="w-8 h-8 text-blue-700" />
                <p className="text-lg text-gray-700">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Showcase Section */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: false, amount: 0.2 }}
        className="mt-20 bg-blue-50 rounded-3xl p-10 shadow-inner"
      >
        <h2 className="text-3xl font-extrabold text-blue-900 mb-6 text-center">
          What We Do
        </h2>
        <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
          At <span className="font-bold text-red-700 font-serif">KT ALMADINA MOTORS INTERNATIONAL LTD</span>, 
          we are more than just a car dealership. We connect customers with trusted vehicles, 
          handle import & export logistics, provide quality spare parts, and create opportunities 
          for international investments. Our mission is to bring affordable solutions and global 
          opportunities to our community.
        </p>
      </motion.div>
    </section>
  );
}





