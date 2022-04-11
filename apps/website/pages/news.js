import newsStyles from '../styles/News.module.css';

export default function news({ news }) {
    return (
        <div>
            {news.map(newsitem => (
                <h3 key={newsitem.id}>{newsitem.title}</h3>
            ))}
        </div>
    );
}

export const getStaticProps = async () => {
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=6`
    );
    const news = await res.json();

    return {
        props: {
            news
        }
    };
};
