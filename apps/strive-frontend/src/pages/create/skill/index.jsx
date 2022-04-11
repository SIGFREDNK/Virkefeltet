import FormLayout from 'layouts/form';

import './styles.css';
import '../styles.css';

export default function CreateSkill({ formType }) {
    const handleSubmit = () => {};

    return (
        <FormLayout
            title={'Ny Evne'}
            pageClass={'create-skill'}
            submit={handleSubmit}
        ></FormLayout>
    );
}
