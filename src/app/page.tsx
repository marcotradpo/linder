'use client';

import { useState } from 'react';
import SwipeCard from '@/components/SwipeCard';
import NoThanksModal from '@/components/NoThanksModal';
import YesModal from '@/components/YesModal';
import QuestionModal from '@/components/QuestionModal';
import { motion } from 'framer-motion';

interface Profile {
  id: number;
  name: string;
  age: number;
  job: string;
  city: string;
  origin: string;
  image: string;
}

const profiles: Profile[] = [
  {
    id: 1,
    name: "Maria",
    age: 28,
    job: "Insegnante",
    city: "Milano",
    origin: "Italia",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 2,
    name: "Giovanni",
    age: 32,
    job: "Sviluppatore",
    city: "Roma",
    origin: "Italia",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 3,
    name: "Sophie",
    age: 25,
    job: "Designer",
    city: "Parigi",
    origin: "Francia",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  }
];

export default function Home() {
  const [currentProfileIndex, setCurrentProfileIndex] = useState(0);
  const [showNoThanksModal, setShowNoThanksModal] = useState(false);
  const [showYesModal, setShowYesModal] = useState(false);
  const [showQuestionModal, setShowQuestionModal] = useState(false);
  const [currentProfile, setCurrentProfile] = useState<Profile | null>(null);

  const handleSwipeLeft = () => {
    setShowNoThanksModal(true);
    setCurrentProfile(profiles[currentProfileIndex]);
  };

  const handleSwipeRight = () => {
    setShowYesModal(true);
    setCurrentProfile(profiles[currentProfileIndex]);
  };

  const handleSwipeUp = () => {
    setShowQuestionModal(true);
    setCurrentProfile(profiles[currentProfileIndex]);
  };

  const handleNextProfile = () => {
    setShowNoThanksModal(false);
    setShowYesModal(false);
    setShowQuestionModal(false);
    setCurrentProfileIndex((prev) => (prev + 1) % profiles.length);
  };

  const handleCloseModals = () => {
    setShowNoThanksModal(false);
    setShowYesModal(false);
    setShowQuestionModal(false);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gradient-to-b from-pink-100 to-purple-100">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <h1 className="text-4xl font-bold text-center mb-8 text-pink-600">LINDER</h1>
        
        {profiles.length > 0 && currentProfileIndex < profiles.length ? (
          <SwipeCard
            profile={profiles[currentProfileIndex]}
            onSwipeLeft={handleSwipeLeft}
            onSwipeRight={handleSwipeRight}
            onSwipeUp={handleSwipeUp}
          />
        ) : (
          <div className="text-center text-gray-600">
            Non ci sono più profili da mostrare
          </div>
        )}

        <NoThanksModal
          isOpen={showNoThanksModal}
          onClose={handleCloseModals}
          onNext={handleNextProfile}
        />

        <YesModal
          isOpen={showYesModal}
          onClose={handleCloseModals}
          onNext={handleNextProfile}
        />

        <QuestionModal
          isOpen={showQuestionModal}
          onClose={handleCloseModals}
          onNext={handleNextProfile}
        />
      </motion.div>
    </main>
  );
} 