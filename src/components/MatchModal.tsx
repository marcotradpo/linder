'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HeartIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { ModalProps } from '@/types';

export default function MatchModal({ isOpen, onClose, onNext }: ModalProps) {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [showCallButton, setShowCallButton] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setPhoneNumber('');
      setShowCallButton(false);
    }
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowCallButton(true);
  };

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
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
        className="bg-white rounded-2xl p-8 max-w-md w-full relative"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <XMarkIcon className="h-6 w-6" />
        </button>

        <div className="text-center">
          <motion.div
            className="w-32 h-32 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6"
            initial={{ scale: 0 }}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ 
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <HeartIcon className="h-20 w-20 text-red-500" />
          </motion.div>
          <motion.h2
            className="text-5xl font-bold text-gray-900 mb-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Hai fatto Match!
          </motion.h2>

          {!showCallButton ? (
            <motion.form
              onSubmit={handleSubmit}
              className="space-y-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <div className="mt-6">
                <p className="text-gray-800 mb-4">Inserisci il tuo numero di telefono:</p>
                <div className="flex items-center">
                  <input
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="Inserisci il tuo numero"
                    className="flex-1 p-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#FF8A00]"
                    style={{ color: 'black', WebkitTextFillColor: 'black' }}
                  />
                </div>
              </div>
              <motion.button
                type="submit"
                className="w-full bg-primary-500 text-white py-4 rounded-xl text-xl font-semibold hover:bg-primary-600 transition-colors shadow-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Conosciamoci
              </motion.button>
            </motion.form>
          ) : (
            <motion.div
              className="space-y-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <motion.button
                onClick={handleCall}
                className="w-full bg-green-500 text-white py-4 rounded-xl text-xl font-semibold hover:bg-green-600 transition-colors shadow-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Chiama {phoneNumber}
              </motion.button>
            </motion.div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
} 