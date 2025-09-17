// src/main.tsx ou src/App.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Card from './components/Card';
import type { Imovel } from './interfaces/Imovel';

const imovelExemplo: Imovel = {
  id: 1,
  imagem: 'assets/imagem1.png',
  valor: 'R$ 2.260,00',
  titulo: 'Apartamento, Papicu, 2 Quartos',
  endereco: 'Fortaleza - CE / Rua Anderson',
  quartos: 2,
  banheiros: 2,
};

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <Card imovel={imovelExemplo} estaFavoritado={false} toggleFavorito={function (): void {
            throw new Error('Function not implemented.');
        } } />
  </React.StrictMode>
);
