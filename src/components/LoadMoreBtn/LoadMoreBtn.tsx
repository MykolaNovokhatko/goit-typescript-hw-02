import css from './LoadMoreBtn.module.css';

interface BtnType {
  onClick: () => void;
}

const LoadMoreBtn: React.FC<BtnType> = ({ onClick }) => {
  return (
    <button className={css.loadMoreBtn} onClick={onClick}>
      Load more
    </button>
  );
}

export default LoadMoreBtn;