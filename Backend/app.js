import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser"; //npm i  body-parser
import cors from "cors" //npm i cors
import nodemailer from "nodemailer";
import loginecom from "./models/loginecom"
import signupecom from "./models/signupecom";
const app = express(); //Creating Route paths
app.use(bodyParser.json())
app.use(cors())
app.use(express.json())
app.use(express.static('public'));
mongoose.connect('mongodb+srv://21a91a04k7:QBr6Sx7GF2f0Kx50@cluster0.mdslmml.mongodb.net/cluster0?retryWrites=true&w=majority') //connect to  the database
    .then(() => app.listen(5000))
    .then(() =>
        console.log("Connected to Database& listning to localhost 5000")
    )
    .catch((err) => console.log(err));
// login ecom
app.post('/loginecom', (req, res, next) => {
    console.log(req.body.formdata)
    const { email, password } = req.body.formdata;
    const log = new loginecom({
        email,
        password
    });
    log.save();
    return res.send({ msg: "inserted", result: log })

})
app.post('/signupecom', (req, res, next) => {
    console.log(req.body.formdata1)
    const { username, email, password } = req.body.formdata1;
    const sig = new signupecom({
        username,
        email,
        password
    })
    try {
        sig.save()
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'madhankandregula15@gmail.com',
                pass: 'sowr mzku ndjr rvqf',
            }
        });

        var mailOptions = {
            from: 'madhankandregula15@gmail.com',
            to: email,
            subject: 'Fashion Flicker',
            text: 'Hello ' + `${sig.username}` + 'Thank You for Registering to  Fashion Flicker. Enjoy Your Shopping Through Fashion Flicker . Fashion Flicker makes your shopping more Easier.'
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
    }
    catch (err) {
        console.log(err)
    }
    return res.send({ msg: "inserted", result: sig })
})

app.get('/singupcred', async (req, res, next) => {
    // res.send("success")
    let creddata
    try {
        creddata = await signupecom.find()
    }
    catch (err) {
        console.log(err)
    }
    if (!creddata) {
        console.log("No credentials data")
    }
    return res.status(200).json({ creddata })
})

