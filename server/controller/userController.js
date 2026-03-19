import User from "../model/userModel.js";

export const createUser = async (req, res) => {
    try {
        const { email } = req.body;

        // ✅ 1. Check first
        const userExist = await User.findOne({ email });

        if (userExist) {
            return res.status(400).json({ message: "User already exists" });
        }

        // ✅ 2. Then create
        const newUser = new User(req.body);
        const savedData = await newUser.save();

        res.status(201).json(savedData);

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
};


export const getAllUser = async (req, res) => {
    try {
        const user = await User.find();
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(user);
    } catch (error) {
        console.log(error);
        res.status(404).json({ message: error.message });
    }
};


export const getUserById = async (req, res) => {

    try {
        const { id } = req.params;
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(user);
    } catch (error) {
        console.log(error);
        res.status(404).json({ message: error.message });
    }
}

export const updateUserById = async (req, res) => {

    try {
        const { id } = req.params;
        const user = await User.findById(id);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(updatedUser);

    } catch (error) {
        console.log(error);
        res.status(404).json({ message: error.message });
    }
}

export const deleteUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        await User.findByIdAndDelete(id);
        res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        console.log(error);
        res.status(404).json({ message: error.message });
    }
}