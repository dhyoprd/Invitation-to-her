import React from 'react';
import { motion } from 'framer-motion';

const HeartBackground = () => {
    // Create an array of 20 hearts with random properties
    const hearts = Array.from({ length: 20 });

    return (
        <div className="heart-bg">
            <video autoPlay loop muted playsInline className="video-bg">
                <source src="/background.mp4" type="video/mp4" />
            </video>

            {hearts.map((_, i) => (
                <motion.div
                    key={i}
                    className="floating-heart"
                    initial={{
                        opacity: 0,
                        y: '110vh',
                        x: Math.random() * 100 + 'vw',
                        scale: Math.random() * 0.5 + 0.5,
                    }}
                    animate={{
                        opacity: [0, 0.8, 0],
                        y: '-10vh',
                        rotate: Math.random() * 360,
                    }}
                    transition={{
                        duration: Math.random() * 10 + 15,
                        repeat: Infinity,
                        delay: Math.random() * 10,
                        ease: 'linear',
                    }}
                    style={{
                        fontSize: `${Math.random() * 20 + 20}px`,
                        color: Math.random() > 0.5 ? 'var(--color-primary)' : 'var(--color-secondary)',
                    }}
                >
                    ❤️
                </motion.div>
            ))}
        </div>
    );
};

export default HeartBackground;
