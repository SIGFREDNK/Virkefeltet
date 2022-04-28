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

const createMyTask = async (req, res) => {
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
    if (req.body.type === 'Opret ny') {
        let error = '';
        if (req.body.time === 'Interval') {
            if (!req.body.interval) error = 'Angiv venligst et interval';
            if (!req.body.timeStamp) error = 'Angiv venligst et klokkeslæt';
            if (req.body.interval === 'Ugentligt' && !req.body.weekday)
                error = 'Angiv venligst en ugedag';
            if (
                (req.body.interval === 'Månedligt' ||
                    req.body.interval === 'Årligt') &&
                !req.body.monthDay
            )
                error = 'Angiv venligst en dag';
            if (req.body.interval === 'Årligt' && !req.body.month)
                error = 'Angiv venligst en måned';
        }
        if (req.body.time === 'Dato') {
            if (!req.body.date) error = 'Angiv venligst en dato';
        }
        if (req.body.time === 'Periode') {
            if (!req.body.startDate) error = 'Angiv venligst en startdato';
            if (!req.body.endDate) error = 'Angiv venligst en slutdato';
        }
        if (error)
            return res.status(httpCodes.BAD_REQUEST).json({
                status: 'failed',
                message: error
            });
        try {
            const doc = await Task.create({
                name: req.body.name,
                description: req.body.description,
                category: req.body.category,
                time: req.body.time,
                interval:
                    req.body.time === 'Interval'
                        ? req.body.interval
                        : undefined,
                weekday:
                    req.body.interval === 'Ugentligt'
                        ? req.body.weekday
                        : undefined,
                monthDay:
                    req.body.interval === 'Monthly'
                        ? req.body.monthDay
                        : undefined,
                date:
                    req.body.time === 'Dato' || req.body.interval === 'Årligt'
                        ? req.body.date
                        : undefined,
                timeStamp:
                    req.body.interval === 'Dagligt' ||
                    req.body.interval === 'Ugentligt' ||
                    req.body.interval === 'Månedligt'
                        ? req.body.timeStamp
                        : undefined,
                startDate:
                    req.body.time === 'Periode'
                        ? req.body.startDate
                        : undefined,
                endDate:
                    req.body.time === 'Periode' ? req.body.endDate : undefined,
                user: req.user.id,
                active: true,
                //TODO: ADD SAVING FUNCTIONALITY
                saved: true,
                repeat: req.body.time === 'Interval' ? true : false
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
    return res.status(httpCodes.BAD_REQUEST).json({
        status: 'failed',
        message:
            'Vælg venligst om der er tale om en ny eller eksisterende opgave'
    });
};

export {
    getAllTasks,
    getTask,
    createTask,
    deleteTask,
    updateTask,
    getMyTasks,
    createMyTask
};
