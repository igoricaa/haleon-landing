"use client";

import { motion } from "motion/react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-aquafresh to-sensodyne border-t border-gray-200">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-6"
        >
          {/* Brand Logos */}
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
            {/* Aquafresh Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              className="flex items-center"
            >
              <Image
                src="/aquafresh_logo.png"
                alt="Aquafresh logo"
                width={100}
                height={32}
                className="h-auto w-20 sm:w-24 drop-shadow-lg"
              />
            </motion.div>

            {/* Sensodyne Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              className="flex items-center"
            >
              <Image
                src="/sensodyne-logo.png"
                alt="Sensodyne logo"
                width={100}
                height={32}
                className="h-auto w-20 sm:w-24 drop-shadow-lg"
              />
            </motion.div>
          </div>

          {/* Haleon Branding */}
          <div className="text-xl font-semibold text-white">
            HALEON
          </div>
          
          {/* Copyright */}
          <div className="text-sm text-white">
            © {new Date().getFullYear()} Haleon. Sva prava zadržana.
          </div>
          
          {/* Simple tagline */}
          <div className="text-xs text-white/90 max-w-md mx-auto">
            Za zdravlje vaše dece i osmeh koji traje.
          </div>
        </motion.div>
      </div>
    </footer>
  );
}