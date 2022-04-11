import Skill from '../models/skill_model.js';
import { factory } from '@virkefeltet/core';
import { httpCodes } from '@virkefeltet/core';

const getAllSkills = factory.getAll(Skill);

const getSkill = factory.getOne(Skill);

const createSkill = factory.createOne(Skill);

const deleteSkill = factory.deleteOne(Skill);

const updateSkill = factory.updateOne(Skill);

const getMySkills = async (req, res) => {
    const docs = await Skill.find({ user: req.user.id });
    if (!docs || docs.length === 0)
        return res.status(httpCodes.OK).json({
            status: 'failed',
            message: `Vi kunne ikke finde nogle evner`
        });

    res.status(httpCodes.OK).json({
        status: 'success',
        data: { docs }
    });
};

export {
    getAllSkills,
    getSkill,
    createSkill,
    deleteSkill,
    updateSkill,
    getMySkills
};
