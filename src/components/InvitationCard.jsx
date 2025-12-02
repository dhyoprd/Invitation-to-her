import React from 'react';
import { motion } from 'framer-motion';

const InvitationCard = ({ children, ...props }) => {
    return (
        <motion.div
            className="invitation-card"
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.6, type: 'spring', bounce: 0.4 }}
            {...props}
        >
            {children}
        </motion.div>
    );
};

export default InvitationCard;
