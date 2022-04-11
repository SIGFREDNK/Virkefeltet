import { motion } from 'framer-motion';

import './styles.css';

export default function PageTransition({ pageClass, children }) {
    return (
        <motion.div
            className={`page ${pageClass}`}
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: -0 }}
            exit={{ opacity: 0, x: 200 }}
            transition={{ duration: 0.3, type: 'linear' }}
        >
            {children}
        </motion.div>
    );
}
