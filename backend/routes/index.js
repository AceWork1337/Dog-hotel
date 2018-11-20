var express = require('express');
var router = express.Router();
var model = require("../models/model");
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send(console.log('ace'));
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
// router.post('/buy', function(req, res, next) {
//     // var email=req.session.eMail;
//     // var coinsList = [];
//     // var sList = [];
    
//     model.findAllUsers("mydb")
//     //var name=req.session.name;
//     //res.render('buy', {title: 'Express'});
//     res.send(dbo);
// });
// router.get('/buy', function(req, res, next) {
//   var email=req.session.eMail;
//   var coinsList = [];
//   var sList = [];
//   //var name=req.session.name;
//   model.connectToDb(function(dbo){
//       model.findUser(email,function(usersInfo){
//           //console.log(usersInfo);
//           model.findBalance(email,function(userBalance) {
//               //coinsList = Object.keys(userBalance).slice(3);
//               //console.log(coinsList);
//               model.findCurrencies(function (currenciesPair) {
//                   // for (var i in currenciesPair) {
//                   //     var d =currenciesPair[i];
//                   //     coinsList = Object.keys(d);
//                   //     sList = Object.keys(coinsList.keys('name'));
//                   //
//                   //     console.log(coinsList);
//                   // }
//                   // //sList = Object.keys(coinsList);
//                   // console.log(sList);
//                  //console.log(currenciesPair);
//                   model.getAllMarket(function (marketOffers) {
//                       // model.getALL(function(resu){
//                       //model.getAllReference(function(re){
//                       //     for (var i in resu) {
//                       //         //console.log(i);
//                       //           var resi=resu[i];
//                       //          // console.log(resi);
//                       //           for (var a in resi){
//                       //               console.log(a);
//                       //          listOfEmail.push(a);
//                       //      }}
//                       // listOfEmail.slice(1, 3);
//                       //console.log(result);
//                       //console.log(resul);
//                       //console.log(resu);
//                       res.render('buy', {
//                           title: 'Express',
//                           marketOffers: marketOffers,
//                           balance: userBalance.balance,
//                           result: "result",
//                           ime: usersInfo.name,
//                           coins: currenciesPair
//                       });
//                   });
//                   //});
//               });
//           });
//       });
//   });
//   //res.render('buy', {title: 'Express'});
// });
router.get('/register', function(req, res, next) {
    res.send(console.log(req.body));
});


// var app = express();
// var model = require("../models/model");

// let app = router;
// app.post('/register', function (req, res) {

//     var username = req.body.username;
//     var email = req.body.email;
//     var password = req.body.password;
//     console.log(req.body);

//     // var balance = parseInt(req.body.balance);
//     // var bitcoin = parseInt(req.body.bitcoin);
//     // var ethereum = parseInt(req.body.ethereum);
//     model.connectToDb(function (dbo) {
//         var myobj = {name: username, email: email, password: password};
//         // var myobjBalance = {email: email, balance: balance, bitcoin: bitcoin, ethereum: ethereum};
//         model.findUser(email, function (usersInfo) {
//             // if (usersInfo === null) {
//                 dbo.collection("users").insertOne(myobj, function (err, usersInfo) {
//                     console.log("User created");
//                     res.send('User  created');
//                 // });
//                 // dbo.collection("usersBalance").insertOne(myobjBalance, function (err, userBalance) {
//                 //     console.log("Balance created");
//                 //     res.redirect('../log');
//                 // });
//             // } else {
//                 // res.send('User  already created');
//                 // console.log("User already created");
//             // }
//         });
//         //dbo.collection("users").findOne({email: email}, function (err, usersInfo) {

//         //});
//     });
//     //res.send('User are created');
// });

// });

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
router.get('/dash', function(req, res, next) {
    var email=req.session.eMail;
    // console.log(email);
    // if (req.session.eMail === null){
        // res.redirect('../log');
    // }else {
        console.log(req.session.eMail);
        model.findUser(email, function (usersInfo) {
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
            res.render('dash')
        });

        //console.log("dddd");

    // }
    //res.render('logout', { title: 'Express' });
});
module.exports = router;

