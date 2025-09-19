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

interface CardProps {
  imovel: Imovel;
  estaFavoritado: boolean;
  toggleFavorito: (id: number) => void;
}

const Card: React.FC<CardProps> = ({ imovel, estaFavoritado, toggleFavorito }) => {
  return (
    <div className={styles.card}>
      {/* ENVOLVENDO A IMAGEM EM UM CONTAINER PARA O ZOOM FUNCIONAR */}
      <div className={styles.cardImageContainer}>
        <img src={imovel.imagem} alt={imovel.titulo} className={styles.cardImage} />
      </div>

      <div className={styles['card-content']}>
        <div className={styles['container-valor-e-botao']}>
          <span>{imovel.valor}</span>

          <div
            className={styles.coracao}
            onClick={() => toggleFavorito(imovel.id)}
            style={{ cursor: 'pointer' }}
            aria-label={estaFavoritado ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => {
              if (e.key === 'Enter') toggleFavorito(imovel.id);
            }}
          >
            <FontAwesomeIcon
              icon={estaFavoritado ? solidHeart : regularHeart}
              style={{ color: estaFavoritado ? 'red' : 'black' }}
              size="lg"
            />
          </div>
        </div>

        <h1>{imovel.titulo}</h1>
 
        <h3
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            color: '#aaaaaa',
            fontWeight: 400,
            fontSize: '12px',
            marginTop: 0,
          }}
        >
          <FontAwesomeIcon icon={faLocationDot} style={{ color: '#ff8c00' }} />
          <span>{imovel.endereco}</span>
        </h3>
      </div>

      <div className={styles['card-info']}>
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
