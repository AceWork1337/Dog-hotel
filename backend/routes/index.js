var express = require('express');
var router = express.Router();
var model = require("../models/model");
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var api = express();
/* GET home page. */
router.get('/home', function(req, res, next) {
    
    // req.session.email = req.param('eMail');
    // var email = [];
    // email.push(req.Cookies);
    var email = req.body.eMail;
    // sessionStorage.getItem()
    // var email =req.sessionStorage.getItem('eMail');
    console.log(email)
    // var log = req.session.al;
    if (email !== null) {
        model.findUser(email, function(userinfo){
            // res.writeHead(200,{'Contgent-type':'application/json'});
            console.log(userinfo);
            var blagoj = [];
            blagoj.push(userinfo);
            console.log(blagoj);
            res.send(blagoj);
        });
    } 
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

router.get('/allreservations', function(req,res){
    model.findAllReservations(function(dbo){
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

