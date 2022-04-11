// IMPORTS
import User from '../models/user_model.js';
import * as auth from '../helpers/auth.js';
import { httpCodes } from '@virkefeltet/core';

const restricted = async (req, res, next) => {
    let token;
    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')
    ) {
        token = req.headers.authorization.split(' ')[1];
    } else if (req.cookies.VIRKEFELTET_TOKEN) {
        token = req.cookies.VIRKEFELTET_TOKEN;
    }

    if (!token) {
        return res.status(httpCodes.UNAUTHORIZED).json({
            message: 'Du skal være logget ind for at få adgang til denne side'
        });
    }

    const decoded = await auth.verify(token);

    const currentUser = await User.findById(decoded.id);
    if (!currentUser) {
        return res.status(httpCodes.BAD_REQUEST).json({
            message: 'Brugeren, der ejer denne token, eksisterer ikke længere'
        });
    }

    if (currentUser.changedPasswordAfter(decoded.iat)) {
        return res.status(httpCodes.UNAUTHORIZED).json({
            message:
                'Brugeren har fornyeligt ændret adgangskode. Log venligst ind igen'
        });
    }

    req.user = currentUser;
    res.locals.user = currentUser;
    next();
};

const getUser = async (req, res, next) => {
    if (req.cookies.VIRKEFELTET_TOKEN) {
        try {
            const decoded = await jwt.verify(req.cookies.VIRKEFELTET_TOKEN);

            const currentUser = await User.findById(decoded.id);
            if (!currentUser) {
                return next();
            }

            if (currentUser.changedPasswordAfter(decoded.iat)) {
                return next();
            }

            res.locals.user = currentUser;
            return next();
        } catch (err) {
            return next();
        }
    }
    next();
};

const permission =
    (...roles) =>
    async (req, res, next) => {
        const user = await User.findById(req.user._id);

        const role = user.role;

        if (!roles.includes(role))
            return res.status(httpCodes.UNAUTHORIZED).json({
                message: 'Du har ikke adgang til denne side'
            });

        next();
    };

export { restricted, getUser, permission };
