import Invoice from '../models/invoice_model.js';
import { factory } from '@virkefeltet/core';

const getAllInvoices = factory.getAll(Invoice);

const getInvoice = factory.getOne(Invoice);

const createInvoice = factory.createOne(Invoice);

const deleteInvoice = factory.deleteOne(Invoice);

const updateInvoice = factory.updateOne(Invoice);

export {
    getAllInvoices,
    getInvoice,
    createInvoice,
    deleteInvoice,
    updateInvoice
};
