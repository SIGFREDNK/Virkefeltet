import { httpCodes } from '@virkefeltet/core';
import verify from './verify.js';

export default key => {
    return async (req, res, next) => {
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
                message:
                    'Du skal være logget ind for at få adgang til denne side'
            });
        }

        try {
            const decoded = await verify(token, key, res);

            if (decoded.iss !== 'https://secure.virkefeltet.dk')
                return res.status(httpCodes.FORBIDDEN).json({
                    status: 'failed',
                    message:
                        'Adgang nægtet, da udstederen af din adgangstoken ikke er os'
                });

            req.user = decoded;
            res.locals.user = decoded;

            next();
        } catch (error) {
            res.status(httpCodes.UNAUTHORIZED).json({
                status: 'failed',
                message: 'Adgang nægtet'
            });
        }
    };
};
