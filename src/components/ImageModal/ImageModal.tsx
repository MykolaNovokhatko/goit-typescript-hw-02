import Modal from 'react-modal';
import css from './ImageModal.module.css';
import { Images } from '../App/App.types';

interface ImageModalTypes {
  isOpen: boolean;
  onRequestClose: () => void;
  image: Images | null;
}

Modal.setAppElement('#root');

const ImageModal: React.FC<ImageModalTypes> = ({ isOpen, onRequestClose, image }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Image Modal"
      className={css.modal}
      overlayClassName={css.overlay}
      shouldCloseOnEsc={true}
      shouldCloseOnOverlayClick={true}
    >
      {image && (
        <div>
          <img src={image.urls.regular} alt={image.urls.description}></img>
          <button onClick={onRequestClose}>Close</button>
        </div>
      )}
    </Modal>
  );
}

export default ImageModal;
