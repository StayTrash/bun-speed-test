"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

const navItems = ["Home", "Features", "Solutions", "Pricing", "Contact"];

export default function LandingPage() {
  const [active, setActive] = useState("Home");

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#020617] text-white flex flex-col">
      {/* 🔹 Navbar */}
      <nav className="w-full flex justify-between items-center px-10 py-6 sticky top-0 z-50 backdrop-blur-xl bg-white/5 border-b border-white/10">
        <h1 className="text-3xl font-extrabold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent tracking-wide">
          AIverse
        </h1>

        <ul className="flex space-x-8 relative">
          {navItems.map((item) => (
            <li key={item} className="relative">
              <button
                onClick={() => setActive(item)}
                className="px-2 py-1 relative text-lg font-medium text-gray-300 hover:text-white transition-colors"
              >
                {item}
                {active === item && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 right-0 -bottom-1 h-[3px] rounded-full bg-gradient-to-r from-indigo-400 to-purple-500"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </button>
            </li>
          ))}
        </ul>

        <motion.button
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 font-semibold shadow-lg hover:shadow-purple-500/40 transition"
        >
          Get Started
        </motion.button>
      </nav>

      {/* 🔹 Hero Section */}
      <section className="flex flex-1 flex-col md:flex-row items-center justify-between px-10 md:px-20 py-20 gap-12">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex-1 space-y-6"
        >
          <h2 className="text-5xl md:text-7xl font-extrabold leading-tight">
            Unlock the Future with
            <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
              {" "}
              AI
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-xl leading-relaxed">
            Transform your business with intelligent AI solutions designed to
            accelerate workflows, boost productivity, and unlock creativity.
          </p>
          <div className="flex space-x-4 pt-4">
            <motion.button
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.95 }}
              className="px-7 py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 font-semibold shadow-lg"
            >
              🚀 Start Free Trial
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.95 }}
              className="px-7 py-3 rounded-lg border border-gray-600 font-semibold hover:bg-white/10 transition"
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          className="flex-1 flex justify-center relative"
        >
          {/* Glow Effects */}
          <div className="absolute w-72 h-72 bg-purple-600/40 rounded-full blur-[120px] -top-16 -left-10"></div>
          <div className="absolute w-72 h-72 bg-indigo-500/40 rounded-full blur-[120px] bottom-0 -right-10"></div>

          <motion.img
            src="/ai-brain.png"
            alt="AI Illustration"
            className="w-[420px] drop-shadow-2xl relative z-10"
            animate={{ y: [0, -15, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </section>

      {/* 🔹 Footer */}
      <footer className="px-10 md:px-20 py-8 text-gray-400 border-t border-white/10 bg-white/5 backdrop-blur-md">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} AIverse. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link href="#">Privacy</Link>
            <Link href="#">Terms</Link>
            <Link href="#">Support</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
