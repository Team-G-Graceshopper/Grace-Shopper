const {
	models: { User },
} = require('../db');

const requireToken = async (req, res, next) => {
	try {
		const token = req.headers.authorization;
		const user = await User.findByToken(token);
		req.user = user;
		next();
	} catch (err) {
		next(err);
	}
};

const isAdmin = (req, res, next) => {
    try {
        if (!req.user.isAdmin) {
            return res.status(403).send('No admin access')
        }
    } catch (err) {
        next(err)
    }
}

module.exports = {
    requireToken,
    isAdmin,
}