import requireAuth from './src/requireAuth.js';
import requireRole from './src/requireRole.js';
import requireSubscription from './src/requireSubscription.js';
let key;

export default secret => {
    key = secret;
    return {
        requireAuth: requireAuth(key),
        requireRole,
        requireSubscription
    };
};
