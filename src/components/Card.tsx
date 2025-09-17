import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBed,
  faBath,
  faHeart as solidHeart,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';
import styles from './Card.module.css';
import type { Imovel } from '../interfaces/Imovel';

// Definindo a interface para as propriedades do Card
interface CardProps {
  imovel: Imovel; // O objeto 'imovel' que contém informações do imóvel, incluindo a imagem
  estaFavoritado: boolean; // Se o imóvel está marcado como favorito
  toggleFavorito: (id: number) => void; // Função para alternar entre favorito e não favorito
}

// Componente funcional para o Card
const Card: React.FC<CardProps> = ({ imovel, estaFavoritado, toggleFavorito }) => {
  return (
    <div className={styles.card}>
      { /* A imagem agora é dinâmica, recebendo o caminho da imagem do objeto 'imovel' */}
      <img src={imovel.imagem} alt={imovel.titulo} className={styles.cardImage} />

      <div className={styles['card-content']}>
        <div className={styles['container-valor-e-botao']}>
          {/* Exibindo o valor do imóvel */}
          <span>{imovel.valor}</span>

          {/* Seção de favoritar */}
          <div
            className={styles.coracao}
            onClick={() => toggleFavorito(imovel.id)} // Alterna entre favorito e não favorito
            style={{ cursor: 'pointer' }}
            aria-label={estaFavoritado ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => {
              if (e.key === 'Enter') toggleFavorito(imovel.id); // Permite que o usuário use "Enter" para favoritar
            }}
          >
            {/* Ícone de coração para favoritar */}
            <FontAwesomeIcon
              icon={estaFavoritado ? solidHeart : regularHeart}
              style={{ color: estaFavoritado ? 'red' : 'black' }} // Altera a cor dependendo do status de favorito
              size="lg"
            />
          </div>
        </div>

        {/* Título do imóvel */}
        <h1>{imovel.titulo}</h1>

        {/* Endereço do imóvel */}
        <h3
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            color: '#aaaaaa',
            fontWeight: 400,
            fontSize: '10px',
            marginTop: 0,
          }}
        >
          {/* Ícone de localização */}
          <FontAwesomeIcon icon={faLocationDot} style={{ color: '#ff8c00' }} />
          <span>{imovel.endereco}</span>
        </h3>
      </div>

      <div className={styles['card-info']}>
        {/* Informações de quartos */}
        <div
          className={styles.icone}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            borderRight: '1px solid #eeeeee',
            paddingRight: '10px',
          }}
        >
          <FontAwesomeIcon icon={faBed} style={{ color: '#ff8c00' }} />
          <span>{imovel.quartos} Quarto(s)</span>
        </div>

        {/* Informações de banheiros */}
        <div
          className={styles.icone}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            paddingLeft: '10px',
          }}
        >
          <FontAwesomeIcon icon={faBath} style={{ color: '#ff8c00' }} />
          <span>{imovel.banheiros} Banheiro(s)</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
