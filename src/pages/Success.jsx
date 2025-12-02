import React, { useEffect } from 'react';
import InvitationCard from '../components/InvitationCard';
import confetti from 'canvas-confetti';

const Success = () => {
    useEffect(() => {
        const duration = 15 * 1000;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

        const randomInRange = (min, max) => Math.random() * (max - min) + min;

        const interval = setInterval(function () {
            const timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            const particleCount = 50 * (timeLeft / duration);
            confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
            confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
        }, 250);

        return () => clearInterval(interval);
    }, []);

    return (
        <InvitationCard>
            <h1 style={{ color: 'var(--color-primary)', fontSize: '3rem' }}>YAY! 🎉</h1>
            <p style={{ fontSize: '1.5rem', margin: '1rem 0' }}>
                I knew you'd say yes! ❤️
            </p>
            <div style={{ marginTop: '2rem' }}>
                <p>Let's make it a date.</p>
                <p style={{ fontSize: '0.9rem', opacity: 0.7, marginTop: '0.5rem' }}>
                    (I'll text you the details!)
                </p>
            </div>
            <img
                src="https://media.giphy.com/media/T86i6yDyOYz7J6dPhf/giphy.gif"
                alt="Celebration"
                style={{ width: '200px', borderRadius: '1rem', marginTop: '1rem' }}
            />
        </InvitationCard>
    );
};

export default Success;
