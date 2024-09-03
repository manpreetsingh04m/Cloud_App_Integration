const Calendly = require('../services/calendly');

require("dotenv").config()

const calendlyService = new Calendly(process.env.CALENDLY_API_KEY);

const UserController = {
    getUser: async (req, res) => {
        const { uuid } = req.params;
        try {
            const user = await calendlyService.getUser(uuid);
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
};

module.exports = UserController;