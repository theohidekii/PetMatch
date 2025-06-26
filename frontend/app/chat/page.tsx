'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Send, ArrowLeft, MoreVertical, Phone, Video } from 'lucide-react';
import Link from 'next/link';
import { Match, Message } from '@/types';

// Mock data
const mockMatches: Match[] = [
  {
    id: '1',
    pet1Id: '1',
    pet2Id: '2',
    pet1: {
      id: '1',
      name: 'Thor',
      age: 3,
      breed: 'Golden Retriever',
      gender: 'male',
      photos: ['https://images.unsplash.com/photo-1552053831-71594a27632d?w=100&h=100&fit=crop'],
      description: 'Adoro brincar no parque!',
      ownerId: '1',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    pet2: {
      id: '2',
      name: 'Luna',
      age: 2,
      breed: 'Border Collie',
      gender: 'female',
      photos: ['https://images.unsplash.com/photo-1507146426996-ef05306b995a?w=100&h=100&fit=crop'],
      description: 'Sou muito inteligente!',
      ownerId: '2',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    createdAt: new Date(),
  },
];

const mockMessages: Message[] = [
  {
    id: '1',
    matchId: '1',
    senderId: '2',
    content: 'Oi! Vi que você curtiu o Thor! Ele é muito fofo 😊',
    createdAt: new Date(Date.now() - 3600000),
  },
  {
    id: '2',
    matchId: '1',
    senderId: '1',
    content: 'Oi! Sim, ele é lindo! A Luna também é muito bonita!',
    createdAt: new Date(Date.now() - 1800000),
  },
  {
    id: '3',
    matchId: '1',
    senderId: '2',
    content: 'Que tal marcarmos um encontro no parque?',
    createdAt: new Date(Date.now() - 900000),
  },
];

export default function ChatPage() {
  const [selectedMatch, setSelectedMatch] = useState<Match | null>(null);
  const [messages, setMessages] = useState<Message[]>(mockMessages);
  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (!newMessage.trim() || !selectedMatch) return;

    const message: Message = {
      id: Date.now().toString(),
      matchId: selectedMatch.id,
      senderId: '1', // Current user
      content: newMessage.trim(),
      createdAt: new Date(),
    };

    setMessages(prev => [...prev, message]);
    setNewMessage('');
    setIsTyping(true);

    // Simular resposta
    setTimeout(() => {
      const reply: Message = {
        id: (Date.now() + 1).toString(),
        matchId: selectedMatch.id,
        senderId: '2',
        content: 'Que legal! Vou responder em breve 😊',
        createdAt: new Date(),
      };
      setMessages(prev => [...prev, reply]);
      setIsTyping(false);
    }, 2000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('pt-BR', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-md mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/swipe" className="flex items-center space-x-2 text-gray-600 hover:text-gray-900">
              <ArrowLeft className="w-5 h-5" />
              <span>Voltar</span>
            </Link>
            <h1 className="text-lg font-semibold text-gray-900">Chat</h1>
            <button className="p-2 text-gray-600 hover:text-gray-900">
              <MoreVertical className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-md mx-auto">
        {!selectedMatch ? (
          /* Matches List */
          <div className="p-4">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Seus Matches</h2>
            {mockMatches.length === 0 ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💬</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Nenhum match ainda
                </h3>
                <p className="text-gray-600">
                  Continue fazendo swipe para encontrar amigos para seu pet!
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {mockMatches.map((match) => (
                  <motion.div
                    key={match.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedMatch(match)}
                    className="bg-white rounded-xl p-4 shadow-sm cursor-pointer hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="relative">
                        <img
                          src={match.pet2.photos[0]}
                          alt={match.pet2.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-tinder-green rounded-full border-2 border-white"></div>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">
                          {match.pet2.name} & {match.pet1.name}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {match.pet2.breed} • {match.pet2.age} anos
                        </p>
                        <p className="text-xs text-gray-500">
                          Match em {match.createdAt.toLocaleDateString('pt-BR')}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        ) : (
          /* Chat Interface */
          <div className="flex flex-col h-[calc(100vh-80px)]">
            {/* Chat Header */}
            <div className="bg-white border-b px-4 py-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <img
                    src={selectedMatch.pet2.photos[0]}
                    alt={selectedMatch.pet2.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {selectedMatch.pet2.name} & {selectedMatch.pet1.name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {isTyping ? 'Digitando...' : 'Online'}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="p-2 text-gray-600 hover:text-gray-900">
                    <Phone className="w-4 h-4" />
                  </button>
                  <button className="p-2 text-gray-600 hover:text-gray-900">
                    <Video className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.senderId === '1' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs px-4 py-2 rounded-2xl ${
                      message.senderId === '1'
                        ? 'bg-primary-500 text-white'
                        : 'bg-white text-gray-900 shadow-sm'
                    }`}
                  >
                    <p className="text-sm">{message.content}</p>
                    <p className={`text-xs mt-1 ${
                      message.senderId === '1' ? 'text-primary-100' : 'text-gray-500'
                    }`}>
                      {formatTime(message.createdAt)}
                    </p>
                  </div>
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Message Input */}
            <div className="bg-white border-t px-4 py-3">
              <div className="flex items-center space-x-3">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Digite sua mensagem..."
                  className="flex-1 px-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:border-primary-500"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!newMessage.trim()}
                  className="w-10 h-10 bg-primary-500 text-white rounded-full flex items-center justify-center hover:bg-primary-600 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 