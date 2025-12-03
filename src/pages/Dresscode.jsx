import React from 'react';
import InvitationCard from '../components/InvitationCard';
import { motion } from 'framer-motion';

const Dresscode = ({ onNext }) => {
    return (
        <InvitationCard>
            <h2 style={{ color: 'var(--color-primary)', marginBottom: '1rem' }}>Dresscode 👗</h2>
            <p style={{ marginBottom: '1.5rem' }}>
                Baby blue for the top,<br />White for the bottom.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                    <div style={{
                        width: '60px',
                        height: '60px',
                        borderRadius: '50%',
                        background: '#89CFF0',
                        boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
                    }}></div>
                    <span style={{ fontSize: '0.9rem' }}>Top</span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                    <div style={{
                        width: '60px',
                        height: '60px',
                        borderRadius: '50%',
                        background: '#FFFFFF',
                        border: '1px solid #eee',
                        boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
                    }}></div>
                    <span style={{ fontSize: '0.9rem' }}>Bottom</span>
                </div>
            </div>

            <p style={{ fontSize: '0.9rem', fontStyle: 'italic', opacity: 0.8, marginBottom: '1rem' }}>
                Atau kamu decide di Chat lagi hehe takutnya kamu ngga suka
            </p>

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
                Next 👉
            </motion.button>
        </InvitationCard>
    );
};

export default Dresscode;
