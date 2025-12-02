import React from 'react';
import InvitationCard from '../components/InvitationCard';
import { motion } from 'framer-motion';

const Where = ({ onNext }) => {
    return (
        <InvitationCard>
            <h2 style={{ color: 'var(--color-primary)', marginBottom: '1rem' }}>Where? 📍</h2>
            <p style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
                Jumeirah Akasa Bali
            </p>
            <div className="img-container" style={{ marginBottom: '1.5rem' }}>
                <img
                    src="https://cdn.jumeirah.com/-/mediadh/dh/hospitality/jumeirah/hotels/bali/jumeirah-bali/new-website-content/restaurant-page/akasa-restaurant--bar/jba_akasa-restaurant--bar_global-fnb-listing-card.jpeg?revision=b61a4894-df39-4833-85f2-f2ce65bec543" // Placeholder beach/fancy place
                    alt="Location"
                    style={{ width: '100%', borderRadius: '1rem', maxHeight: '200px', objectFit: 'cover' }}
                />
            </div>
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

export default Where;
