import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // Default styles
import styles from './imageStyle.module.css'; // Update with the actual path to your stylesheet

const ImagePreview = ({ imageUrls }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  let gridClass = '';

  switch (imageUrls.length) {
    case 1:
      gridClass = styles.single;
      break;
    case 2:
      gridClass = styles.double;
      break;
    case 3:
      gridClass = styles.triple;
      break;
    case 4:
      gridClass = styles.quad;
      break;
    default:
      gridClass = styles.single;
      break; // Handle default case or throw an error
  }

  const openLightbox = (index) => {
    setCurrentImage(index);
    setIsOpen(true);
  };

  return (
    <>
      <div className={`${styles['image-grid-container']} ${gridClass}`}>
        {imageUrls.map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`Content ${index + 1}`}
            onClick={() => openLightbox(index)}
            className={styles['image-preview']} // You might want to define some styles for this class
          />
        ))}
      </div>

      {isOpen && (
        <Lightbox
          mainSrc={imageUrls[currentImage]}
          nextSrc={imageUrls[(currentImage + 1) % imageUrls.length]}
          prevSrc={imageUrls[(currentImage + imageUrls.length - 1) % imageUrls.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setCurrentImage((currentImage + imageUrls.length - 1) % imageUrls.length)
          }
          onMoveNextRequest={() =>
            setCurrentImage((currentImage + 1) % imageUrls.length)
          }
        />
      )}
    </>
  );
};

export default ImagePreview;
