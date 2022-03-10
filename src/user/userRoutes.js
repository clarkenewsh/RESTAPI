const { Router } = require("express");
const { addUser, login, updatePassword, deleteUser  } = require("./userControllers");
const { hashPassword, decryptPassword, checkToken} = require("../middleware");
const userRouter = Router();

// when post request is made to /user, hash the password and use next() to move on to addUser controller
userRouter.post("/user", hashPassword, addUser);
userRouter.post("/login", decryptPassword, login);
userRouter.get("/user", checkToken, login);
userRouter.patch("/user", hashPassword, checkToken, updatePassword);
userRouter.delete("/user/:id", deleteUser);

module.exports = userRouter;