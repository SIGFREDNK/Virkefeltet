import React from 'react';
import PropTypes from 'prop-types';

import Dropdown from './Dropdown';
import DatePicker from './DatePicker';
import DateRangePicker from './DateRangePicker';
import Clock from './Clock';
import Input from './Input';
import Search from './Search';

Form.Dropdown = Dropdown;
Form.DatePicker = DatePicker;
Form.DateRangePicker = DateRangePicker;
Form.Clock = Clock;
Form.Input = Input;
Form.Search = Search;

export default function Form({ action, submit, children, formClass }) {
    return (
        <form action={action} onSubmit={submit} className={formClass}>
            {children}
        </form>
    );
}

Form.defaultProps = {
    action: '',
    submit: null
};

Form.propTypes = {
    action: PropTypes.string,
    submit: PropTypes.func
};
