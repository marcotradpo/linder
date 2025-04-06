import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { QuestionMarkCircleIcon } from '@heroicons/react/24/outline';

interface QuestionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
}

export default function QuestionModal({ isOpen, onClose, onNext }: QuestionModalProps) {
  const [question, setQuestion] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

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
          <QuestionMarkCircleIcon className="h-12 w-12 text-blue-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Fai una domanda</h2>
          <p className="text-gray-600 mb-6">Scrivi una domanda per conoscere meglio la persona</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Scrivi la tua domanda..."
            className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 h-32 resize-none"
            required
          />
          <div className="flex gap-4">
            <button
              type="submit"
              className="flex-1 bg-blue-500 text-white py-3 rounded-xl hover:bg-blue-600 transition-colors"
            >
              Invia
            </button>
            <button
              type="button"
              onClick={onClose}
              className="flex-1 bg-gray-500 text-white py-3 rounded-xl hover:bg-gray-600 transition-colors"
            >
              Annulla
            </button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
} 