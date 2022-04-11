import FormLayout from 'layouts/form';

import './styles.css';
import '../styles.css';

export default function CreateHabit({ formType }) {
    const handleSubmit = () => {};

    return (
        <FormLayout
            title={'Ny Vane'}
            pageClass={'create-habit'}
            submit={handleSubmit}
        ></FormLayout>
    );
}
