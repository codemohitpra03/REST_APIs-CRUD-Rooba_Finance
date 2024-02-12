const User = require('../models/User')
const { hashSync } = require('bcrypt');
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

async function handleGetUsers(req, res) {
    try {
        const users = await User.find({}, '-password');
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}
async function handleCreateUser(req, res) {
    const {name,email,age,country,password} = req.body
    if(!emailRegex.test(email)){
        return res.status(400).json({ message: "Email Not Valid" });
    }

    try {
        const user = new User({
            name,
            email,
            age,
            country,
            password:hashSync(password, 10)
        });
        const newUser = await user.save();

        const { password: omit, ...userWithoutPassword } = newUser.toObject();
        
        res.status(201).json(userWithoutPassword);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}
async function handleUpdateUser(req, res) {
    const { name, email, age, country, password } = req.body;
    try {
        const user = await User.findById(req.params.id);
        if (user == null) {
            return res.status(404).json({ message: 'User not found' });
        }
        
        if (name) user.name = name;
        if (email) user.email = email;
        if (age) user.age = age;
        if (country) user.country = country;

        
        if (password) {
            user.password = hashSync(password, 10);
        }

        const updatedUser = await user.save();
        
        const { password: omit, ...userWithoutPassword } = updatedUser.toObject();
        res.json(userWithoutPassword);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}
async function handleDeleteUser(req, res) {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.json({ message: 'User deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports = {
    handleCreateUser,
    handleUpdateUser,
    handleDeleteUser,
    handleGetUsers
}