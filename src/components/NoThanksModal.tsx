'use client';

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
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white rounded-2xl p-6 max-w-sm w-full mx-4"
      >
        <div className="flex justify-center mb-4">
          <XMarkIcon className="h-12 w-12 text-red-500" />
        </div>
        <h2 className="text-2xl font-bold text-center mb-4">Non ti piace?</h2>
        <p className="text-gray-600 text-center mb-6">
          Nessun problema! C'è sempre il prossimo profilo.
        </p>
        <div className="flex gap-4">
          <button
            onClick={onNext}
            className="flex-1 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-colors"
          >
            Prossimo
          </button>
          <button
            onClick={onClose}
            className="flex-1 bg-gray-200 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors"
          >
            Chiudi
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
} 