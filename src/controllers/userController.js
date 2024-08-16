const User = require('../models/userModel');


// Créer un nouvel utilisateur
exports.createUser = async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


// Modifier un utilisateur
exports.updateUser = async (req, res) => {
    try {        
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true })
        if (!user) return res.status(404).json({ message: 'Utilisateur non trouvé' });
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Modifier un utilisateur
exports.getAllUsers = async (req, res) => {
    try {        
        const user = await User.find()
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// Modifier un utilisateur
exports.getUserById = async (req, res) => {
    try {        
        const user = await User.findById(req.params.id, req.body, { new: true })
        if (!user) return res.status(404).json({ message: 'Utilisateur non trouvé' });
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Modifier un utilisateur
exports.deleteUser = async (req, res) => {
    try {        
        const user = await User.findByIdAndDelete(req.params.id)
        if (!user) return res.status(404).json({ message: 'Utilisateur non trouvé' });
        res.status(200).json({ message: 'Utilisateur supprimé avec succès' });

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};