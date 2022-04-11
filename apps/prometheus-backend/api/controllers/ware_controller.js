import Ware from '../models/ware_model.js';
import { factory } from '@virkefeltet/core';

const getAllWares = factory.getAll(Ware);

const getWare = factory.getOne(Ware);

const createWare = factory.createOne(Ware);

const deleteWare = factory.deleteOne(Ware);

const updateWare = factory.updateOne(Ware);

export { getAllWares, getWare, createWare, deleteWare, updateWare };
