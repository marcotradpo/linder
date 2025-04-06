import React from 'react';
import { motion } from 'framer-motion';
import { SpeakerWaveIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

interface Profile {
  name: string;
  age: string;
  job: string;
  city: string;
  origin: string;
  image: string;
}

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  profile: Profile;
}

export default function ProfileModal({ isOpen, onClose, onNext, profile }: ProfileModalProps) {
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
          <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
            <Image
              src={profile.image || "/profile-default.jpg"}
              alt={`Profilo di ${profile.name}`}
              fill
              className="object-cover"
            />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Profilo di chi è di fronte a te</h2>
        </div>

        <div className="space-y-4 mb-6">
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Nome</span>
            <span className="font-semibold">{profile.name}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Età</span>
            <span className="font-semibold">{profile.age}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Professione</span>
            <span className="font-semibold">{profile.job}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Città</span>
            <span className="font-semibold">{profile.city}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Origine</span>
            <span className="font-semibold">{profile.origin}</span>
          </div>
        </div>

        <div className="space-y-4">
          <button
            onClick={onNext}
            className="w-full bg-green-500 text-white py-3 rounded-xl hover:bg-green-600 transition-colors"
          >
            Mi piace! 👍
          </button>
          <button
            onClick={onClose}
            className="w-full bg-red-500 text-white py-3 rounded-xl hover:bg-red-600 transition-colors"
          >
            No grazie 👎
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
} 