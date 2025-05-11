import React, { useRef, useState, useEffect } from 'react';
import './styles/AudioPlayer.css';

export default function AudioPlayer({ src, filename, coverSrc }) {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (playing) audioRef.current.pause();
    else audioRef.current.play();
    setPlaying(!playing);
  };

  // Reset play state when track ends
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const onEnded = () => setPlaying(false);
    audio.addEventListener('ended', onEnded);
    return () => audio.removeEventListener('ended', onEnded);
  }, []);

  return (
    <div className="audio-player">
      {coverSrc && (
        <img src={coverSrc} alt="cover art" className="cover-art" />
      )}
      <audio ref={audioRef} src={src} preload="metadata" />
      <button
        className="play-pause-btn"
        onClick={togglePlay}
        aria-label={playing ? 'Pause' : 'Play'}
      >
        {playing 
          ? <span className="material-symbols-outlined">pause</span>
          : <span className="material-symbols-outlined">play_arrow</span>
        }
      </button>
      <span className="audio-filename">{filename}</span>
    </div>
  );
}