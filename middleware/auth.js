const { getUserSessionId } = require('../utils/uidStore.js')

async function restricLoggedUser(req, res, next) {
    const userUid = req.cookies?.uid;
    if (!userUid) return res.redirect('/login');
    const user = getUserSessionId(userUid)
    if (!user) return res.redirect('/login');
    req.user = user;
    next();
}

module.exports = restricLoggedUser;