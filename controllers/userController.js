import User from "../models/userSchema.js";
import bcrypt from "bcrypt";

export const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        // console.log(name, email, password);

        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const user = await User.create({ name, email, password: hashedPassword });
        res.status(201).json({ success: true, message: "User created successfully", });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
}
