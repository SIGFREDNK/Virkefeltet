import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaPlus, FaUser, FaBell } from 'react-icons/fa';
import Menu from './Menu';

import './styles.css';

export default function Header({ icon, action, title }) {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(showMenu ? false : true);
    };

    return (
        <>
            <header className="header">
                <div className="left">
                    <motion.button
                        onClick={action}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="blue"
                    >
                        {icon}
                    </motion.button>
                    <motion.button>
                        <FaBell className="black" />
                    </motion.button>
                </div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="center"
                >
                    <span className="header-title">{title}</span>
                </motion.div>
                <div className="right">
                    <motion.button
                        onClick={toggleMenu}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="orange"
                    >
                        <FaPlus />
                    </motion.button>
                    <motion.button
                        onClick={() => null}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="blue"
                    >
                        <FaUser />
                    </motion.button>
                </div>
            </header>
            {showMenu && <Menu toggleMenu={() => setShowMenu(false)} />}
        </>
    );
}
