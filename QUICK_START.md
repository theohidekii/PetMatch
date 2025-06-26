# 🚀 Guia de Início Rápido - TinderPet

Este guia te ajudará a configurar e executar o TinderPet em poucos minutos!

## 📋 Pré-requisitos

- Node.js 18+ instalado
- npm ou yarn
- Git

## ⚡ Instalação Rápida

### 1. Clone e navegue para o projeto
```bash
git clone https://github.com/seu-usuario/tinderpet.git
cd tinderpet
```

### 2. Instale as dependências do Frontend
```bash
cd frontend
npm install
```

### 3. Execute o projeto
```bash
npm run dev
```

### 4. Acesse o aplicativo
Abra seu navegador e acesse: `http://localhost:3000`

## 🎯 Funcionalidades Disponíveis

### ✅ Implementadas (Frontend)
- **Landing Page** - Página inicial atrativa
- **Login/Registro** - Formulários completos com validação
- **Swipe Interface** - Cards interativos com drag & drop
- **Chat** - Interface de conversa com matches
- **Design Responsivo** - Funciona em mobile, tablet e desktop

### 🔄 Em Desenvolvimento (Backend)
- API REST completa
- Autenticação JWT
- Upload de imagens
- Sistema de matches
- Chat em tempo real

## 🎨 Páginas para Testar

1. **Página Inicial** (`/`) - Landing page com call-to-action
2. **Login** (`/login`) - Formulário de autenticação
3. **Registro** (`/register`) - Cadastro em 3 etapas
4. **Swipe** (`/swipe`) - Interface principal do app
5. **Chat** (`/chat`) - Sistema de conversas

## 📱 Dados de Teste

O aplicativo vem com dados mockados para demonstração:

### Pets Disponíveis
- **Thor** (Golden Retriever, 3 anos)
- **Luna** (Border Collie, 2 anos)  
- **Max** (Labrador, 4 anos)

### Funcionalidades de Teste
- Swipe para direita/esquerda
- Navegação entre fotos
- Simulação de matches
- Chat com respostas automáticas

## 🛠️ Scripts Úteis

```bash
# Desenvolvimento
npm run dev          # Inicia servidor de desenvolvimento

# Build
npm run build        # Gera build de produção
npm run start        # Inicia servidor de produção

# Linting
npm run lint         # Executa ESLint
```

## 🔧 Configuração Avançada

### Variáveis de Ambiente (Opcional)
Crie um arquivo `.env.local` na pasta `frontend`:
```env
NEXT_PUBLIC_API_URL=http://localhost:3001
NEXT_PUBLIC_GOOGLE_CLIENT_ID=seu-google-client-id
```

### Personalização
- Cores: Edite `tailwind.config.js`
- Tipografia: Modifique `globals.css`
- Componentes: Personalize em `components/`

## 🐛 Solução de Problemas

### Erro de dependências
```bash
rm -rf node_modules package-lock.json
npm install
```

### Erro de portas
Se a porta 3000 estiver ocupada:
```bash
npm run dev -- -p 3001
```

### Erro de TypeScript
```bash
npm run build
```

## 📞 Suporte

- **Issues**: Abra uma issue no GitHub
- **Documentação**: Consulte o `README.md` completo
- **Comunidade**: Entre em contato com a equipe

## 🎉 Próximos Passos

1. Teste todas as funcionalidades
2. Personalize o design
3. Implemente o backend
4. Deploy em produção

---

**Divirta-se testando o TinderPet!** 🐕❤️ 