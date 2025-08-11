# We Make App - Product Hunt Clone

A modern, responsive web application that demonstrates advanced frontend development skills and real-world API integration. This project showcases a Product Hunt-style interface built with cutting-edge technologies and best practices.

## 🚀 Technical Skills Demonstrated

### **Frontend Development**
- **React 17** with modern hooks (useState, useEffect) for state management
- **Next.js 12** for server-side rendering and optimal performance
- **TypeScript** for type-safe development and better code quality
- **Functional Components** following modern React patterns

### **API Integration & Data Management**
- **GraphQL** integration with Product Hunt's official API
- **Apollo Client** for efficient data fetching and caching
- **Custom Apollo Link** for authentication middleware
- **Dynamic query building** with variables and parameters

### **UI/UX & Styling**
- **Tailwind CSS** for responsive, utility-first styling
- **Responsive Design** with mobile-first approach (grid layouts: 1→3→6 columns)
- **Modern UI Components** with hover effects and clean typography
- **Loading States** and error handling for better user experience

### **Architecture & Code Quality**
- **Component-based architecture** with proper separation of concerns
- **TypeScript interfaces** for robust data modeling
- **ESLint** configuration for code quality
- **Modular file structure** following Next.js conventions

## 🛠️ Tech Stack

- **Framework**: Next.js 12.0.10
- **Frontend**: React 17.0.2 + TypeScript 4.5.5
- **Styling**: Tailwind CSS 3.0.22
- **Data Layer**: Apollo Client 3.5.8 + GraphQL 16.3.0
- **Build Tools**: PostCSS, Autoprefixer
- **Code Quality**: ESLint, TypeScript strict mode

## ✨ Key Features

- **Real-time Data Fetching** from Product Hunt GraphQL API
- **Dynamic Topic Filtering** with dropdown selection
- **Responsive Grid Layout** that adapts to different screen sizes
- **Authentication Ready** with token-based API access
- **Type-safe Development** with comprehensive TypeScript interfaces
- **Modern React Patterns** using hooks and functional components

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Installation
```bash
# Clone the repository
git clone <your-repo-url>
cd weMakeAppTest

# Install dependencies
npm install --legacy-peer-deps

# Start development server
npm run dev
```

### Access the Application
- **Local Development**: http://localhost:3001
- **Production**: https://we-make-app-test.herokuapp.com/

## 🔑 API Authentication

To access the Product Hunt API:
1. Add your authentication token to localStorage
2. Reload the page
3. The app will automatically include the token in API requests

## 📱 Responsive Design

The application features a responsive grid layout:
- **Mobile**: 1 column
- **Tablet**: 3 columns  
- **Desktop**: 6 columns

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   └── posts/          # Posts display component
├── pages/              # Next.js pages and API routes
│   ├── api/            # GraphQL client configuration
│   └── index.tsx       # Main application page
├── styles/             # CSS modules and global styles
├── types/              # TypeScript type definitions
└── public/             # Static assets
```

## 🎯 What This Project Demonstrates

- **Modern Web Development**: Using the latest React and Next.js features
- **API Integration**: Real-world GraphQL API consumption with authentication
- **Type Safety**: Comprehensive TypeScript implementation
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Code Quality**: ESLint configuration and clean architecture
- **Performance**: Next.js optimizations and efficient data fetching
- **User Experience**: Loading states, error handling, and intuitive UI

## 🚀 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality

## 🔧 Development Notes

- Built with modern React patterns (hooks, functional components)
- Implements proper error handling and loading states
- Uses TypeScript for type safety and better developer experience
- Follows Next.js best practices for file structure and routing
- Implements responsive design principles with Tailwind CSS

---

**Built with ❤️ using modern web technologies to showcase full-stack development capabilities.**


