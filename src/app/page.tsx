'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SwipeCard from '@/components/SwipeCard';
import NoThanksModal from '@/components/NoThanksModal';
import YesModal from '@/components/YesModal';
import ProfileModal from '@/components/ProfileModal';
import QuestionModal from '@/components/QuestionModal';
import { XMarkIcon, InformationCircleIcon, HeartIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/outline';

const profile = {
  name: 'Nome Cognome',
  age: 'Età',
  job: 'Professione',
  city: 'Città',
  origin: 'Origine',
  image: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
};

export default function Home() {
  const [showNoThanksModal, setShowNoThanksModal] = useState(false);
  const [showYesModal, setShowYesModal] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [showQuestionModal, setShowQuestionModal] = useState(false);

  const handleSwipeLeft = () => {
    setShowNoThanksModal(true);
  };

  const handleSwipeRight = () => {
    setShowYesModal(true);
  };

  const handleSwipeUp = () => {
    setShowProfileModal(true);
  };

  const handleQuestion = () => {
    setShowQuestionModal(true);
  };

  const handleNextProfile = () => {
    setShowNoThanksModal(false);
    setShowYesModal(false);
    setShowProfileModal(false);
    setShowQuestionModal(false);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-md mx-auto h-screen flex flex-col">
        <div className="flex-1 relative">
          <AnimatePresence>
            <SwipeCard
              key={profile.name}
              profile={profile}
              onSwipeLeft={handleSwipeLeft}
              onSwipeRight={handleSwipeRight}
              onSwipeUp={handleSwipeUp}
            />
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-8 p-6 bg-white">
          <button
            onClick={handleSwipeLeft}
            className="p-4 rounded-full bg-red-500 text-white hover:bg-red-600 transition-colors"
          >
            <XMarkIcon className="h-8 w-8" />
          </button>
          <button
            onClick={handleSwipeUp}
            className="p-4 rounded-full bg-yellow-500 text-white hover:bg-yellow-600 transition-colors"
          >
            <InformationCircleIcon className="h-8 w-8" />
          </button>
          <button
            onClick={handleQuestion}
            className="p-4 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors"
          >
            <QuestionMarkCircleIcon className="h-8 w-8" />
          </button>
          <button
            onClick={handleSwipeRight}
            className="p-4 rounded-full bg-green-500 text-white hover:bg-green-600 transition-colors"
          >
            <HeartIcon className="h-8 w-8" />
          </button>
        </div>
      </div>

      <NoThanksModal
        isOpen={showNoThanksModal}
        onClose={() => setShowNoThanksModal(false)}
        onNext={handleNextProfile}
      />

      <YesModal
        isOpen={showYesModal}
        onClose={() => setShowYesModal(false)}
        onNext={handleNextProfile}
      />

      <ProfileModal
        isOpen={showProfileModal}
        onClose={() => setShowProfileModal(false)}
        onNext={handleNextProfile}
        profile={profile}
      />

      <QuestionModal
        isOpen={showQuestionModal}
        onClose={() => setShowQuestionModal(false)}
        onNext={handleNextProfile}
      />
    </div>
  );
} 