import './styles.css';
import { Form } from '@virkefeltet/ui';

export default function NewTask({
    name,
    description,
    category,
    categories,
    changeData
}) {
    return (
        <>
            <Form.Input
                type="text"
                inputClass="name"
                placeholder="Navn"
                value={name}
                setValue={changeData}
                name="name"
            />
            <Form.Input
                type="text"
                inputClass="description"
                placeholder="Beskrivelse"
                value={description}
                setValue={changeData}
                name="description"
            />
            <Form.Dropdown
                options={categories}
                setValue={changeData}
                value={category}
                name="category"
            />
        </>
    );
}
