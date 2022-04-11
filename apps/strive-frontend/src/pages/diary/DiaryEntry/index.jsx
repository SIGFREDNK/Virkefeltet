import './styles.css';

export default function DiaryEntry({ date, title, content }) {
    let dateOutput = new Date(date);
    dateOutput = dateOutput.toLocaleString('da-DK').split(' ')[0];
    return (
        <div className="card diary-entry">
            <h1>{title}</h1>
            <span>{dateOutput.toString()}</span>
            <p>{content}</p>
        </div>
    );
}
