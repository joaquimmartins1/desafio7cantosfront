// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App imovel={undefined} estaFavoritado={false} toggleFavorito={function (id: number): void {
      throw new Error('Function not implemented.');
    } } />
  </React.StrictMode>
);
