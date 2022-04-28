import Project from '../models/project_model.js';
import { factory } from '@virkefeltet/core';
import { httpCodes } from '@virkefeltet/core';

const getAllProjects = factory.getAll(Project);

const getProject = factory.getOne(Project, { path: 'tasks' });

const createProject = factory.createOne(Project);

const deleteProject = factory.deleteOne(Project);

const updateProject = factory.updateOne(Project);

const getMyProjects = async (req, res) => {
    const docs = await Project.find({ user: req.user.id }).select('name');
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

const getMyProjectById = async (req, res) => {
    const docs = await Project.findById(req.params.id);

    if (!docs || docs.length === 0)
        return res.status(httpCodes.OK).json({
            status: 'failed',
            message: `Vi kunne ikke finde noget projekt med dette id`
        });

    res.status(httpCodes.OK).json({
        status: 'success',
        data: { docs }
    });
};

const addProjectSection = async (req, res) => {
    const docs = await Project.updateOne(
        { _id: req.body.id },
        {
            $push: {
                sections: {
                    name: req.body.sectionName,
                    column: req.body.column
                }
            }
        }
    );
    console.log(docs);
    res.status(httpCodes.OK).json({ message: 'success', data: { docs } });
};

const addStep = async (req, res) => {
    console.log(req.params.section);
    console.log(await Project.findOne({ 'sections._id': req.params.section }));
    const docs = await Project.updateOne(
        {
            'sections._id': req.params.section
        },
        {
            $push: {
                'sections.$.steps': {
                    title: req.body.stepName,
                    description: req.body.stepDescription,
                    priority: req.body.priority
                }
            }
        }
    );
    console.log(docs);
    res.status(httpCodes.OK).json({ message: 'success', data: { docs } });
};

const completeStep = async (req, res) => {
    console.log(req.body.id);
    const docs = await Project.updateOne();
};

const removeStep = async (req, res) => {
    console.log(req.body.id);
    const docs = await Project.updateOne();
};

export {
    getAllProjects,
    getProject,
    createProject,
    deleteProject,
    updateProject,
    getMyProjects,
    getMyProjectById,
    addProjectSection,
    addStep,
    removeStep,
    completeStep
};
