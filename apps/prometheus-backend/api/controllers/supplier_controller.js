import Supplier from '../models/supplier_model.js';
import { factory } from '@virkefeltet/core';

const getAllSuppliers = factory.getAll(Supplier);

const getSupplier = factory.getOne(Supplier);

const createSupplier = factory.createOne(Supplier);

const deleteSupplier = factory.deleteOne(Supplier);

const updateSupplier = factory.updateOne(Supplier);

export {
    getAllSuppliers,
    getSupplier,
    createSupplier,
    deleteSupplier,
    updateSupplier
};
