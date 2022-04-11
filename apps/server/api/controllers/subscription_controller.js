import Subscription from '../models/subscription_model.js';
import * as factory from '../helpers/factory.js';

const getAllSubscriptions = factory.getAll(Subscription);

const getSubscription = factory.getOne(Subscription, {
    path: 'products'
});

const createSubscription = factory.createOne(Subscription);

const deleteSubscription = factory.deleteOne(Subscription);

const updateSubscription = factory.updateOne(Subscription);

export {
    getAllSubscriptions,
    getSubscription,
    createSubscription,
    deleteSubscription,
    updateSubscription
};
