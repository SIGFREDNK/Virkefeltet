import {
    FaCalendarDay,
    FaBook,
    FaTools,
    FaStar,
    FaShareAlt
} from 'react-icons/fa';
import { CgMenuGridR } from 'react-icons/cg';

import './styles.css';

import NavItem from './NavItem';

export default function Nav({ page }) {
    return (
        <nav>
            <NavItem
                name="Oversigt"
                icon={
                    <CgMenuGridR
                        style={{ width: '1.8rem', height: '1.8rem' }}
                    />
                }
                selected={page === 1}
                path="/overview"
            />
            <NavItem
                name="Dagsplan"
                icon={<FaCalendarDay />}
                selected={page === 2}
                path="/schedule"
                notify={true}
            />
            <NavItem
                name="Projekter"
                icon={<FaTools />}
                selected={page === 3}
                path="/projects"
            />
            <NavItem
                name="Evner"
                icon={<FaStar />}
                selected={page === 4}
                path="/skills"
            />
            <NavItem
                name="Dagbog"
                icon={<FaBook />}
                selected={page === 5}
                path="/diary"
            />
            <NavItem
                name="Social"
                icon={<FaShareAlt />}
                selected={page === 6}
                path="/social"
            />
        </nav>
    );
}
