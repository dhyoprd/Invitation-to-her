import React from 'react';
import InvitationCard from '../components/InvitationCard';
import { motion } from 'framer-motion';

const Welcome = ({ onNext }) => {
    return (
        <InvitationCard>
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                style={{ color: 'var(--color-primary)', fontSize: '1.7rem' }}
            >
                Haii incess aku! 🌸
            </motion.h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--color-text)', lineHeight: '1.6' }}>
                I have something special to ask you...
            </p>
            <motion.button
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onNext}
                style={{
                    marginTop: '1rem',
                    padding: '1rem 2rem',
                    fontSize: '1.2rem',
                    borderRadius: '50px',
                    background: 'var(--color-primary)',
                    color: 'white',
                    fontWeight: 'bold',
                    boxShadow: '0 4px 15px rgba(255, 77, 109, 0.4)',
                }}
            >
                Open Invitation 💌
            </motion.button>
        </InvitationCard>
    );
};

export default Welcome;
