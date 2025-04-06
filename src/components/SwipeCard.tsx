'use client';

import { useState } from 'react';
import { motion, PanInfo } from 'framer-motion';
import { HeartIcon, XMarkIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/outline';
import { SwipeCardProps } from '@/types';

export default function SwipeCard({ profile, onSwipeLeft, onSwipeRight, onSwipeUp }: SwipeCardProps) {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const { offset, velocity } = info;
    const swipe = Math.abs(offset.x) > 100 || Math.abs(velocity.x) > 500;
    
    if (swipe) {
      if (offset.x > 0) {
        onSwipeRight();
      } else {
        onSwipeLeft();
      }
    }
  };

  return (
    <motion.div
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      onDragStart={() => setIsDragging(true)}
      onDragEnd={handleDragEnd}
      className="relative bg-white rounded-2xl shadow-xl overflow-hidden w-full max-w-[380px] sm:max-w-[480px] mx-auto"
      style={{ touchAction: 'none' }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="aspect-[3/4] relative p-2 sm:p-4 pt-4 sm:pt-8 flex items-start justify-center">
        <div className="w-full max-w-[280px] sm:max-w-[400px] aspect-square relative">
          <motion.img
            src={profile.image}
            alt="Profile"
            className="w-full h-full object-cover rounded-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>

      {!isDragging && (
        <div className="absolute bottom-4 sm:bottom-8 left-0 right-0 flex justify-center gap-4 sm:gap-8 px-4 sm:px-8">
          <motion.button
            onClick={onSwipeLeft}
            className="p-3 sm:p-4 rounded-full bg-red-500 text-white hover:bg-red-600 transition-colors shadow-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <XMarkIcon className="h-8 w-8 sm:h-9 sm:w-9" />
          </motion.button>
          <motion.button
            onClick={onSwipeUp}
            className="px-4 sm:px-6 py-2 sm:py-3 rounded-xl bg-primary-500 text-white hover:bg-primary-600 transition-colors shadow-lg flex flex-col items-center justify-center text-sm sm:text-base font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>DOMANDE</span>
            <span>DISPONIBILI</span>
          </motion.button>
          <motion.button
            onClick={onSwipeRight}
            className="p-3 sm:p-4 rounded-full bg-green-500 text-white hover:bg-green-600 transition-colors shadow-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <HeartIcon className="h-8 w-8 sm:h-9 sm:w-9" />
          </motion.button>
        </div>
      )}
    </motion.div>
  );
} 