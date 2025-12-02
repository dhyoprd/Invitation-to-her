import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const MusicPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div style={{ position: 'fixed', top: '20px', right: '20px', zIndex: 100 }}>
            <audio ref={audioRef} loop>
                <source src="/music.mp3" type="audio/mpeg" />
            </audio>
            <motion.button
                onClick={togglePlay}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                style={{
                    background: 'rgba(255, 255, 255, 0.5)',
                    backdropFilter: 'blur(5px)',
                    border: 'none',
                    borderRadius: '50%',
                    width: '50px',
                    height: '50px',
                    fontSize: '1.5rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                }}
            >
                {isPlaying ? '⏸️' : '🎵'}
            </motion.button>
        </div>
    );
};

export default MusicPlayer;
