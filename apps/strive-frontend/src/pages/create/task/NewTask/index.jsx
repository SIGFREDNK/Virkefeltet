import './styles.css';
import { Form } from '@virkefeltet/ui';

export default function NewTask({
    taskName,
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
                value={taskName}
                onChange={changeData}
                name="taskName"
            />
            <Form.Input
                type="text"
                inputClass="description"
                placeholder="Beskrivelse"
                value={description}
                onChange={changeData}
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
