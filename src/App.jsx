 import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { lazy, Suspense } from "react";
import { Github, MessageCircle } from "lucide-react"; // replaced Whatsapp with MessageCircle

// Lazy-loaded pages
const Home = lazy(() => import("./pages/Home"));
const Product = lazy(() => import("./pages/Product"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        {/* Navbar */}
        <Navbar />

        {/* Main content */}
        <main className="flex-1">
          <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Product />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </main>

        {/* Footer */}
        <footer className="bg-black text-white py-4 text-center flex flex-col items-center gap-2">
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Sinsydev"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <Github size={20} />
            </a>
            <a
              href="https://wa.me/2347063361518"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400"
            >
              <MessageCircle size={20} /> {/* safe replacement for Whatsapp */}
            </a>
          </div>
          <p className="text-sm">Created by Sinsydev</p>
          <p className="text-sm">
            &copy; {new Date().getFullYear()} KT Almadina Motors International Ltd. All rights reserved.
          </p>
        </footer>
      </div>
    </Router>
  );
}

export default App;



