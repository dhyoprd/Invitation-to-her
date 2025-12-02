import React, { useState, useRef, useImperativeHandle } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MusicPlayer = React.forwardRef((props, ref) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    useImperativeHandle(ref, () => ({
        play: () => {
            if (audioRef.current) {
                audioRef.current.play()
                    .then(() => setIsPlaying(true))
                    .catch(e => console.log("Autoplay blocked:", e));
            }
        }
    }));

    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div style={{ position: 'fixed', top: '20px', right: '20px', zIndex: 100, display: 'flex', alignItems: 'center', gap: '10px' }}>
            <AnimatePresence>
                {!isPlaying && (
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        style={{
                            background: 'white',
                            padding: '5px 10px',
                            borderRadius: '20px',
                            fontSize: '0.8rem',
                            fontWeight: 'bold',
                            color: 'var(--color-primary)',
                            boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
                        }}
                    >
                        Press Me! 🎵
                    </motion.div>
                )}
            </AnimatePresence>
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
});

export default MusicPlayer;
