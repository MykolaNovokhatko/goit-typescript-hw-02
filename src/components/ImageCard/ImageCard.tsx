import React from 'react';
import css from './ImageCard.module.css';
import { Images } from '../App/App.types';

interface ImageCardProps {
  item: Images;
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ item, onClick }) => {
  return (
    <div onClick={onClick}>
      <img
        className={css.imageCard}
        src={item.urls.small}
        alt={item.urls.description}
        width= '300px'
        height= '300px'
      ></img>
    </div>
  );
}

export default ImageCard;