import Customer from '../models/customer_model.js';
import { factory } from '@virkefeltet/core';

const getAllCustomers = factory.getAll(Customer);

const getCustomer = factory.getOne(Customer);

const createCustomer = factory.createOne(Customer);

const deleteCustomer = factory.deleteOne(Customer);

const updateCustomer = factory.updateOne(Customer);

export {
    getAllCustomers,
    getCustomer,
    createCustomer,
    deleteCustomer,
    updateCustomer
};
