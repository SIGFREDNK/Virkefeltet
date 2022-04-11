import { FaCog } from 'react-icons/fa';
import { useState } from 'react';

import Header from 'layouts/shared/Header';
import Menu from './Menu';
import Nav from './Nav';
import PageTransition from 'layouts/shared/PageTransition';

export default function AppLayout({
    pageName,
    pageClass,
    pageNumber,
    setPageNumber,
    children
}) {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(showMenu ? false : true);
    };

    return (
        <>
            <Header icon={<FaCog />} action={() => null} title={pageName} />
            <PageTransition pageClass={pageClass}>{children}</PageTransition>
            {showMenu && <Menu toggleMenu={() => setShowMenu(false)} />}
            <Nav
                page={pageNumber}
                setPage={setPageNumber}
                toggleMenu={toggleMenu}
            />
        </>
    );
}
