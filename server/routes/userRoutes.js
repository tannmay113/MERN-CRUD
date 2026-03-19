import express from "express";
import { createUser, deleteUserById, getAllUser, getUserById, updateUserById } from "../controller/userController.js";

const route = express.Router();

route.post("/CreateUser", createUser);
route.get("/getAllUser", getAllUser);
route.get("/getUserById/:id", getUserById);
route.put("/updateUserById/:id", updateUserById);
route.delete("/deteleById/:id", deleteUserById);

export default route;