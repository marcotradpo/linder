import React from 'react';
import { motion, PanInfo } from 'framer-motion';
import { HeartIcon, XMarkIcon, InformationCircleIcon } from '@heroicons/react/24/outline';

interface Profile {
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
  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const threshold = 100;
    const velocity = info.velocity.x;

    if (Math.abs(info.offset.x) > threshold || Math.abs(velocity) > 500) {
      if (info.offset.x > 0 || velocity > 0) {
        onSwipeRight();
      } else {
        onSwipeLeft();
      }
    }
  };

  return (
    <motion.div
      className="absolute w-full h-full bg-white rounded-2xl shadow-xl overflow-hidden"
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      dragElastic={0.7}
      onDragEnd={handleDragEnd}
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.9, opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative w-full h-full">
        <img
          src={profile.image}
          alt={profile.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-2xl font-bold text-white">{profile.name}, {profile.age}</h2>
              <p className="text-white/80">{profile.job}</p>
              <p className="text-white/80">{profile.city}</p>
            </div>
            <button
              onClick={onSwipeUp}
              className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition-colors"
            >
              <InformationCircleIcon className="h-6 w-6 text-white" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
} 