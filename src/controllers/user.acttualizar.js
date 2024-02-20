const User = require("../models/user.model"); 

const ActualizarUser = async (req, res) => {
    const body = req.body;
    const id = req.params.id;
    const respuesta = await User.findOneAndUpdate({_id: id}, body);
    res.send(respuesta); 
};

module.exports = ActualizarUser;
