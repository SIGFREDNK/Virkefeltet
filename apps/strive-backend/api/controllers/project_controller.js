import Project from '../models/project_model.js';
import { factory } from '@virkefeltet/core';
import { httpCodes } from '@virkefeltet/core';

const getAllProjects = factory.getAll(Project);

const getProject = factory.getOne(Project, { path: 'tasks' });

const createProject = factory.createOne(Project);

const deleteProject = factory.deleteOne(Project);

const updateProject = factory.updateOne(Project);

const getMyProjects = async (req, res) => {
    const docs = await Project.find({ user: req.user.id });
    if (!docs || docs.length === 0)
        return res.status(httpCodes.OK).json({
            status: 'failed',
            message: `Vi kunne ikke finde nogle projekter`
        });

    res.status(httpCodes.OK).json({
        status: 'success',
        data: { docs }
    });
};

export {
    getAllProjects,
    getProject,
    createProject,
    deleteProject,
    updateProject,
    getMyProjects
};
