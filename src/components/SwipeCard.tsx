'use client';

import React from 'react';
import { useState } from 'react';
import { motion, PanInfo } from 'framer-motion';
import { HeartIcon, XMarkIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/outline';

interface Profile {
  id: number;
  name: string;
  age: number;
  job: string;
  city: string;
  origin: string;
  image: string;
}

interface SwipeCardProps {
  profile: Profile;
  onSwipeLeft: () => void;
  onSwipeRight: () => void;
  onSwipeUp: () => void;
}

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
      className="relative bg-white rounded-2xl shadow-xl overflow-hidden"
      style={{ touchAction: 'none' }}
    >
      <div className="aspect-[3/4] relative">
        <img
          src={profile.image}
          alt={profile.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
          <h2 className="text-2xl font-bold text-white">{profile.name}, {profile.age}</h2>
          <p className="text-white/90">{profile.job}</p>
          <p className="text-white/80">{profile.city}, {profile.origin}</p>
        </div>
      </div>

      {!isDragging && (
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-4">
          <button
            onClick={onSwipeLeft}
            className="p-3 rounded-full bg-red-500 text-white hover:bg-red-600 transition-colors"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
          <button
            onClick={onSwipeUp}
            className="p-3 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors"
          >
            <QuestionMarkCircleIcon className="h-6 w-6" />
          </button>
          <button
            onClick={onSwipeRight}
            className="p-3 rounded-full bg-green-500 text-white hover:bg-green-600 transition-colors"
          >
            <HeartIcon className="h-6 w-6" />
          </button>
        </div>
      )}
    </motion.div>
  );
} 