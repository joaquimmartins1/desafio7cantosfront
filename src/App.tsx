import { useState } from 'react';
import Card from './components/Card';
import type { Imovel } from './interfaces/Imovel';

const imoveis: Imovel[] = [
  {
    id: 1,
    imagem: 'assets/imagem1.png',
    valor: 'R$ 2.260,00',
    titulo: 'Apartamento, Papicu, 2 Quartos',
    endereco: 'Fortaleza - CE / Rua Anderson',
    quartos: 2,
    banheiros: 2,
  },
  {
    id: 2,
    imagem: '/assets/imagem2.png',
    valor: 'R$ 3.100,00',
    titulo: 'Casa, Meireles, 3 Quartos',
    endereco: 'Fortaleza - CE / Av. Beira Mar',
    quartos: 3,
    banheiros: 3,
  },
  {
    id: 3,
    imagem: '/assets/imagem3.png',
    valor: 'R$ 1.850,00',
    titulo: 'Apartamento, Aldeota, 1 Quarto',
    endereco: 'Fortaleza - CE / Rua Barbosa de Freitas',
    quartos: 1,
    banheiros: 1,
  },
];

function App() {
  const [termoBusca, setTermoBusca] = useState('');
  const [mostrarFavoritos, setMostrarFavoritos] = useState(false);
  const [favoritos, setFavoritos] = useState<number[]>([]);

  const toggleFavorito = (id: number) => {
    if (favoritos.includes(id)) {
      setFavoritos(favoritos.filter((favId) => favId !== id));
    } else {
      setFavoritos([...favoritos, id]);
    }
  };

  const imoveisFiltrados = imoveis
    .filter((imovel) => {
      const busca = termoBusca.toLowerCase();
      return (
        imovel.titulo.toLowerCase().includes(busca) ||
        imovel.endereco.toLowerCase().includes(busca)
      );
    })
    .filter((imovel) => (mostrarFavoritos ? favoritos.includes(imovel.id) : true));

  return (
    <div style={{ padding: '30px 20px', fontFamily: 'Montserrat, sans-serif', backgroundColor: '#f0f2f5', minHeight: '100vh' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '25px', color: '#333' }}>Meus Imóveis</h1>

      <div className="filtro-container">
        <input
          type="text"
          placeholder="Buscar imóvel por título ou endereço..."
          value={termoBusca}
          onChange={(e) => setTermoBusca(e.target.value)}
          className="input-busca"
        />

        <label className="checkbox-container">
          <input
            type="checkbox"
            checked={mostrarFavoritos}
            onChange={() => setMostrarFavoritos(!mostrarFavoritos)}
          />
          Mostrar apenas favoritos
        </label>
      </div>

      <div className="container-de-cards">
        {imoveisFiltrados.length > 0 ? (
          imoveisFiltrados.map((imovel) => (
            <Card
              key={imovel.id}
              imovel={imovel}
              estaFavoritado={favoritos.includes(imovel.id)}
              toggleFavorito={toggleFavorito}
            />
          ))
        ) : (
          <p style={{ textAlign: 'center', marginTop: '40px', color: '#888' }}>
            Nenhum imóvel encontrado.
          </p>
        )}
      </div>
    </div>
  );
}

export default App;