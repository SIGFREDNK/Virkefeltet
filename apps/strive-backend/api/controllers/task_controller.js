import Task from '../models/task_model.js';
import { factory } from '@virkefeltet/core';
import { httpCodes } from '@virkefeltet/core';

const getAllTasks = factory.getAll(Task);

const getTask = factory.getOne(Task);

const createTask = factory.createOne(Task);

const deleteTask = factory.deleteOne(Task);

const updateTask = factory.updateOne(Task);

const getMyTasks = async (req, res) => {
    const docs = await Task.find({ user: req.user.id });
    if (!docs || docs.length === 0)
        return res.status(httpCodes.OK).json({
            status: 'failed',
            message: `Vi kunne ikke finde nogle opgaver`
        });

    res.status(httpCodes.OK).json({
        status: 'success',
        data: { docs }
    });
};

export { getAllTasks, getTask, createTask, deleteTask, updateTask, getMyTasks };
