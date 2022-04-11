import { motion } from 'framer-motion';

import './styles.css';

export default function Header({ icon, action, title }) {
    return (
        <header className="header">
            <motion.button
                className="left"
                onClick={action}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                {icon}
            </motion.button>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="center"
            >
                {title}
            </motion.div>
            <motion.button
                className="right"
                onClick={() => null}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                S
            </motion.button>
        </header>
    );
}
