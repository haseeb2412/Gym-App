const express = require("express");
const router = express.Router();
const sendEmail =require("../Utils/mail")

router.get("/",(req,res)=>{
    res.json({msg:"we are connected to front end "})
});



router.post("/send/mail", async (req, res) => { // Add 'async' to the function
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.json({ msg: "Please fill all the fields" }); // Add 'return' to stop execution
    }

    try {
        await sendEmail({
            email: "mernhaseeb@gmail.com",
            subject: "Gym Website Contact",
            message,
            userEmail: email,
        });
        res.status(200).json({ msg: "Email sent successfully" }); // Add success response
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).json({ msg: "Failed to send email" }); // Add error response
    }
});



module.exports = router;