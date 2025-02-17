import React, { useState, useEffect } from 'react';
import { getImages } from '../../images-api';
import { Toaster } from 'react-hot-toast';
import { ThreeDots } from 'react-loader-spinner';
import ImageGallery from '../ImageGallery/ImageGallery';
import SearchBar from '../SearchBar/SearchBar';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import ImageModal from '../ImageModal/ImageModal';
import css from './App.module.css';
import { Images } from './App.types';

export default function App() {
  const [images, setImages] = useState<Images[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [currentImage, setCurrentImage] = useState<Images | null>(null);

  useEffect(() => {
    if (searchQuery.trim() === '') {
      return;
    }
    async function fetchImages() {
      try {
        setIsLoading(true);
        setIsError(false);
        const data: Images[] = await getImages(searchQuery, currentPage);
        setImages(prevImages => [...prevImages, ...data]);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchImages();
  }, [currentPage, searchQuery]);

  const handleSearch = async (topic: string): Promise<void> => {
    setSearchQuery(topic);
    setCurrentPage(1);
    setImages([]);
  };

  const handleLoadMore = async () => {
    setCurrentPage(currentPage + 1);
  };

  const openModal = (image: Images | null) => {
    setCurrentImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setCurrentImage(null);
    setIsModalOpen(false);
  };

  return (
    <div>
      <Toaster
        containerStyle={{
          top: 70,
          left: 20,
          bottom: 20,
          right: 20,
        }}
      ></Toaster>
      <SearchBar onSubmit={handleSearch}></SearchBar>
      {isError && <ErrorMessage></ErrorMessage>}
      {isLoading && (
        <>
          <p className={css.loadingError}>Images are loading, please wait...</p>
          <div className={css.threeDots}>
            {' '}
            <ThreeDots
              visible={true}
              height="80"
              width="80"
              color="#FF4500"
              radius="9"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          </div>
        </>
      )}
      {images.length > 0 && (
        <ImageGallery items={images} onImageClick={openModal}></ImageGallery>
      )}
      {images.length > 0 && (
        <LoadMoreBtn onClick={handleLoadMore}></LoadMoreBtn>
      )}
      <ImageModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        image={currentImage}
      ></ImageModal>
    </div>
  );
}
