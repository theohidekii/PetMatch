# 🐕 TinderPet - App de Relacionamento para Pets

O TinderPet é um aplicativo de relacionamento inspirado no Tinder, mas focado em conectar cachorros e seus tutores para criar amizades e encontros divertidos.

## ✨ Funcionalidades

### 🔐 Autenticação
- Cadastro e login de usuários
- Autenticação via e-mail
- Recuperação de senha
- Login social (Google)

### 🐾 Perfil do Pet
- Nome, idade, raça e sexo
- Múltiplas fotos (até 6)
- Descrição personalizada
- Informações do tutor

### 📍 Geolocalização
- Busca de pets na região
- Filtro por distância
- Localização em tempo real

### 💕 Sistema de Swipe
- Interface similar ao Tinder
- Swipe para direita (curtir)
- Swipe para esquerda (rejeitar)
- Animações suaves e responsivas

### 💬 Chat e Matches
- Notificação de matches
- Chat em tempo real
- Lista de conversas
- Mensagens de texto

### 🔍 Filtros de Busca
- Por sexo do pet
- Por raça
- Por faixa etária
- Por distância

## 🚀 Tecnologias Utilizadas

### Frontend
- **Next.js 14** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Framework de estilização
- **Framer Motion** - Animações
- **React Hook Form** - Gerenciamento de formulários
- **Lucide React** - Ícones
- **React Hot Toast** - Notificações

### Backend (Planejado)
- **Node.js** - Runtime JavaScript
- **Express.js** - Framework web
- **PostgreSQL** - Banco de dados
- **Socket.io** - Comunicação em tempo real
- **JWT** - Autenticação
- **Multer** - Upload de arquivos

## 📱 Design System

### Cores
- **Primary**: Laranja quente (#ed7a1a)
- **Secondary**: Azul (#0ea5e9)
- **Success**: Verde (#10b981)
- **Error**: Vermelho (#ef4444)
- **Tinder Colors**: 
  - Verde (#6bcf7f)
  - Vermelho (#ff4458)
  - Amarelo (#ffd93d)

### Tipografia
- **Fonte**: Inter (Google Fonts)
- **Pesos**: 300, 400, 500, 600, 700

### Componentes
- Cards com bordas arredondadas
- Botões com hover effects
- Animações suaves
- Design responsivo

## 🛠️ Instalação e Configuração

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn
- Git

### 1. Clone o repositório
```bash
git clone https://github.com/seu-usuario/tinderpet.git
cd tinderpet
```

### 2. Instale as dependências do Frontend
```bash
cd frontend
npm install
```

### 3. Configure as variáveis de ambiente
Crie um arquivo `.env.local` na pasta `frontend`:
```env
NEXT_PUBLIC_API_URL=http://localhost:3001
NEXT_PUBLIC_GOOGLE_CLIENT_ID=seu-google-client-id
```

### 4. Execute o projeto
```bash
npm run dev
```

O projeto estará disponível em `http://localhost:3000`

## 📁 Estrutura do Projeto

```
TinderPet/
├── frontend/
│   ├── app/                    # App Router (Next.js 14)
│   │   ├── globals.css        # Estilos globais
│   │   ├── layout.tsx         # Layout principal
│   │   ├── page.tsx           # Página inicial
│   │   ├── login/             # Página de login
│   │   ├── register/          # Página de registro
│   │   ├── swipe/             # Página de swipe
│   │   └── chat/              # Página de chat
│   ├── components/            # Componentes reutilizáveis
│   │   └── SwipeCard.tsx      # Card de swipe
│   ├── types/                 # Tipos TypeScript
│   │   └── index.ts           # Definições de tipos
│   ├── package.json           # Dependências
│   ├── tailwind.config.js     # Configuração Tailwind
│   └── tsconfig.json          # Configuração TypeScript
├── backend/                   # Backend (a ser implementado)
└── README.md                  # Documentação
```

## 🎨 Páginas e Componentes

### Página Inicial (`/`)
- Landing page atrativa
- Seção de features
- Call-to-action para cadastro
- Design responsivo

### Login (`/login`)
- Formulário de autenticação
- Validação de campos
- Login social
- Recuperação de senha

### Registro (`/register`)
- Formulário em 3 etapas:
  1. Informações pessoais
  2. Informações do pet
  3. Upload de fotos
- Validação completa
- Preview de imagens

### Swipe (`/swipe`)
- Interface principal do app
- Cards com drag & drop
- Navegação de fotos
- Botões de ação
- Animações de swipe

### Chat (`/chat`)
- Lista de matches
- Interface de conversa
- Mensagens em tempo real
- Indicador de digitação

## 🔧 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev          # Inicia servidor de desenvolvimento

# Build
npm run build        # Gera build de produção
npm run start        # Inicia servidor de produção

# Linting
npm run lint         # Executa ESLint
```

## 📱 Responsividade

O aplicativo é totalmente responsivo e otimizado para:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## 🎯 Próximos Passos

### Backend
- [ ] API REST com Express.js
- [ ] Autenticação JWT
- [ ] Upload de imagens
- [ ] Geolocalização
- [ ] Sistema de matches
- [ ] Chat em tempo real

### Frontend
- [ ] Integração com API
- [ ] PWA (Progressive Web App)
- [ ] Push notifications
- [ ] Filtros avançados
- [ ] Perfil do usuário
- [ ] Configurações

### Funcionalidades Avançadas
- [ ] Video calls
- [ ] Stories de pets
- [ ] Eventos e encontros
- [ ] Sistema de reputação
- [ ] Verificação de perfis
- [ ] Moderação de conteúdo

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👥 Autores

- **Seu Nome** - *Desenvolvimento inicial* - [SeuGitHub](https://github.com/seu-usuario)

## 🙏 Agradecimentos

- Inspirado no design do Tinder
- Ícones por [Lucide](https://lucide.dev/)
- Imagens de exemplo do [Unsplash](https://unsplash.com/)

---

**TinderPet** - Conectando pets e criando amizades duradouras! 🐕❤️ 