import { FaTools, FaStar, FaInfinity, FaTimes } from 'react-icons/fa';
import { BiTask } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import path from '../../../constans/path';
import { motion } from 'framer-motion';

import './styles.css';

export default function Menu({ toggleMenu }) {
    const dropIn = {
        hidden: {
            height: 0,
            opacity: 0
        },
        visible: {
            height: 320,
            opacity: 1,
            transition: {
                duration: 0.2,
                type: 'spring',
                damping: 25,
                stiffness: 500
            }
        }
    };

    return (
        <motion.div
            className="menu"
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="hidden"
        >
            <h4>Hvad vil du oprette?</h4>
            <FaTimes className="close" onClick={toggleMenu} />
            <ul>
                <li>
                    <Link to={path.CREATE_TASK}>
                        <BiTask />
                        <span>Tilføj ny opgave</span>
                    </Link>
                </li>
                <li>
                    <Link to={path.CREATE_HABIT}>
                        <FaInfinity />
                        <span>Opret ny vane</span>
                    </Link>
                </li>
                <li>
                    <Link to={path.CREATE_PROJECT}>
                        <FaTools />
                        <span>Start nyt projekt</span>
                    </Link>
                </li>
                <li>
                    <Link to={path.CREATE_SKILL}>
                        <FaStar />
                        <span>Påbegynd ny evne</span>
                    </Link>
                </li>
            </ul>
        </motion.div>
    );
}
