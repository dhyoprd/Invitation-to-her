import React, { useState } from 'react';
import InvitationCard from '../components/InvitationCard';
import { motion } from 'framer-motion';

const Ask = ({ onYes }) => {
    const [noCount, setNoCount] = useState(0);
    const [yesScale, setYesScale] = useState(1);

    const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });

    const handleNoClick = () => {
        setNoCount(noCount + 1);
        setYesScale(yesScale + 0.2);
    };

    const handleNoHover = () => {
        const x = Math.random() * 200 - 100; // Random x between -100 and 100
        const y = Math.random() * 200 - 100; // Random y between -100 and 100
        setNoPosition({ x, y });
        setNoCount(noCount + 1);
        setYesScale(yesScale + 0.2);
    };

    const getNoText = () => {
        const phrases = [
            "No",
            "Kok gitu?",
            "Bener ni?",
            "Pikir pikir lagi",
            "Last chance!",
            "Yang bener aja",
            "Nyesel nanti lhoo",
            "Lagi sekali pikirinn",
            "Dah yakin banget nih?",
            "Bah ada yang salah ni",
            "Kasian masa aku sendiri",
            "Kejam sekali u yaa",
            "Berubah Pikiran?",
            "Lagi sekalii aja",
            "Is that your final answer?",
            "You're breaking my heart ;(",
        ];
        return phrases[Math.min(noCount, phrases.length - 1)];
    };

    return (
        <InvitationCard>
            <h2 style={{ color: 'var(--color-accent)', marginBottom: '1rem' }}>
                Will you go to dinner with me? 🌹
            </h2>
            <div className="img-container" style={{ marginBottom: '1.5rem' }}>
                <img
                    src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExODBiMTg5ODczMzM2ODE4ODcyMDk1OWFhN2M4N2Q2N2Q2N2Q2JmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1z/cLS1cfxvGOPVpf9g3y/giphy.gif"
                    alt="Cute bear asking"
                    style={{ width: '150px', borderRadius: '1rem' }}
                />
            </div>
            <div className="buttons" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', position: 'relative' }}>
                <motion.button
                    className="btn-yes"
                    onClick={onYes}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    animate={{ scale: yesScale }}
                    style={{
                        padding: '1rem 2rem',
                        fontSize: '1.2rem',
                        borderRadius: '50px',
                        background: 'var(--color-primary)',
                        color: 'white',
                        fontWeight: 'bold',
                        boxShadow: '0 4px 15px rgba(255, 77, 109, 0.4)',
                        zIndex: 10,
                    }}
                >
                    Yes! 🤍
                </motion.button>
                <motion.button
                    className="btn-no"
                    onMouseEnter={handleNoHover}
                    onClick={handleNoClick}
                    animate={{ x: noPosition.x, y: noPosition.y }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    style={{
                        padding: '1rem 2rem',
                        fontSize: '1.2rem',
                        borderRadius: '50px',
                        background: '#e5e5e5',
                        color: '#555',
                        fontWeight: 'bold',
                        position: 'relative',
                    }}
                >
                    {getNoText()}
                </motion.button>
            </div>
        </InvitationCard>
    );
};

export default Ask;
