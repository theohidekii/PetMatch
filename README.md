# 🐕 PupFind – Pet Matchmaking App

**PupFind** is a matchmaking app inspired by Tinder, focused on connecting dogs and their owners for socializing, responsible breeding, and fun meetups.

## ✨ Features

### 🔐 Authentication
- User sign-up and login
- Email authentication
- Password recovery
- Social login (Google)

### 🐾 Pet Profile
- Name, age, breed, and gender
- Multiple photos (up to 6)
- Custom description
- Owner information

### 📍 Geolocation
- Search pets in your area
- Distance filtering
- Real-time location

### 💕 Swipe System
- Tinder-style interface
- Swipe right (like)
- Swipe left (pass)
- Smooth and responsive animations

### 💬 Chat & Matches
- Match notifications
- Real-time chat
- Conversations list
- Text messaging

### 🔍 Search Filters
- By pet gender
- By breed
- By age range
- By distance

## 🚀 Technologies Used

### Frontend
- **Next.js 14** - React Framework with App Router
- **TypeScript** - Static typing
- **Tailwind CSS** - Styling framework
- **Framer Motion** - Animations
- **React Hook Form** - Form management
- **Lucide React** - Icons
- **React Hot Toast** - Notifications

### Backend (Planned)
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **PostgreSQL** - Database
- **Socket.io** - Real-time communication
- **JWT** - Authentication
- **Multer** - File upload

## 📱 Design System

### Colors
- **Primary**: Warm orange (#ed7a1a)
- **Secondary**: Blue (#0ea5e9)
- **Success**: Green (#10b981)
- **Error**: Red (#ef4444)
- **Tinder Colors**:
  - Green (#6bcf7f)
  - Red (#ff4458)
  - Yellow (#ffd93d)

### Typography
- **Font**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700

### Components
- Rounded cards
- Hover-effect buttons
- Smooth animations
- Fully responsive design

## 📁 Project Structure

```
PupFind/
├── frontend/
│ ├── app/ # App Router (Next.js 14)
│ │ ├── globals.css # Global styles
│ │ ├── layout.tsx # Main layout
│ │ ├── page.tsx # Landing page
│ │ ├── login/ # Login page
│ │ ├── register/ # Registration page
│ │ ├── swipe/ # Swipe interface
│ │ └── chat/ # Chat page
│ ├── components/ # Reusable components
│ │ └── SwipeCard.tsx # Swipe card component
│ ├── types/ # TypeScript types
│ │ └── index.ts # Type definitions
│ ├── package.json # Dependencies
│ ├── tailwind.config.js # Tailwind config
│ └── tsconfig.json # TypeScript config
├── backend/ # Backend (to be implemented)
└── README.md # Documentation
```


## 🎨 Pages and Components

### Home (`/`)
- Engaging landing page
- Features section
- Sign-up call to action
- Fully responsive

### Login (`/login`)
- Authentication form
- Field validation
- Social login support
- Password reset

### Register (`/register`)
- 3-step form:
  1. User info
  2. Pet info
  3. Photo upload
- Full validation
- Image preview

### Swipe (`/swipe`)
- Core app interface
- Draggable cards
- Photo navigation
- Action buttons
- Swipe animations

### Chat (`/chat`)
- Match list
- Messaging interface
- Real-time messaging
- Typing indicator

## 🔧 Available Scripts

```bash
# Development
npm run dev          # Start development server

# Build
npm run build        # Generate production build
npm run start        # Start production server

# Linting
npm run lint         # Run ESLint

```

## 📱 Responsiveness

The app is fully responsive and optimized for:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## 🎯 Próximos Passos

### Backend
- [ ] REST API with Express.js
- [ ] JWT authentication
- [ ] Image upload
- [ ] Geolocation support
- [ ] Matchmaking system
- [ ] Real-time chat

### Frontend
- [ ] API integration
- [ ] PWA (Progressive Web App)
- [ ] Push notifications
- [ ] Advanced filters
- [ ] User profile settings
- [ ] App settings

### Funcionalidades Avançadas
- [ ] Video calls
- [ ] Pet stories
- [ ] Events and meetups
- [ ] Reputation system
- [ ] Profile verification
- [ ] Content moderation

## 👥 Author

- Theo Hideki - [GitHub](https://github.com/theohidekii)

## 🙏 Acknowledgments

- Inspirado no design do Tinder
- Ícones por [Lucide](https://lucide.dev/)
- Imagens de exemplo do [Unsplash](https://unsplash.com/)

---

**PetMatch** - Conectando pets e criando amizades duradouras! 🐕❤️ 
