import React, { useEffect } from 'react';
import InvitationCard from '../components/InvitationCard';
import confetti from 'canvas-confetti';

const Final = () => {
    useEffect(() => {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
    }, []);

    return (
        <InvitationCard>
            <h1 style={{ color: 'var(--color-primary)', fontSize: '2.5rem', marginBottom: '1rem' }}>
                Terimaaci yaa cantik sampai jumpa! ❤️
            </h1>
            <p style={{ fontSize: '1.5rem', fontStyle: 'italic', opacity: 0.9 }}>
                your presence is trully a gift
            </p>
            <div style={{ marginTop: '2rem', fontSize: '3rem' }}>
                🎁
            </div>
        </InvitationCard>
    );
};

export default Final;
