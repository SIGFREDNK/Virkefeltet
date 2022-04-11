import { httpCodes } from '@virkefeltet/core';

const requireSubscription = subscription => {
    return (req, res, next) => {
        if (!req.user.subscriptions.includes(subscription))
            return res.status(httpCodes.FORBIDDEN).json({
                status: 'failed',
                message: `Du har ikke et abonnement på ${subscription}`
            });

        next();
    };
};

export default requireSubscription;
