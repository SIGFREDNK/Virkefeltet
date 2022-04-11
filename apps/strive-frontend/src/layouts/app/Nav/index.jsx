import { FaCalendarDay, FaBook, FaTools, FaStar, FaPlus } from 'react-icons/fa';

import './styles.css';

import NavItem from './NavItem/index';
import Button from '../../../components/Button/index';

export default function Nav({ page, setPage, toggleMenu }) {
    return (
        <nav>
            <NavItem
                name="Dagsplan"
                icon={<FaCalendarDay />}
                selected={page === 1}
                path="/schedule"
                notify={true}
                page={1}
                changePage={setPage}
            />
            <NavItem
                name="Projekter"
                icon={<FaTools />}
                selected={page === 2}
                path="/projects"
                page={2}
                changePage={setPage}
            />
            <Button value={<FaPlus />} onclick={toggleMenu} />
            <NavItem
                name="Evner"
                icon={<FaStar />}
                selected={page === 3}
                path="/skills"
                page={3}
                changePage={setPage}
            />
            <NavItem
                name="Dagbog"
                icon={<FaBook />}
                selected={page === 4}
                path="/diary"
                page={4}
                changePage={setPage}
            />
        </nav>
    );
}
