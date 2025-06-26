'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, MapPin, Users, Star, ArrowRight, PawPrint } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  const [currentImage, setCurrentImage] = useState(0);
  
  const features = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Encontre Amigos",
      description: "Conecte seu pet com outros cachorros da região"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Geolocalização",
      description: "Encontre pets próximos à sua localização"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Chat Seguro",
      description: "Converse com outros tutores após o match"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Perfis Verificados",
      description: "Todos os perfis são verificados e seguros"
    }
  ];

  const demoImages = [
    '/demo1.jpg',
    '/demo2.jpg', 
    '/demo3.jpg'
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <PawPrint className="w-8 h-8 text-primary-500" />
              <span className="text-2xl font-bold text-gray-900">TinderPet</span>
            </div>
            <div className="flex space-x-4">
              <Link href="/login" className="btn-secondary">
                Entrar
              </Link>
              <Link href="/register" className="btn-primary">
                Cadastrar
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Encontre amigos para seu{' '}
                <span className="text-primary-500">pet</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                O TinderPet conecta cachorros da sua região para encontros divertidos e amizades duradouras. 
                Seu pet merece ter amigos especiais!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/register" className="btn-primary text-lg px-8 py-4">
                  Começar Agora
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link href="#como-funciona" className="btn-secondary text-lg px-8 py-4">
                  Como Funciona
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-full h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-secondary-400 opacity-20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <PawPrint className="w-24 h-24 mx-auto mb-4 opacity-80" />
                    <p className="text-xl font-semibold">Demo do App</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="como-funciona" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Como Funciona
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              É simples e divertido! Seu pet pode encontrar amigos em apenas alguns passos
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 text-primary-600">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-500 to-secondary-500">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Pronto para encontrar amigos para seu pet?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Junte-se a milhares de tutores que já encontraram amigos especiais para seus pets
          </p>
          <Link href="/register" className="bg-white text-primary-600 font-semibold py-4 px-8 rounded-full text-lg hover:bg-gray-100 transition-colors duration-200 inline-flex items-center">
            Criar Conta Grátis
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <PawPrint className="w-6 h-6 text-primary-400" />
                <span className="text-xl font-bold">TinderPet</span>
              </div>
              <p className="text-gray-400">
                Conectando pets e criando amizades duradouras.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Produto</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Como Funciona</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Recursos</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Preços</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Suporte</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Central de Ajuda</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Privacidade</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Termos</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookies</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 TinderPet. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 