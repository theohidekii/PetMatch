'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, EyeOff, Mail, Lock, User, MapPin, Phone, PawPrint, ArrowLeft, Upload, X } from 'lucide-react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

interface RegisterForm {
  name: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  city: string;
  neighborhood: string;
  petName: string;
  petAge: number;
  petBreed: string;
  petGender: 'male' | 'female';
  petDescription: string;
}

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [petPhotos, setPetPhotos] = useState<string[]>([]);
  
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegisterForm>();

  const password = watch('password');

  const onSubmit = async (data: RegisterForm) => {
    setIsLoading(true);
    try {
      console.log('Register data:', data);
      console.log('Pet photos:', petPhotos);
      toast.success('Conta criada com sucesso!');
    } catch (error) {
      toast.error('Erro ao criar conta. Tente novamente.');
    } finally {
      setIsLoading(false);
    }
  };

  const handlePhotoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const newPhotos = Array.from(files).map(file => URL.createObjectURL(file));
      setPetPhotos(prev => [...prev, ...newPhotos].slice(0, 6));
    }
  };

  const removePhoto = (index: number) => {
    setPetPhotos(prev => prev.filter((_, i) => i !== index));
  };

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, 3));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar ao início
          </Link>
          <div className="flex items-center justify-center space-x-2 mb-4">
            <PawPrint className="w-8 h-8 text-primary-500" />
            <span className="text-2xl font-bold text-gray-900">TinderPet</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Criar Conta</h1>
          <p className="text-gray-600">Cadastre-se e encontre amigos para seu pet</p>
        </div>

        <div className="mb-8">
          <div className="flex items-center justify-center space-x-4">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  step <= currentStep 
                    ? 'bg-primary-500 text-white' 
                    : 'bg-gray-200 text-gray-600'
                }`}>
                  {step}
                </div>
                {step < 3 && (
                  <div className={`w-12 h-1 mx-2 ${
                    step < currentStep ? 'bg-primary-500' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-2 text-sm text-gray-600">
            {currentStep === 1 && 'Informações Pessoais'}
            {currentStep === 2 && 'Informações do Pet'}
            {currentStep === 3 && 'Fotos do Pet'}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="card p-8"
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {currentStep === 1 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-6"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nome Completo
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        {...register('name', { required: 'Nome é obrigatório' })}
                        type="text"
                        id="name"
                        className="input-field pl-10"
                        placeholder="Seu nome completo"
                      />
                    </div>
                    {errors.name && (
                      <p className="mt-1 text-sm text-error">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Telefone
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        {...register('phone', { required: 'Telefone é obrigatório' })}
                        type="tel"
                        id="phone"
                        className="input-field pl-10"
                        placeholder="(11) 99999-9999"
                      />
                    </div>
                    {errors.phone && (
                      <p className="mt-1 text-sm text-error">{errors.phone.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    E-mail
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      {...register('email', {
                        required: 'E-mail é obrigatório',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'E-mail inválido',
                        },
                      })}
                      type="email"
                      id="email"
                      className="input-field pl-10"
                      placeholder="seu@email.com"
                    />
                  </div>
                  {errors.email && (
                    <p className="mt-1 text-sm text-error">{errors.email.message}</p>
                  )}
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
                      Cidade
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        {...register('city', { required: 'Cidade é obrigatória' })}
                        type="text"
                        id="city"
                        className="input-field pl-10"
                        placeholder="Sua cidade"
                      />
                    </div>
                    {errors.city && (
                      <p className="mt-1 text-sm text-error">{errors.city.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="neighborhood" className="block text-sm font-medium text-gray-700 mb-2">
                      Bairro
                    </label>
                    <input
                      {...register('neighborhood', { required: 'Bairro é obrigatório' })}
                      type="text"
                      id="neighborhood"
                      className="input-field"
                      placeholder="Seu bairro"
                    />
                    {errors.neighborhood && (
                      <p className="mt-1 text-sm text-error">{errors.neighborhood.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                      Senha
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        {...register('password', {
                          required: 'Senha é obrigatória',
                          minLength: {
                            value: 6,
                            message: 'Senha deve ter pelo menos 6 caracteres',
                          },
                        })}
                        type={showPassword ? 'text' : 'password'}
                        id="password"
                        className="input-field pl-10 pr-10"
                        placeholder="Sua senha"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                    {errors.password && (
                      <p className="mt-1 text-sm text-error">{errors.password.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                      Confirmar Senha
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        {...register('confirmPassword', {
                          required: 'Confirmação de senha é obrigatória',
                          validate: value => value === password || 'Senhas não coincidem',
                        })}
                        type={showConfirmPassword ? 'text' : 'password'}
                        id="confirmPassword"
                        className="input-field pl-10 pr-10"
                        placeholder="Confirme sua senha"
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                    {errors.confirmPassword && (
                      <p className="mt-1 text-sm text-error">{errors.confirmPassword.message}</p>
                    )}
                  </div>
                </div>

                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={nextStep}
                    className="btn-primary"
                  >
                    Próximo
                  </button>
                </div>
              </motion.div>
            )}

            {currentStep === 2 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-6"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="petName" className="block text-sm font-medium text-gray-700 mb-2">
                      Nome do Pet
                    </label>
                    <input
                      {...register('petName', { required: 'Nome do pet é obrigatório' })}
                      type="text"
                      id="petName"
                      className="input-field"
                      placeholder="Nome do seu pet"
                    />
                    {errors.petName && (
                      <p className="mt-1 text-sm text-error">{errors.petName.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="petAge" className="block text-sm font-medium text-gray-700 mb-2">
                      Idade (anos)
                    </label>
                    <input
                      {...register('petAge', {
                        required: 'Idade é obrigatória',
                        min: { value: 0, message: 'Idade deve ser maior que 0' },
                        max: { value: 20, message: 'Idade deve ser menor que 20' },
                      })}
                      type="number"
                      id="petAge"
                      className="input-field"
                      placeholder="Idade do pet"
                    />
                    {errors.petAge && (
                      <p className="mt-1 text-sm text-error">{errors.petAge.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="petBreed" className="block text-sm font-medium text-gray-700 mb-2">
                      Raça
                    </label>
                    <input
                      {...register('petBreed', { required: 'Raça é obrigatória' })}
                      type="text"
                      id="petBreed"
                      className="input-field"
                      placeholder="Raça do pet"
                    />
                    {errors.petBreed && (
                      <p className="mt-1 text-sm text-error">{errors.petBreed.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="petGender" className="block text-sm font-medium text-gray-700 mb-2">
                      Sexo
                    </label>
                    <select
                      {...register('petGender', { required: 'Sexo é obrigatório' })}
                      id="petGender"
                      className="input-field"
                    >
                      <option value="">Selecione o sexo</option>
                      <option value="male">Macho</option>
                      <option value="female">Fêmea</option>
                    </select>
                    {errors.petGender && (
                      <p className="mt-1 text-sm text-error">{errors.petGender.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="petDescription" className="block text-sm font-medium text-gray-700 mb-2">
                    Descrição do Pet
                  </label>
                  <textarea
                    {...register('petDescription', { required: 'Descrição é obrigatória' })}
                    id="petDescription"
                    rows={4}
                    className="input-field resize-none"
                    placeholder="Conte um pouco sobre seu pet (personalidade, hobbies, etc.)"
                  />
                  {errors.petDescription && (
                    <p className="mt-1 text-sm text-error">{errors.petDescription.message}</p>
                  )}
                </div>

                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="btn-secondary"
                  >
                    Voltar
                  </button>
                  <button
                    type="button"
                    onClick={nextStep}
                    className="btn-primary"
                  >
                    Próximo
                  </button>
                </div>
              </motion.div>
            )}

            {currentStep === 3 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-6"
              >
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Fotos do Pet (máximo 6)
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                    {petPhotos.map((photo, index) => (
                      <div key={index} className="relative">
                        <img
                          src={photo}
                          alt={`Foto ${index + 1}`}
                          className="w-full h-32 object-cover rounded-lg"
                        />
                        <button
                          type="button"
                          onClick={() => removePhoto(index)}
                          className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                    {petPhotos.length < 6 && (
                      <label className="border-2 border-dashed border-gray-300 rounded-lg p-4 flex flex-col items-center justify-center cursor-pointer hover:border-primary-500 transition-colors">
                        <Upload className="w-8 h-8 text-gray-400 mb-2" />
                        <span className="text-sm text-gray-600">Adicionar foto</span>
                        <input
                          type="file"
                          accept="image/*"
                          multiple
                          onChange={handlePhotoUpload}
                          className="hidden"
                        />
                      </label>
                    )}
                  </div>
                  <p className="text-sm text-gray-600">
                    Adicione pelo menos 1 foto do seu pet para continuar
                  </p>
                </div>

                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="btn-secondary"
                  >
                    Voltar
                  </button>
                  <button
                    type="submit"
                    disabled={isLoading || petPhotos.length === 0}
                    className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? 'Criando conta...' : 'Criar Conta'}
                  </button>
                </div>
              </motion.div>
            )}
          </form>

          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Já tem uma conta?{' '}
              <Link href="/login" className="text-primary-600 hover:text-primary-700 font-medium">
                Faça login
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 