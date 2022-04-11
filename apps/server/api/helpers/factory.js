// IMPORTS
import APIFeatures from './api_features.js';
import { httpCodes } from '@virkefeltet/core';

const getAll = Model => async (req, res) => {
    let filter = {};

    const features = new APIFeatures(Model.find(filter), req.query)
        .filter()
        .sort()
        .limitFields()
        .paginate();

    const docs = await features.query;

    return res.status(httpCodes.OK).json({
        status: 'success',
        results: docs.length,
        data: { docs }
    });
};

const getOne = (Model, options) => async (req, res) => {
    let query = Model.findById(req.params.id);

    if (options) query.populate(options);

    const doc = await query;

    if (!doc)
        return res.status(httpCodes.BAD_REQUEST).json({
            status: 'failed',
            message: `Der findes ingen bruger med id: ${req.params.id}`
        });

    res.status(httpCodes.OK).json({
        status: 'success',
        data: { doc }
    });
};

const createOne = Model => async (req, res) => {
    try {
        const doc = await Model.create(req.body);

        res.status(httpCodes.CREATED).json({
            status: 'success',
            data: { doc }
        });
    } catch (error) {
        res.status(httpCodes.BAD_REQUEST).json({
            status: 'failed',
            message: error
        });
    }
};

const deleteOne = Model => async (req, res) => {
    const doc = await Model.findByIdAndRemove(req.params.id);

    if (!doc)
        return res.status(httpCodes.BAD_REQUEST).json({
            status: 'failed',
            message: `Der findes ingen bruger med id: ${req.params.id}`
        });

    res.status(httpCodes.DELETED).json({
        status: 'success',
        data: null
    });
};

const updateOne = Model => async (req, res) => {
    const doc = await Model.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    });

    if (!doc)
        return res.status(httpCodes.BAD_REQUEST).json({
            status: 'failed',
            message: `Der findes ingen bruger med id: ${req.params.id}`
        });

    res.status(httpCodes.OK).json({
        status: 'success',
        data: { doc }
    });
};

export { getAll, getOne, createOne, deleteOne, updateOne };
