import './styles.css';

export default function ProgressBar({ progress }) {
    return (
        <div
            className="progress-bar"
            style={{ '--width': progress }}
            data-progress={progress}
        ></div>
    );
}
