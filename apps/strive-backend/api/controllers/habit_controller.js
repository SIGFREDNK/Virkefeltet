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

const createMyHabit = async (req, res) => {
    if (req.body.type === 'Brug eksisterende') {
        try {
            const doc = await Task.findOne({
                user: req.user.id,
                name: req.body.name
            });
            return res.status(httpCodes.CREATED).json({
                status: 'success',
                data: { doc }
            });
        } catch (error) {
            return res.status(httpCodes.BAD_REQUEST).json({
                status: 'failed',
                message: error
            });
        }
    }
    try {
        const doc = await Habit.create({
            name: req.body.name,
            description: req.body.description,
            category: req.body.category,
            interval: req.body.interval,
            numberOfTimes: req.body.numberOfTimes,
            user: req.user.id,
            active: req.body.active,
            timesLeft: req.body.numberOfTimes
        });

        return res.status(httpCodes.CREATED).json({
            status: 'success',
            data: { doc }
        });
    } catch (error) {
        return res.status(httpCodes.BAD_REQUEST).json({
            status: 'failed',
            message: error
        });
    }
};

const getStreakAndCount = async (req, res) => {
    const doc = await Habit.find(
        { _id: req.params.id },
        { streak: 1, timesLeft: 1, lastUpdated: 1 }
    );

    if (!doc)
        return res
            .status(httpCodes.BAD_REQUEST)
            .json(
                'failed',
                message('Vi kunne ikke finde vanens streak eller antal gange')
            );

    return res.status(httpCodes.OK).json({
        status: 'success',
        data: {
            doc
        }
    });
};

export {
    getAllHabits,
    getHabit,
    createHabit,
    deleteHabit,
    updateHabit,
    getMyHabits,
    createMyHabit,
    getStreakAndCount
};
