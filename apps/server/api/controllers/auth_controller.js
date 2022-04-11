// IMPORTS
import User from '../models/user_model.js';
import { httpCodes } from '@virkefeltet/core';
import * as auth from '../helpers/auth.js';

export async function signup(req, res, next) {
    const phone = {
        countryCode: req.body.countryCode,
        phoneNumber: req.body.phoneNumber
    };
    const address = {
        streetName: req.body.streetName,
        streetNumber: req.body.streetNumber,
        city: req.body.city,
        postalCode: req.body.postalCode,
        country: req.body.country
    };
    try {
        const user = await User.create({
            firstname: req.body.firstname,
            surname: req.body.surname,
            email: req.body.email,
            phone,
            password: req.body.password,
            passwordConfirm: req.body.passwordConfirm,
            address
        });
        auth.login(res, user);
    } catch (error) {
        if (error.code === 11000)
            return res.status(httpCodes.BAD_REQUEST).json({
                status: 'failed',
                message: 'Der findes allerede en bruger med denne email'
            });
        if (error.name === 'ValidationError') {
            const message = error.message.split(': ');
            console.log(message);
            return res
                .status(httpCodes.BAD_REQUEST)
                .json({ message: message[2] });
        }
        res.status(httpCodes.SERVER_ERROR).json(error);
    }
}

export async function login(req, res, next) {
    const { email, password } = req.body;
    const user = await User.findOne({ email })
        .select('+password')
        .populate({ path: 'subscriptions' });

    if (!user || !(await user.validatePassword(password, user.password)))
        return res.status(httpCodes.UNAUTHORIZED).json({
            status: 'failed',
            message: 'Forkert brugernavn eller adgangskode'
        });

    auth.login(res, user);
}

export function logout(req, res) {
    return auth.logout(res);
}
