const { Router } = require("express");
const { addUser, login } = require("./userControllers");
const { hashPassword, decryptPassword, checkToken } = require("../middleware");
const userRouter = Router();

// when post request is made to /user, hash the password and use next() to move on to addUser controller
userRouter.post("/user", hashPassword, addUser);
userRouter.post("/login", decryptPassword, login);
userRouter.get("/user", checkToken, login);

module.exports = userRouter;