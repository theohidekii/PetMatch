'use client';

import { useState } from 'react';
import { motion, PanInfo } from 'framer-motion';
import { Heart, X, MapPin, Calendar, Users } from 'lucide-react';
import { PetProfile } from '@/types';

interface SwipeCardProps {
  pet: PetProfile;
  onSwipe: (direction: 'left' | 'right') => void;
  isTop: boolean;
}

export default function SwipeCard({ pet, onSwipe, isTop }: SwipeCardProps) {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const handleDragEnd = (event: any, info: PanInfo) => {
    setIsDragging(false);
    const threshold = 100;
    
    if (info.offset.x > threshold) {
      onSwipe('right');
    } else if (info.offset.x < -threshold) {
      onSwipe('left');
    }
  };

  const nextPhoto = () => {
    if (currentPhotoIndex < pet.photos.length - 1) {
      setCurrentPhotoIndex(currentPhotoIndex + 1);
    }
  };

  const prevPhoto = () => {
    if (currentPhotoIndex > 0) {
      setCurrentPhotoIndex(currentPhotoIndex - 1);
    }
  };

  return (
    <motion.div
      drag={isTop ? 'x' : false}
      dragConstraints={{ left: 0, right: 0 }}
      onDragStart={() => setIsDragging(true)}
      onDragEnd={handleDragEnd}
      animate={{
        scale: isDragging ? 1.05 : 1,
        rotate: isDragging ? 5 : 0,
      }}
      transition={{ duration: 0.2 }}
      className={`swipe-card ${isTop ? 'cursor-grab active:cursor-grabbing' : 'cursor-default'}`}
    >
      {/* Photo */}
      <div className="relative w-full h-full">
        <img
          src={pet.photos[currentPhotoIndex]}
          alt={`${pet.name} - Foto ${currentPhotoIndex + 1}`}
          className="w-full h-full object-cover"
        />
        
        {/* Photo Navigation */}
        {pet.photos.length > 1 && (
          <div className="absolute top-4 left-4 right-4 flex justify-center space-x-2">
            {pet.photos.map((_, index) => (
              <div
                key={index}
                className={`h-1 rounded-full transition-all duration-300 ${
                  index === currentPhotoIndex ? 'bg-white w-8' : 'bg-white/50 w-4'
                }`}
              />
            ))}
          </div>
        )}

        {/* Photo Navigation Arrows */}
        {pet.photos.length > 1 && (
          <>
            <button
              onClick={prevPhoto}
              disabled={currentPhotoIndex === 0}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors disabled:opacity-50"
            >
              ←
            </button>
            <button
              onClick={nextPhoto}
              disabled={currentPhotoIndex === pet.photos.length - 1}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors disabled:opacity-50"
            >
              →
            </button>
          </>
        )}

        {/* Gradient Overlay */}
        <div className="absolute inset-0 gradient-overlay" />

        {/* Pet Info */}
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-3xl font-bold">{pet.name}</h2>
            <span className="text-xl font-semibold">{pet.age} anos</span>
          </div>
          
          <div className="flex items-center space-x-4 mb-3 text-sm">
            <div className="flex items-center space-x-1">
              <MapPin className="w-4 h-4" />
              <span>{pet.owner.city}</span>
            </div>
            {pet.distance && (
              <span>{pet.distance.toFixed(1)} km</span>
            )}
          </div>

          <div className="flex items-center space-x-4 mb-4 text-sm">
            <span className="bg-white/20 px-3 py-1 rounded-full">
              {pet.breed}
            </span>
            <span className="bg-white/20 px-3 py-1 rounded-full">
              {pet.gender === 'male' ? 'Macho' : 'Fêmea'}
            </span>
          </div>

          <p className="text-white/90 leading-relaxed">
            {pet.description}
          </p>
        </div>

        {/* Swipe Indicators */}
        {isTop && (
          <>
            {/* Like Indicator */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: isDragging ? 1 : 0, scale: isDragging ? 1 : 0.8 }}
              className="absolute top-1/2 left-8 transform -translate-y-1/2 -rotate-12"
            >
              <div className="bg-tinder-green text-white px-6 py-3 rounded-lg border-4 border-white font-bold text-xl shadow-lg">
                CURTI
              </div>
            </motion.div>

            {/* Dislike Indicator */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: isDragging ? 1 : 0, scale: isDragging ? 1 : 0.8 }}
              className="absolute top-1/2 right-8 transform -translate-y-1/2 rotate-12"
            >
              <div className="bg-tinder-red text-white px-6 py-3 rounded-lg border-4 border-white font-bold text-xl shadow-lg">
                NOPE
              </div>
            </motion.div>
          </>
        )}
      </div>
    </motion.div>
  );
} 