import React, { useState, useEffect } from 'react';
import './PhotoGrid.css';
import { useNavigate } from 'react-router-dom';

interface Photo {
  src: string;
  alt: string;
}

interface PhotoGridProps {
  photos: Photo[];
  gap?: number;
  minWidth?: number;
  maxColumns?: number;
}

const PhotoGrid: React.FC<PhotoGridProps> = ({
  photos,
  gap = 16,
  minWidth = 250,
  maxColumns = 4
}) => {
  const [columns, setColumns] = useState(3);
  const navigate = useNavigate();

  useEffect(() => {
    const calculateColumns = () => {
      const viewportWidth = window.innerWidth;
      // Remove padding and gaps to get usable width
      const usableWidth = viewportWidth - (gap * 2);
      // Calculate how many columns can fit while respecting minWidth
      let optimalColumns = Math.floor(usableWidth / (minWidth + gap));

      // Ensure we have at least 1 column and no more than maxColumns
      optimalColumns = Math.max(1, Math.min(optimalColumns, maxColumns));

      // If we have fewer photos than columns, reduce columns
      optimalColumns = Math.min(optimalColumns, photos.length);

      setColumns(optimalColumns);
    };

    // Calculate initially
    calculateColumns();

    // Recalculate on resize
    window.addEventListener('resize', calculateColumns);
    return () => window.removeEventListener('resize', calculateColumns);
  }, [gap, minWidth, maxColumns, photos.length]);

  return (
    <>
      <button
        onClick={() => navigate(-1)}
        style={{
          top: '20px',
          marginLeft: '12px',
          padding: '8px 16px',
          backgroundColor: '#FFC0CB',
          color: 'white',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
          fontSize: '14px',
          fontWeight: '500'
        }}
        className='hover:shadow-lg hover:shadow-pink-200/50 transition-all duration-1000 hover:-translate-y-1'
      >
        ← Back
      </button>
      <div
        className="masonry-grid"
        style={{
          columnCount: columns,
          columnGap: `${gap}px`,
          padding: `${gap}px`,
        }}
      >
        {photos.map((photo, index) => (
          <div
            key={index}
            className="masonry-item"
            style={{
              marginBottom: `${gap}px`,
              breakInside: 'avoid',
            }}
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className="masonry-image"
              style={{
                width: '100%',
                display: 'block',
                borderRadius: '8px',
                transition: 'transform 0.3s ease',
              }}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default PhotoGrid;
