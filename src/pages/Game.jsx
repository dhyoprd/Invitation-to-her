import React, { useState, useEffect } from 'react';
import InvitationCard from '../components/InvitationCard';
import { motion, AnimatePresence } from 'framer-motion';

const Game = ({ onNext }) => {
    const [score, setScore] = useState(0);
    const [hearts, setHearts] = useState([]);
    const [gameWon, setGameWon] = useState(false);

    useEffect(() => {
        if (score >= 5) {
            setGameWon(true);
            return;
        }

        const interval = setInterval(() => {
            const newHeart = {
                id: Date.now(),
                x: Math.random() * 80 + 10, // 10% to 90% width
                y: -10,
            };
            setHearts((prev) => [...prev, newHeart]);
        }, 1000);

        return () => clearInterval(interval);
    }, [score]);

    const handleHeartClick = (id) => {
        setHearts((prev) => prev.filter((h) => h.id !== id));
        setScore((prev) => prev + 1);
    };

    return (
        <InvitationCard>
            <h2 style={{ color: 'var(--color-primary)', marginBottom: '1rem' }}>
                Kesadaran Check! 🤭
            </h2>
            <p style={{ marginBottom: '1rem' }}>
                Fix Baru bangun ini harus cek dulu Goals: Pecik Heart sebanyak 5 kali ❤️
            </p>
            <p style={{ marginBottom: '1rem', fontWeight: 'bold' }}>
                Score: {score} / 5
            </p>

            <div
                style={{
                    width: '100%',
                    height: '300px',
                    position: 'relative',
                    background: '#fff0f3',
                    borderRadius: '1rem',
                    overflow: 'hidden',
                    border: '2px dashed var(--color-primary)',
                }}
            >
                <AnimatePresence>
                    {hearts.map((heart) => (
                        <motion.div
                            key={heart.id}
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 350, opacity: 1 }}
                            exit={{ opacity: 0, scale: 0 }}
                            transition={{ duration: 3, ease: 'linear' }}
                            onClick={() => handleHeartClick(heart.id)}
                            style={{
                                position: 'absolute',
                                left: `${heart.x}%`,
                                fontSize: '2rem',
                                cursor: 'pointer',
                                userSelect: 'none',
                            }}
                            onAnimationComplete={() => {
                                setHearts((prev) => prev.filter((h) => h.id !== heart.id));
                            }}
                        >
                            ❤️
                        </motion.div>
                    ))}
                </AnimatePresence>

                {gameWon && (
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            background: 'rgba(255, 255, 255, 0.8)',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            zIndex: 10,
                        }}
                    >
                        <h3 style={{ color: 'var(--color-primary)', marginBottom: '1rem' }}>
                            Wiih udah sadar incess i ternyata! 🎉
                        </h3>
                        <motion.button
                            className="btn-primary"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={onNext}
                            style={{
                                padding: '0.8rem 2rem',
                                fontSize: '1rem',
                                borderRadius: '50px',
                                background: 'var(--color-primary)',
                                color: 'white',
                                fontWeight: 'bold',
                                boxShadow: '0 4px 15px rgba(255, 77, 109, 0.4)',
                            }}
                        >
                            Continue 👉
                        </motion.button>
                    </motion.div>
                )}
            </div>
        </InvitationCard>
    );
};

export default Game;
