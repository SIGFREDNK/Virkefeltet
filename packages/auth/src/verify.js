import jwt from 'jsonwebtoken';
import { promisify } from 'util';
import { httpCodes } from '@virkefeltet/core';

const verify = (token, key, res) => {
    try {
        const promise = promisify(jwt.verify)(token, key);
        return promise;
    } catch (error) {
        res.status(httpCodes.UNAUTHORIZED).json({
            status: 'failed',
            message: 'Adgang Nægtet'
        });
    }
};

export default verify;
