import Link from 'next/link';
import navStyles from '../styles/Nav.module.css';

export default function Nav() {
    return (
        <div className={navStyles.nav}>
            <ul>
                <li>
                    <Link href="/news">Nyheder</Link>
                </li>
                <li>
                    <Link href="/products">Produkter</Link>
                </li>
            </ul>
        </div>
    );
}
