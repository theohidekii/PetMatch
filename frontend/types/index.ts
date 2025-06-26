export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  city: string;
  neighborhood: string;
  location: {
    latitude: number;
    longitude: number;
  };
  createdAt: Date;
  updatedAt: Date;
}

export interface Pet {
  id: string;
  name: string;
  age: number;
  breed: string;
  gender: 'male' | 'female';
  photos: string[];
  description: string;
  ownerId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface PetProfile extends Pet {
  owner: User;
  distance?: number;
}

export interface Match {
  id: string;
  pet1Id: string;
  pet2Id: string;
  pet1: Pet;
  pet2: Pet;
  createdAt: Date;
}

export interface Message {
  id: string;
  matchId: string;
  senderId: string;
  content: string;
  createdAt: Date;
}

export interface Chat {
  id: string;
  match: Match;
  messages: Message[];
  lastMessage?: Message;
}

export interface FilterOptions {
  gender?: 'male' | 'female';
  breed?: string;
  ageRange?: {
    min: number;
    max: number;
  };
  distance?: number;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

export interface SwipeAction {
  type: 'like' | 'dislike';
  petId: string;
} 