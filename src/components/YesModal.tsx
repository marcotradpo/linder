import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HeartIcon } from '@heroicons/react/24/outline';

interface YesModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
}

export default function YesModal({ isOpen, onClose, onNext }: YesModalProps) {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [showCallButton, setShowCallButton] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowCallButton(true);
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
          <HeartIcon className="h-12 w-12 text-red-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Mi piace!</h2>
          <p className="text-gray-600 mb-6">Inserisci il tuo numero di telefono per chiamare</p>
        </div>

        {!showCallButton ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="Numero di telefono"
              className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
            <div className="flex gap-4">
              <button
                type="submit"
                className="flex-1 bg-green-500 text-white py-3 rounded-xl hover:bg-green-600 transition-colors"
              >
                Chiama
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
        ) : (
          <div className="space-y-4">
            <a
              href={`tel:${phoneNumber}`}
              className="block w-full bg-green-500 text-white py-3 rounded-xl hover:bg-green-600 transition-colors text-center"
            >
              Chiama {phoneNumber}
            </a>
            <button
              onClick={onNext}
              className="w-full bg-gray-500 text-white py-3 rounded-xl hover:bg-gray-600 transition-colors"
            >
              Prossimo profilo
            </button>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
} 