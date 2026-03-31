import React, { useState } from 'react';

const PhotoGallery = ({ photos, onDelete }) => {
  const [galleryPhotos, setGalleryPhotos] = useState(photos);

  const handleDelete = (id) => {
    setGalleryPhotos(galleryPhotos.filter(photo => photo.id !== id));
    if (onDelete) {
      onDelete(id);
    }
  };

  return (
    <div className="photo-gallery">
      {galleryPhotos.map(photo => (
        <div key={photo.id} className="photo-item">
          <img src={photo.thumbnailUrl} alt={photo.description} />
          <p>{photo.description}</p>
          <button onClick={() => handleDelete(photo.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default PhotoGallery;