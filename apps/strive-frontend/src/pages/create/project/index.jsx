import FormLayout from 'layouts/form';

import './styles.css';
import '../styles.css';

export default function CreateProject({ formType }) {
    const handleSubmit = () => {};

    return (
        <FormLayout
            title={'Nyt Projekt'}
            pageClass={'create-project'}
            submit={handleSubmit}
        ></FormLayout>
    );
}
