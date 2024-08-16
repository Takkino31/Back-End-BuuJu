let userSchema = require ("../schemas/userSchema")
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');

// Hachage du mot de passe avant l'enregistrement
userSchema.pre('save', async function(next) {
    if (!this.isModified('motDePasse')) return next();
    this.motDePasse = await bcrypt.hash(this.motDePasse, 10);
    next();
  }
);
  
const User = mongoose.model('User', userSchema);
module.exports = User;