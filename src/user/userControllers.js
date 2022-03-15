const jwt = require("jsonwebtoken");
const User = require("./userModel");

exports.addUser = async (req, res) => {
    try {
      const newUser = await User.create(req.body);
      const token = await jwt.sign({ _id: newUser._id }, process.env.SECRET);
      res.status(200).send({ user: newUser.username, token });
    } catch (error) {
      console.log(error);
      res.status(500).send({ err: error.message });
    }
  };
  
  exports.login = async (req, res) => {
    try {
      const token = await jwt.sign({ _id: req.user._id }, process.env.SECRET);
      res.status(200).send({ user: req.user.username, token });
    } catch (error) {
      console.log(error);
      res.status(500).send({ err: error.message });
    }
  };

  // update user password from an already logged in user
  exports.updatePassword = async (req, res) => {
    try {
        const updateUser = await User.updateOne(
            {username: req.user.username}, 
            {password: req.body.password}
            );
            if (updateUser.modifiedCount > 0) {
                res.status(200).send({msg : "Successfully updated user"})
            } else {
                throw new Error("Did not update");
            }
    } catch (error) {
        console.log(error);
        res.status(500).send({ err: error.message });
    }
  };

  exports.deleteUser = async (req, res) => {
    try {
      const deleteUser = await User.deleteOne({_id: req.params.id});
      // if (deleteUser.modifiedCount > 0) {
        res.status(200).send({msg : "Successfully deleted user"})
    // } else {
    //     throw new Error("Did not delete");
    // }
    } catch (error) {
      console.log(error);
      res.status(500).send({ err: error.message });
    }
  };