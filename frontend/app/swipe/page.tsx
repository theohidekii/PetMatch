'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, X, Star, Settings, MessageCircle, User } from 'lucide-react';
import SwipeCard from '@/components/SwipeCard';
import { PetProfile } from '@/types';
import toast from 'react-hot-toast';

// Mock data para demonstração
const mockPets: PetProfile[] = [
  {
    id: '1',
    name: 'Thor',
    age: 3,
    breed: 'Golden Retriever',
    gender: 'male',
    photos: [
      'https://images.unsplash.com/photo-1552053831-71594a27632d?w=400&h=600&fit=crop',
      'https://images.unsplash.com/photo-1552053831-71594a27632d?w=400&h=600&fit=crop',
    ],
    description: 'Adoro brincar no parque e fazer novos amigos! Sou muito carinhoso e adoro crianças.',
    ownerId: '1',
    owner: {
      id: '1',
      name: 'João Silva',
      email: 'joao@email.com',
      city: 'São Paulo',
      neighborhood: 'Vila Madalena',
      location: { latitude: -23.5505, longitude: -46.6333 },
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    createdAt: new Date(),
    updatedAt: new Date(),
    distance: 2.5,
  },
  {
    id: '2',
    name: 'Luna',
    age: 2,
    breed: 'Border Collie',
    gender: 'female',
    photos: [
      'https://images.unsplash.com/photo-1507146426996-ef05306b995a?w=400&h=600&fit=crop',
    ],
    description: 'Sou muito inteligente e adoro aprender novos truques. Gosto de correr e brincar com bolinhas.',
    ownerId: '2',
    owner: {
      id: '2',
      name: 'Maria Santos',
      email: 'maria@email.com',
      city: 'São Paulo',
      neighborhood: 'Pinheiros',
      location: { latitude: -23.5505, longitude: -46.6333 },
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    createdAt: new Date(),
    updatedAt: new Date(),
    distance: 1.8,
  },
  {
    id: '3',
    name: 'Max',
    age: 4,
    breed: 'Labrador',
    gender: 'male',
    photos: [
      'https://images.unsplash.com/photo-1546527868-ccb7ee7dfa6a?w=400&h=600&fit=crop',
    ],
    description: 'Sou muito brincalhão e adoro nadar! Tenho muita energia e sempre estou pronto para uma aventura.',
    ownerId: '3',
    owner: {
      id: '3',
      name: 'Pedro Costa',
      email: 'pedro@email.com',
      city: 'São Paulo',
      neighborhood: 'Itaim Bibi',
      location: { latitude: -23.5505, longitude: -46.6333 },
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    createdAt: new Date(),
    updatedAt: new Date(),
    distance: 3.2,
  },
];

export default function SwipePage() {
  const [pets, setPets] = useState<PetProfile[]>(mockPets);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const handleSwipe = async (direction: 'left' | 'right') => {
    if (isLoading) return;
    
    setIsLoading(true);
    
    try {
      // Simular delay da API
      await new Promise(resolve => setTimeout(resolve, 300));
      
      if (direction === 'right') {
        // Simular match (30% de chance)
        if (Math.random() < 0.3) {
          toast.success('🎉 É um match! Thor também curtiu você!');
        }
      }
      
      setCurrentIndex(prev => prev + 1);
    } catch (error) {
      toast.error('Erro ao processar swipe');
    } finally {
      setIsLoading(false);
    }
  };

  const handleLike = () => handleSwipe('right');
  const handleDislike = () => handleSwipe('left');

  const resetCards = () => {
    setCurrentIndex(0);
    setPets([...mockPets]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-md mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <User className="w-6 h-6 text-primary-500" />
              <span className="text-lg font-semibold text-gray-900">TinderPet</span>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
                <Settings className="w-5 h-5" />
              </button>
              <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
                <MessageCircle className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-md mx-auto px-4 py-6">
        {/* Cards Container */}
        <div className="relative h-[70vh] mb-6">
          {pets.length === 0 || currentIndex >= pets.length ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute inset-0 flex flex-col items-center justify-center text-center"
            >
              <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mb-4">
                <span className="text-4xl">🐕</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Não há mais pets por perto
              </h2>
              <p className="text-gray-600 mb-6">
                Tente aumentar o raio de busca ou volte mais tarde
              </p>
              <button
                onClick={resetCards}
                className="btn-primary"
              >
                Recarregar
              </button>
            </motion.div>
          ) : (
            <AnimatePresence>
              {pets.slice(currentIndex, currentIndex + 2).map((pet, index) => (
                <motion.div
                  key={pet.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{
                    opacity: 0,
                    x: index === 0 ? (Math.random() > 0.5 ? 300 : -300) : 0,
                    rotate: index === 0 ? (Math.random() > 0.5 ? 20 : -20) : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0"
                >
                  <SwipeCard
                    pet={pet}
                    onSwipe={handleSwipe}
                    isTop={index === 0}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-center space-x-6">
          <button
            onClick={handleDislike}
            disabled={isLoading || currentIndex >= pets.length}
            className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow disabled:opacity-50"
          >
            <X className="w-8 h-8 text-tinder-red" />
          </button>

          <button
            onClick={() => {/* TODO: Implementar super like */}}
            disabled={isLoading || currentIndex >= pets.length}
            className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow disabled:opacity-50"
          >
            <Star className="w-8 h-8 text-tinder-yellow" />
          </button>

          <button
            onClick={handleLike}
            disabled={isLoading || currentIndex >= pets.length}
            className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow disabled:opacity-50"
          >
            <Heart className="w-8 h-8 text-tinder-green" />
          </button>
        </div>

        {/* Loading Indicator */}
        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-4 text-center"
          >
            <div className="inline-block w-6 h-6 border-2 border-primary-500 border-t-transparent rounded-full animate-spin"></div>
          </motion.div>
        )}
      </main>
    </div>
  );
} 