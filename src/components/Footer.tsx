"use client";

import { motion } from "motion/react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          {/* Haleon Branding */}
          <div className="text-xl font-semibold text-gray-800">
            HALEON
          </div>
          
          {/* Copyright */}
          <div className="text-sm text-gray-600">
            © {new Date().getFullYear()} Haleon. Sva prava zadržana.
          </div>
          
          {/* Simple tagline */}
          <div className="text-xs text-gray-500 max-w-md mx-auto">
            Za zdravlje vaše dece i osmeh koji traje.
          </div>
        </motion.div>
      </div>
    </footer>
  );
}