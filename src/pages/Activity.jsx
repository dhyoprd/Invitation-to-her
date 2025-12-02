import React from 'react';
import InvitationCard from '../components/InvitationCard';
import { motion } from 'framer-motion';

const Activity = ({ onNext }) => {
    const activities = [
        { icon: '🌅', text: 'Sunset Watching' },
        { icon: '🍽️', text: 'Delicious Dinner' },
        { icon: '🚶‍♂️', text: 'A bit of Walk' },
    ];

    return (
        <InvitationCard>
            <h2 style={{ color: 'var(--color-primary)', marginBottom: '1.5rem' }}>What We'll be doing? ✨</h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%', padding: '0 1rem' }}>
                {activities.map((act, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.2 }}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1rem',
                            background: 'rgba(255,255,255,0.5)',
                            padding: '0.8rem',
                            borderRadius: '12px'
                        }}
                    >
                        <span style={{ fontSize: '1.5rem' }}>{act.icon}</span>
                        <span style={{ fontSize: '1.1rem', fontWeight: '500' }}>{act.text}</span>
                    </motion.div>
                ))}
            </div>

            <motion.button
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onNext}
                style={{
                    marginTop: '2rem',
                    padding: '0.8rem 2rem',
                    fontSize: '1rem',
                    borderRadius: '50px',
                    background: 'var(--color-primary)',
                    color: 'white',
                    fontWeight: 'bold',
                    boxShadow: '0 4px 15px rgba(255, 77, 109, 0.4)',
                }}
            >
                Next 👉
            </motion.button>
        </InvitationCard>
    );
};

export default Activity;
