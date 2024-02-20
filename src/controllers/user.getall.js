const User = require("../models/user.model"); 

const listarUsuarios = async (req, res) => {
    const respuesta = await User.find({});
    res.send(respuesta); 
}
module.exports = listarUsuarios;
