import { Form } from '@virkefeltet/ui';

import { task } from 'constants/form';

export default function Intervals({
    interval,
    weekday,
    monthDay,
    month,
    changeData
}) {
    return (
        <>
            <Form.Dropdown
                options={task.INTERVALS}
                setValue={changeData}
                value={interval}
                name="interval"
            />
            {interval === 'Ugentligt' && (
                <Form.Dropdown
                    options={task.WEEKDAYS}
                    setValue={changeData}
                    value={weekday}
                    name="weekday"
                />
            )}
            {interval === 'Månedligt' && (
                <Form.Dropdown
                    options={task.MONTH_DAYS}
                    setValue={changeData}
                    value={monthDay}
                    name="monthDay"
                />
            )}
            {interval === 'Årligt' && (
                <Form.DatePicker
                    setValue={changeData}
                    value={changeData}
                    disablePast={true}
                    name="yearlyDate"
                />
            )}
        </>
    );
}
