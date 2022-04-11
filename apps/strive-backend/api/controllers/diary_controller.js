import Diary from '../models/diary_model.js';
import { factory } from '@virkefeltet/core';
import { httpCodes } from '@virkefeltet/core';

const getAllDiaryEntries = factory.getAll(Diary);

const getDiaryEntry = factory.getOne(Diary);

const createDiaryEntry = factory.createOne(Diary);

const deleteDiaryEntry = factory.deleteOne(Diary);

const updateDiaryEntry = factory.updateOne(Diary);

const getMyDiaryEntries = async (req, res) => {
    const docs = await Diary.find({ user: req.user.id });
    if (!docs || docs.length === 0)
        return res.status(httpCodes.OK).json({
            status: 'failed',
            message: `Vi kunne ikke finde nogle dagbogsoptegnelser`
        });

    res.status(httpCodes.OK).json({
        status: 'success',
        data: { docs }
    });
};

export {
    getAllDiaryEntries,
    getDiaryEntry,
    createDiaryEntry,
    deleteDiaryEntry,
    updateDiaryEntry,
    getMyDiaryEntries
};
