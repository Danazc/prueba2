const User = require("../models/user.model"); 

const DeleteUser = async (req, res) => {
    const id = req.params.id;
    const respuesta = await User.deleteOne({_id: id});
    res.send(respuesta); 
};

module.exports = DeleteUser;