var express = require('express');
var router = express.Router();
var model = require("../models/model");
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var api = express();
/* GET home page. */
router.post('/home', function(req, res) {
    // next();
    // var aa = res.getBody();
    console.log(req.body);
    // req.session.email = req.param('eMail');
    var log=req.body.login;
    // console.log(email)
    // var log = req.session.al;
    var email = req.body.email;
    // console.log(req.params);
    console.log(email);
    if (log == "true") {
        console.log("vlegov");
        model.findUser(email, function(userinfo){
            // res.writeHead(200,{'Contgent-type':'application/json'});
            console.log(userinfo);
            // var blagoj = [];
            // blagoj.push(userinfo);
            // console.log(blagoj);
            res.send(userinfo);

        });
    } else { 
        res.send("ojde")
    }
}); 
router.get('/register', function(req, res, next) {
    res.send(console.log(req.body));
});



// router.get('/editform', function(req, res, next) {
//     var email=req.session.eMail;
//     model.findUser(email,function(usersInfo){
//         res.render('editform', { title:'Express', email: email, ime:usersInfo.name , password:usersInfo.password });
//     });
// });
// router.get('/log', function(req, res, next) {
//     console.log(req.session.eMail);
//     if(req.session === null) {

//         res.redirect('../dash');
//       }
//       else {
//          res.render('indexlogin', {title: 'Express'});
//      }
//     });
// router.get('/home', function(req, res, next) {
//     res.render('home', { title: 'Express' });
// });
router.get('/userreservations', function(req, res, next) {
    var email=req.session.eMail;
    // console.log(email);
    if (req.session.eMail === null){
        res.send('prvo logirajse');
    }else {
        console.log(req.session.eMail);
        model.connectToDb(function(dbo){
            model.findUser(email,function(usersInfo){
        model.findUserReservations(email, function (userReservations) {
            console.log(userReservations);
            // model.connectToDb(function (dbo) {});
            // model.findBalance(email, function (userBalance) {
            //     console.log("userinfo");
            //     console.log(usersInfo);
            //     res.render('dash', {
            //         title: 'Express',
            //         email: email,
            //         ime: usersInfo.name,
            //         password: usersInfo.password,
            //         balance: userBalance.balance,
            //         bitcoin: userBalance.bitcoin,
            //         ethereum: userBalance.ethereum
            //     });
            // });
            res.send({userReservations});
        });
    });
        //console.log("dddd");

    });
    //res.render('logout', { title: 'Express' });
} 
});
router.get('/userinfo', function (req,res){
    var email=req.session.eMail;

    if (email !== null) {
        model.findUser(email, function(userinfo){
            res.send(userinfo);
        });
    }
});

router.get('/allusers', function(req,res){
    model.findAllUsers(function(dbo){
        res.send(dbo);
    })
});
router.get('/allpets', function(req,res){
    model.findAllPets(function(dbo){
        res.send(dbo);
    })
});
router.get('/allreservations', function(req,res){
    model.findAllReservations(function(dbo){
        res.send(dbo);
    })
});
router.get('/reservationNoLogin', function(req,res){
    model.findAllReservationsWithoutUsers(function(dbo){
        res.send(dbo);
        console.log("dbo");
        console.log(dbo);
    })
});
router.get('/adminreservations', function(req,res){
    model.findAllContact(function(dbo){
        res.send(dbo);
    })
});

// router.get('/balance1', function(req, res, next) {
//     var email=req.session.eMail;
//     var listOfEmail = [];
//     model.connectToDb(function(dbo){
//         model.findUser(email,function(usersInfo){
//             model.findBalance(email,function(userBalance){
//                 model.getALL(function(resu){
//             // for (var i = 0; i < resu.length; i++) {
//             //
//             //     listOfEmail.push(resu[i]["email"]);
//             // }
//             //console.log(result);
//             //console.log(resu);
//                     //console.log(resul);
//         res.render('balance1', {
//             title: 'Express',
//             resu: resu ,
//             balance: userBalance.balance,
//             result: "result",
//             ime:usersInfo.name});
//                 });
//             });
//         });
//     });
// });
module.exports = router;

