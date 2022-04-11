import { httpCodes } from '@virkefeltet/core';

const requireSubscription = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role))
            return res.status(httpCodes.FORBIDDEN).json({
                status: 'failed',
                message: 'Du har ikke adgang til denne handling'
            });

        next();
    };
};

export default requireSubscription;
