import React from 'react';
import { motion } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface NoThanksModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
}

export default function NoThanksModal({ isOpen, onClose, onNext }: NoThanksModalProps) {
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
          <XMarkIcon className="h-12 w-12 text-red-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Sei sicura?</h2>
          <p className="text-gray-600 mb-6">
            Potrebbe essere l'ultima volta che vi incontrate. Meglio dire di no dopo aver conosciuto!
          </p>
        </div>

        <div className="space-y-4">
          <button
            onClick={onNext}
            className="w-full bg-red-500 text-white py-3 rounded-xl hover:bg-red-600 transition-colors"
          >
            Sono sicura, no grazie
          </button>
          <button
            onClick={onClose}
            className="w-full bg-gray-200 text-gray-800 py-3 rounded-xl hover:bg-gray-300 transition-colors"
          >
            Ok, ascoltiamo il profilo
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
} 