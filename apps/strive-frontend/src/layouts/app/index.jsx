import { FaCog } from 'react-icons/fa';

import Header from 'layouts/shared/Header';
import Nav from './Nav';
import PageTransition from 'layouts/shared/PageTransition';

export default function AppLayout({
    pageName,
    pageClass,
    pageNumber,
    children
}) {
    return (
        <>
            <div className="wrapper">
                <Header icon={<FaCog />} action={() => null} title={pageName} />
                <PageTransition pageClass={pageClass}>
                    {children}
                </PageTransition>
            </div>
            <Nav page={pageNumber} />
        </>
    );
}
