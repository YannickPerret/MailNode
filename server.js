"use strict";
const express = require('express')
const mailer = require('nodemailer')

const app = express()
const port = 3080;

const hostname = '127.0.0.1';

app.use(express.json({limit: '50mb'}));
app.use(
    express.urlencoded({
        extended : true,
        limit: '50mb'
    }));
// Add headers before the routes are defined
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, HEAD, POST, OPTIONS, PUT');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', false);

    // Pass to next layer of middleware
    next();
});


app.post("/postEmail", (req, res) => {

    if (!req.body) {
        res.status(400).send({message: "Post ne peut pas être vide !"});
        return
    }
    
    console.log("test")
    /*async function main(){
        let account = {
            user:"contact@yannickperret.com",
            pass:'Suplivent27'
        }

        let transporter = mailer.createTransport({
            host:"mail.infomaniak.ch",
            port :465,
            secure:true,
            auth:{
                user: account.user,
                pass: account.pass
            },
            tls: {
                // do not fail on invalid certs
                rejectUnauthorized: true,
            },
        })

    let info = await transporter.sendMail({
            from : 'noreply@yannickperret.com',
            to: "dev@yannickperret.com",
            subject:"Hello comment ça va ?",
            html: "<b>Salut tu veux3 jouer</b>   "
        });


        console.log("Messages Sent : %s", info.messageId)
        console.log("Preview URL : %s", mailer.getTestMessageUrl(info));
    }
    main().catch(console.error)*/

})

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
