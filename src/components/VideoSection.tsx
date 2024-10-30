'use client';
import Image from 'next/image';
import React, { useRef, useState } from 'react';

import PlayIcon from '@/assets/svgs/play-icon.svg';

import Thumbnail from '../../public/subtitle.png';

type VideoModalProps = {
  isOpen: boolean;
  onClose: () => void;
  videoRef: React.RefObject<HTMLVideoElement>;
  showControls: boolean;
  handlePause: () => void;
};

function VideoModal({
  isOpen,
  onClose,
  videoRef,
  showControls,
  handlePause,
}: VideoModalProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/30" // Fixed Tailwind opacity suffix
      onClick={onClose}
      role="button" // Added role for accessibility
      tabIndex={0} // Added tabIndex for keyboard accessibility
      onKeyDown={e => e.key === 'Escape' && onClose()} // Added keyboard event for closing
    >
      <div
        className="relative w-[93%]"
        onClick={e => e.stopPropagation()}
        role="button" // Added role for accessibility
        tabIndex={0} // Added tabIndex for keyboard accessibility
        onKeyDown={e => e.key === 'Escape' && e.stopPropagation()} // Added keyboard event
      >
        <video
          className="max-h-[96vh] w-full rounded-md object-cover"
          ref={videoRef}
          controls={showControls}
          onPause={handlePause}
          onEnded={handlePause}
          autoPlay
        >
          <source src="./video.mp4" />
          <track
            default
            kind="captions"
            srcLang="en"
            src="./captions.vtt"
          />
          {' '}
          {/* Added track for captions */}
        </video>
      </div>
    </div>
  );
}

export default function VideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasPlayed, setHasPlayed] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handlePlay = () => {
    setIsFullscreen(true);
    setShowControls(true);
    setHasPlayed(true);
    document.body.style.overflow = 'hidden';
  };

  const handlePause = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  const handleClickOutside = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsFullscreen(false);
      setHasPlayed(false);
      document.body.style.overflow = '';
    }
  };

  return (
    <div className="mx-auto mt-10 max-w-screen-xl px-6 sm:mt-16">
      <div className="relative">
        {!hasPlayed && (
          <div
            className="relative cursor-pointer"
            onClick={handlePlay}
            role="button" // Added role for accessibility
            tabIndex={0} // Added tabIndex for keyboard accessibility
            onKeyDown={e => e.key === 'Enter' && handlePlay()} // Added keyboard event for playing video
          >
            <Image
              src={Thumbnail}
              alt="Thumbnail"
              className="size-full rounded-md object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src={PlayIcon}
                alt="Play Icon"
                className="size-10 cursor-pointer sm:size-[100px]"
              />
            </div>
          </div>
        )}

        <VideoModal
          isOpen={isFullscreen}
          onClose={handleClickOutside}
          videoRef={videoRef}
          showControls={showControls}
          handlePause={handlePause}
        />
      </div>
    </div>
  );
}
