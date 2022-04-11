import { FaHammer, FaAngleDown } from 'react-icons/fa';
import ProgressBar from 'components/ProgressBar';

import './styles.css';

export default function Project({ name, progress }) {
    return (
        <div className="card project">
            <div className="left">
                <h3>{name}</h3>
            </div>
            <div className="right">
                <FaAngleDown />
                <FaHammer />
            </div>
            <ProgressBar progress={progress} />
        </div>
    );
}
