import { FaAngleLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { Form } from '@virkefeltet/ui';

import Header from '../shared/Header';
import PageTransition from '../shared/PageTransition';

import './styles.css';

export default function FormLayout({ children, title, pageClass, submit }) {
    const navigate = useNavigate();

    return (
        <>
            <Header
                icon={<FaAngleLeft />}
                action={() => navigate(-1)}
                title={title}
            />
            <PageTransition pageClass={`creation-page ${pageClass}`}>
                <Form formClass="create-form" submit={submit}>
                    {children}
                    <input type="submit" value="Opret" className="submit" />
                </Form>
            </PageTransition>
        </>
    );
}
