//importation de mongoose
const mongoose = require('mongoose');

//template du produit a créé
const sauceSchema = mongoose.Schema({
userID: { type: String, require: true },
name: { type: String, require: true },
manufacturer: { type: String, require: true },
description: { type: String, require: true },
mainPepper: { type: String, require: true },
imageURL: { type: String, require: true },
heat: { type: Number, require: true },
likes: { type: Number, default: 0, require: false },
dislikes: { type: Number, default: 0, require: false },
usersLiked: { type: [String], require:false },
usersDisliked: { type: [String], require:false },
});

//Exportation du template (Nom du modèle, nom de la constante)
module.exports = mongoose.model('Sauce', sauceSchema);