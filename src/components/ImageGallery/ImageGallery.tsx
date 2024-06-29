import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';

export default function ImageGallery({ items, onImageClick }) {
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