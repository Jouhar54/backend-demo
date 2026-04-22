export const signup = async (req, res) => {
    try {
        const users = await User.find();
        console.log(users);
        res.status(200).json({success:true, message:`Fetching success`, data:users});
    } catch (error) {
        res.status(400).json(error.message);
    }
}