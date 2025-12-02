import React from 'react';
import InvitationCard from '../components/InvitationCard';
import { motion } from 'framer-motion';

const Time = ({ onNext }) => {
    return (
        <InvitationCard>
            <h2 style={{ color: 'var(--color-primary)', marginBottom: '0.5rem' }}>When? ⏰</h2>
            <p style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '1.5rem', color: 'var(--color-text)' }}>
                Friday, 5 December 2025
            </p>

            <div style={{ textAlign: 'left', width: '100%', padding: '0 1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <span style={{ fontSize: '2rem' }}>🚗</span>
                    <div>
                        <p style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>15:00</p>
                        <p style={{ opacity: 0.8 }}>I'll pick you up</p>
                    </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <span style={{ fontSize: '2rem' }}>🍽️</span>
                    <div>
                        <p style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>18:30</p>
                        <p style={{ opacity: 0.8 }}>The Dinner</p>
                    </div>
                </div>
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

export default Time;
