import React from 'react';
import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';
import { Images } from '../App/App.types';



interface ImageGalleryProps {
  items: Images[];
  onImageClick: (item: Images) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ items, onImageClick }) => {
  return (
    <ul className={css.galleryList}>
      {items.map(item => (
        <li className={css.galleryItems} key={item.id}>
          <ImageCard item={item} onClick={() => onImageClick(item)}></ImageCard>
        </li>
      ))}
    </ul>
  );
}

export default ImageGallery;