import React from 'react';
import './App.css';

import { Form } from '@virkefeltet/ui';
import * as value5 from '@virkefeltet/utils';

function App() {
    return (
        <div className="App">
            <Form>
                <Form.Dropdown />
                <Form.DatePicker />
                <Form.DateRangePicker />
                <Form.Input />
                <Form.Clock />
                <Form.Search />
            </Form>
        </div>
    );
}

export default App;
