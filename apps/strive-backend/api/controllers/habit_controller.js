import Habit from '../models/habit_model.js';
import { factory } from '@virkefeltet/core';
import { httpCodes } from '@virkefeltet/core';

const getAllHabits = factory.getAll(Habit);

const getHabit = factory.getOne(Habit);

const createHabit = factory.createOne(Habit);

const deleteHabit = factory.deleteOne(Habit);

const updateHabit = factory.updateOne(Habit);

const getMyHabits = async (req, res) => {
    const docs = await Habit.find({ user: req.user.id });
    if (!docs || docs.length === 0)
        return res.status(httpCodes.OK).json({
            status: 'failed',
            message: `Vi kunne ikke finde nogle vaner`
        });

    res.status(httpCodes.OK).json({
        status: 'success',
        data: { docs }
    });
};

export {
    getAllHabits,
    getHabit,
    createHabit,
    deleteHabit,
    updateHabit,
    getMyHabits
};
