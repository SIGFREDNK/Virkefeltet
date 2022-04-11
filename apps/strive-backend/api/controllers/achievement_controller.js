import Achievement from '../models/achievement_model.js';
import { factory } from '@virkefeltet/core';

const getAllAchievements = factory.getAll(Achievement);

const getAchievement = factory.getOne(Achievement);

const createAchievement = factory.createOne(Achievement);

const deleteAchievement = factory.deleteOne(Achievement);

const updateAchievement = factory.updateOne(Achievement);

export {
    getAllAchievements,
    getAchievement,
    createAchievement,
    deleteAchievement,
    updateAchievement
};
