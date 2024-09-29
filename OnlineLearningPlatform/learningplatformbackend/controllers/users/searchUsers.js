const User = require('../../models/userSchema');

const searchUsers = async (req, res) => {
    try {
        const { filter } = req.body;
        if (!filter) {
            return res.status(400).json({ message: 'Filter is required' });
        }

        const users = await User.find({
            $or: [
                { username: { $regex: filter, $options: 'i' } },
                { name: { $regex: filter, $options: 'i' } },
                { email: { $regex: filter, $options: 'i' } },
                { phone: { $regex: filter, $options: 'i' } },
                { location: { $regex: filter, $options: 'i' } },
                { bio: { $regex: filter, $options: 'i' } },
                { company: { $regex: filter, $options: 'i' } }
            ]
        });

        res.json(users);
    } catch (error) {
        console.error('Error searching users:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = searchUsers;