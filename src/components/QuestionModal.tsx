'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { QuestionMarkCircleIcon } from '@heroicons/react/24/outline';
import { QuestionModalProps } from '@/types';

export default function QuestionModal({ isOpen, onClose, onSubmit }: QuestionModalProps) {
  const [question, setQuestion] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(question);
  };

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        className="bg-white rounded-2xl p-6 max-w-md w-full"
      >
        <div className="text-center">
          <motion.div
            className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 10 }}
          >
            <QuestionMarkCircleIcon className="h-8 w-8 text-primary-500" />
          </motion.div>
          <motion.h2
            className="text-2xl font-bold text-gray-900 mb-2"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Fai una domanda
          </motion.h2>
          <motion.p
            className="text-gray-600 mb-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Scrivi una domanda per conoscere meglio il profilo
          </motion.p>

          <motion.form
            onSubmit={handleSubmit}
            className="space-y-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <textarea
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Scrivi la tua domanda..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 min-h-[100px]"
              required
            />
            <motion.button
              type="submit"
              className="w-full bg-primary-500 text-white py-2 rounded-lg hover:bg-primary-600 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Invia
            </motion.button>
          </motion.form>
        </div>
      </motion.div>
    </motion.div>
  );
} 