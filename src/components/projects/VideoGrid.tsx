import React, { useState, useEffect } from 'react';
import './VideoGrid.css';
import { useNavigate } from 'react-router-dom';

interface Video {
  src: string;
  alt: string;
  thumbnail?: string;
}

interface VideoGridProps {
  videos: Video[];
  gap?: number;
  minWidth?: number;
  maxColumns?: number;
}

const VideoGrid: React.FC<VideoGridProps> = ({
  videos,
  gap = 16,
  minWidth = 250,
  maxColumns = 4
}) => {
  const [columns, setColumns] = useState(3);
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  useEffect(() => {
    const calculateColumns = () => {
      const viewportWidth = window.innerWidth;
      // Remove padding and gaps to get usable width
      const usableWidth = viewportWidth - (gap * 2);
      // Calculate how many columns can fit while respecting minWidth
      let optimalColumns = Math.floor(usableWidth / (minWidth + gap));

      // Ensure we have at least 1 column and no more than maxColumns
      optimalColumns = Math.max(1, Math.min(optimalColumns, maxColumns));

      // For small numbers of videos, ensure they display side by side
      if (videos.length === 2) {
        optimalColumns = 2;
      } else if (videos.length === 1) {
        optimalColumns = 1;
      } else if (videos.length <= 4) {
        optimalColumns = Math.min(optimalColumns, 3);
      }

      setColumns(optimalColumns);
    };

    // Calculate initially
    calculateColumns();

    // Recalculate on resize
    window.addEventListener('resize', calculateColumns);
    return () => window.removeEventListener('resize', calculateColumns);
  }, [gap, minWidth, maxColumns, videos.length]);

  const openVideo = (video: Video) => {
    setSelectedVideo(video);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeVideo();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeVideo();
    }
  };

  useEffect(() => {
    if (selectedVideo) {
      document.addEventListener('keydown', handleKeyDown as any);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown as any);
      document.body.style.overflow = 'unset';
    };
  }, [selectedVideo]);

  return (
    <>
      <div
        className={videos.length <= 2 ? "flex-grid" : "masonry-grid"}
        style={{
          ...(videos.length <= 2 ? {
            display: 'flex',
            gap: `${gap}px`,
            padding: `${gap}px`,
            justifyContent: 'center',
          } : {
            columnCount: columns,
            columnGap: `${gap}px`,
            padding: `${gap}px`,
          })
        }}
      >
        {videos.map((video, index) => (
          <div
            key={index}
            className={videos.length <= 2 ? "flex-item" : "masonry-item"}
            style={{
              ...(videos.length <= 2 ? {
                flex: '1',
                maxWidth: 'calc(50% - ' + (gap / 2) + 'px)',
                minWidth: '250px',
              } : {
                marginBottom: `${gap}px`,
                breakInside: 'avoid',
              })
            }}
          >
            <div 
              className="video-thumbnail"
              onClick={() => openVideo(video)}
            >
              <video
                src={video.src}
                className="masonry-video"
                style={{
                  width: '100%',
                  display: 'block',
                  borderRadius: '8px',
                  transition: 'transform 0.3s ease',
                }}
                muted
                preload="metadata"
                onLoadedMetadata={(e) => {
                  // Set the video to show the first frame as thumbnail
                  const videoElement = e.target as HTMLVideoElement;
                  videoElement.currentTime = 0.1;
                }}
              />
              <div className="play-button">
                ▶
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for full-size video */}
      {selectedVideo && (
        <div className="modal-overlay" onClick={handleOverlayClick}>
          <div className="modal-content">
            <button className="close-button" onClick={closeVideo}>
              ×
            </button>
            <video
              src={selectedVideo.src}
              className="modal-video"
              controls
              autoPlay
              muted={false}
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </>
  );
};

export default VideoGrid; 