'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { XMarkIcon, HeartIcon } from '@heroicons/react/24/outline';
import { ModalProps } from '@/types';

interface NoThanksModalProps extends ModalProps {
  onShowQuestions: () => void;
}

export default function NoThanksModal({ isOpen, onClose, onNext, onShowQuestions }: NoThanksModalProps) {
  const [showGoodbye, setShowGoodbye] = useState(false);

  if (!isOpen) return null;

  const handleClose = () => {
    if (showGoodbye) {
      setShowGoodbye(false);
      onClose();
    } else {
      setShowGoodbye(true);
    }
  };

  const handleRestart = () => {
    setShowGoodbye(false);
    onClose();
  };

  const handleShowQuestions = () => {
    onClose();
    onShowQuestions();
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
        className="bg-white rounded-2xl p-6 max-w-md w-full relative"
      >
        {showGoodbye ? (
          <div className="text-center py-8">
            <motion.h2
              className="text-4xl font-bold text-gray-900 mb-12"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              È stato un piacere giocare con te
            </motion.h2>
            <motion.button
              onClick={handleRestart}
              className="w-full px-6 py-4 rounded-xl bg-primary-500 text-white hover:bg-primary-600 transition-colors shadow-lg text-xl font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Ricomincia
            </motion.button>
          </div>
        ) : (
          <>
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>

            <div className="text-center mt-4">
              <motion.h2
                className="text-4xl font-bold text-gray-900 mb-6"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Sei sicuro/a?
              </motion.h2>
              <motion.p
                className="text-2xl text-gray-600 mb-2"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Potrebbe essere l'ultima volta che incontri questa persona.
              </motion.p>
              <motion.p
                className="text-xl text-primary-500 font-semibold mb-8 cursor-pointer hover:text-primary-600"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                onClick={handleShowQuestions}
              >
                Scopri di più!
              </motion.p>

              <div className="space-y-6">
                <motion.button
                  onClick={handleShowQuestions}
                  className="w-full px-6 py-3 rounded-xl bg-primary-500 text-white hover:bg-primary-600 transition-colors shadow-lg flex flex-col items-center justify-center text-base font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>DOMANDE</span>
                  <span>DISPONIBILI</span>
                </motion.button>

                <div className="flex justify-center gap-8">
                  <motion.button
                    onClick={handleClose}
                    className="p-5 rounded-full bg-red-500 text-white hover:bg-red-600 transition-colors shadow-lg"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <XMarkIcon className="h-10 w-10" />
                  </motion.button>
                  <motion.button
                    onClick={onNext}
                    className="p-5 rounded-full bg-green-500 text-white hover:bg-green-600 transition-colors shadow-lg"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <HeartIcon className="h-10 w-10" />
                  </motion.button>
                </div>
              </div>
            </div>
          </>
        )}
      </motion.div>
    </motion.div>
  );
} 