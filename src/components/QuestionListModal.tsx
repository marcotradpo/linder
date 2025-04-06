'use client';

import { motion } from 'framer-motion';
import { XMarkIcon, HeartIcon } from '@heroicons/react/24/outline';
import { ModalProps } from '@/types';

const questions = [
  'Nome',
  'Età',
  'Lavoro/Studio',
  'Da dove vieni?',
  'Dove abiti?',
  'Quanti soldi guadagni?',
  'Fumi?',
  'Bevi?',
  'Fai sport?',
  'Che genere ascolti?',
  'Hobby?',
  'Figli',
  'Vuoi figli?',
  'Matrimonio o convivenza?',
  'Cosa cerchi?',
  'Valori',
  'Obiettivi',
  'Domanda extra'
];

export default function QuestionListModal({ isOpen, onClose, onNext }: ModalProps) {
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
        className="bg-white rounded-2xl p-6 max-w-md w-full relative max-h-[90vh] flex flex-col"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10"
        >
          <XMarkIcon className="h-6 w-6" />
        </button>

        <motion.h2
          className="text-3xl font-bold text-gray-900 mb-6 text-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Chiedimi qualsiasi domanda della lista
        </motion.h2>

        <motion.div
          className="flex-1 overflow-y-auto mb-6 px-2"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="space-y-4">
            {questions.map((question, index) => (
              <div
                key={index}
                className="flex items-center justify-between py-2 border-b border-gray-200"
              >
                <span className="text-lg text-gray-700">{question}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="flex justify-center gap-8 pt-2">
          <motion.button
            onClick={onClose}
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
      </motion.div>
    </motion.div>
  );
} 