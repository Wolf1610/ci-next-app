import express from "express";
import bcrypt from "bcrypt";

import { prisma } from "@repo/db/client";


const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hi there http")
});

app.post("/signup", async (req, res)=> {
    const { username, password } = req.body; 
    const hashPassword = await   bcrypt.hash(password, 10);
    const user = await prisma.user.create({
        data: {
            username,
            password: hashPassword,
        }
    });

    res.json({
        message: "Sign Up successful"
    })
});


console.log("http server is running on Port 4000");
app.listen(4000);