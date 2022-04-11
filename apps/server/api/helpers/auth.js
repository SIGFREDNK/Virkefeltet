// DEPENDENCIES
import jwt from 'jsonwebtoken';
import { promisify } from 'util';

// IMPORTS
import { httpCodes } from '@virkefeltet/core';

export function login(res, user) {
    const subscriptions = user.subscriptions.map(
        subscription => subscription.product.name
    );
    const payload = {
        id: user._id,
        role: user.role,
        subscriptions
    };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_LIFETIME.toString(),
        audience: process.env.JWT_AUDIENCE,
        issuer: process.env.JWT_ISSUER
    });

    const cookieLifetime =
        process.env.JWT_COOKIE_LIFETIME * 24 * 60 * 60 * 1000;

    const cookieOptions = {
        expires: new Date(Date.now() + cookieLifetime),
        httpOnly: true
    };

    if (process.env.NODE_ENV === 'production') cookieOptions.secure = true;

    res.cookie('VIRKEFELTET_TOKEN', token, cookieOptions);

    res.status(httpCodes.OK).json({
        status: 'success',
        token,
        data: { user }
    });
}

export function logout(res) {
    res.cookie('VIRKEFELTET_TOKEN', '', 1);
    res.status(200).json({
        status: 'success',
        message: 'Du er nu logget ud'
    });
}

export function validate(token) {
    const promise = promisify(jwt.verify)(token, process.env.JWT_SECRET);
    return promise;
}
