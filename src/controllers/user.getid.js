const User = require("../models/user.model"); 

const UsuarioId = async (req, res) => {
    const id = req.params.id;
    const respuesta = await User.findById(id);
    res.send(respuesta); 
};

module.exports = UsuarioId;