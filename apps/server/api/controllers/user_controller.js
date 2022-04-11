import User from '../models/user_model.js';
import * as factory from '../helpers/factory.js';

const getAllUsers = factory.getAll(User);

const getUser = factory.getOne(User, { path: 'subscriptions' });

const createUser = factory.createOne(User);

const deleteUser = factory.deleteOne(User);

const updateUser = factory.updateOne(User);

export { getAllUsers, getUser, createUser, deleteUser, updateUser };
