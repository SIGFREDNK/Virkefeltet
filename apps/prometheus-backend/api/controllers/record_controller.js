import Record from '../models/record_model.js';
import { factory } from '@virkefeltet/core';

const getAllRecords = factory.getAll(Record);

const getRecord = factory.getOne(Record);

const createRecord = factory.createOne(Record);

const deleteRecord = factory.deleteOne(Record);

const updateRecord = factory.updateOne(Record);

export { getAllRecords, getRecord, createRecord, deleteRecord, updateRecord };
