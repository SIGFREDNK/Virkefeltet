import Employee from '../models/employee_model.js';
import { factory } from '@virkefeltet/core';

const getAllEmployees = factory.getAll(Employee);

const getEmployee = factory.getOne(Employee);

const createEmployee = factory.createOne(Employee);

const deleteEmployee = factory.deleteOne(Employee);

const updateEmployee = factory.updateOne(Employee);

export {
    getAllEmployees,
    getEmployee,
    createEmployee,
    deleteEmployee,
    updateEmployee
};
