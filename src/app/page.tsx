'use client';

import { useState } from 'react';
import SwipeCard from '@/components/SwipeCard';
import NoThanksModal from '@/components/NoThanksModal';
import QuestionModal from '@/components/QuestionModal';
import MatchModal from '@/components/MatchModal';
import QuestionListModal from '@/components/QuestionListModal';
import InfoModal from '@/components/InfoModal';
import { motion } from 'framer-motion';

export default function Home() {
  const [showNoThanksModal, setShowNoThanksModal] = useState(false);
  const [showQuestionModal, setShowQuestionModal] = useState(false);
  const [showMatchModal, setShowMatchModal] = useState(false);
  const [showQuestionList, setShowQuestionList] = useState(false);
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');

  const profile = {
    id: 1,
    name: 'Profilo',
    age: 25,
    job: 'Lavoro',
    city: 'Città',
    origin: 'Origine',
    image: '/profile-default.jpg'
  };

  const handleSwipeLeft = () => {
    setShowNoThanksModal(true);
  };

  const handleSwipeRight = () => {
    setShowMatchModal(true);
  };

  const handleSwipeUp = () => {
    setShowQuestionList(true);
  };

  const handleShowMatch = () => {
    setShowQuestionList(false);
    setShowNoThanksModal(false);
    setShowMatchModal(true);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 bg-[#fff4e5]">
      <div className="text-center mb-8">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-gray-800 mb-6"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          CONOSCIAMOCI DAL VIVO{' '}
          <motion.span
            initial={{ rotate: 0 }}
            animate={{ rotate: [0, -10, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
          >
            👋
          </motion.span>{' '}
          <motion.span
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity, repeatDelay: 1.5 }}
          >
            🤝
          </motion.span>{' '}
          <motion.span
            initial={{ rotate: 0 }}
            animate={{ rotate: [0, 15, -15, 15, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 }}
          >
            😊
          </motion.span>
        </motion.h2>
        <motion.h1
          className="text-5xl sm:text-7xl font-bold cursor-pointer text-[#FF8A00]"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ 
            scale: [1, 1.05, 1],
            opacity: 1 
          }}
          transition={{ 
            scale: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            },
            opacity: {
              duration: 0.5
            }
          }}
          style={{
            textShadow: '4px 4px 0px rgba(0,0,0,0.1)',
            letterSpacing: '0.1em',
            filter: 'drop-shadow(2px 2px 4px rgba(255, 138, 0, 0.3))'
          }}
          onClick={() => setShowInfoModal(true)}
        >
          LINDER
        </motion.h1>
      </div>

      <div className="w-full max-w-md">
        <SwipeCard
          profile={profile}
          onSwipeLeft={handleSwipeLeft}
          onSwipeRight={handleShowMatch}
          onSwipeUp={handleSwipeUp}
        />
      </div>

      <NoThanksModal
        isOpen={showNoThanksModal}
        onClose={() => setShowNoThanksModal(false)}
        onNext={handleShowMatch}
        onShowQuestions={() => setShowQuestionList(true)}
      />

      <QuestionListModal
        isOpen={showQuestionList}
        onClose={() => setShowQuestionList(false)}
        onNext={handleShowMatch}
      />

      <MatchModal
        isOpen={showMatchModal}
        onClose={() => setShowMatchModal(false)}
        onNext={() => setShowMatchModal(false)}
      />

      <InfoModal
        isOpen={showInfoModal}
        onClose={() => setShowInfoModal(false)}
        onNext={() => setShowInfoModal(false)}
      />

      <footer className="mt-8 text-center text-gray-500">
        <p>Creata da Marco Orlando</p>
        <div className="flex justify-center gap-4 mt-2">
          <a
            href="https://linkedin.com/in/marcoorlandoitaly/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-500 hover:text-primary-600"
          >
            LinkedIn
          </a>
          <a
            href="https://www.instagram.com/marco_orlando_fisio/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-500 hover:text-primary-600"
          >
            Instagram
          </a>
        </div>
      </footer>

      <div className="mt-8 text-center text-gray-800">
        <p>Inserisci il tuo numero di telefono:</p>
        <div className="flex items-center space-x-2">
          <span className="text-gray-800">+39</span>
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
    </main>
  );
} 