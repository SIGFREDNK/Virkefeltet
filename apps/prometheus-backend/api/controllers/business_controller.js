import Business from '../models/business_model.js';
import { factory } from '@virkefeltet/core';
import { httpCodes } from '@virkefeltet/core';

// USER

const getUsersBusinesses = async (req, res) => {
    let businesses = await Business.find({ _id: req.businesses });
    console.log(businesses);
    if (!businesses)
        return res.status(httpCodes.NOT_FOUND).json({
            status: 'failed',
            message: 'Du har ingen virksomheder'
        });

    res.status(httpCodes.OK).json({ businesses });
};

// ADMIN

const getAllBusinesses = factory.getAll(Business);

const getBusiness = factory.getOne(Business);

const createBusiness = factory.createOne(Business);

const deleteBusiness = factory.deleteOne(Business);

const updateBusiness = factory.updateOne(Business);

export {
    getAllBusinesses,
    getBusiness,
    createBusiness,
    deleteBusiness,
    updateBusiness,
    getUsersBusinesses
};
