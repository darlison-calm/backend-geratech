const userModel = require('../../models/usersModel');


export const userExists = async (req, res, next) => {
    const id = parseInt(req.params.id);

    try {
        const user = await userModel.findOne({ where: { id } });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        req.user = user;
        next();
    } catch (error) {
        return res.status(500).json({ message: 'Server error', error: error.message });
    }
};

module.exports = userExists;
