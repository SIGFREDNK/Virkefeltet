import Business from '../models/business_model.js';

const getBusinesses = async (req, res, next) => {
    req.businesses = await Business.find(
        {
            owners: { $all: [req.user.id] }
        },
        { _id: 1 }
    );
    req.locals = req.businesses;
    next();
};

export { getBusinesses };
