var express = require('express');
var router = express.Router();
let app = router;
var model = require("../models/model");

app.post('/register', function (req, res) {

    var username = req.body.username;
    var email = req.body.email;
    var password = req.body.password;
    console.log(username);

    // var balance = parseInt(req.body.balance);
    // var bitcoin = parseInt(req.body.bitcoin);
    // var ethereum = parseInt(req.body.ethereum);
    model.connectToDb(function (dbo) {
        var myobj = {name: username, email: email, password: password};
        // var myobjBalance = {email: email, balance: balance, bitcoin: bitcoin, ethereum: ethereum};
        model.findUser(email, function (usersInfo) {
            if (usersInfo === null) {
                dbo.collection("users").insertOne(myobj, function (err, usersInfo) {
                    console.log("User created");
                });
                // dbo.collection("usersBalance").insertOne(myobjBalance, function (err, userBalance) {
                //     console.log("Balance created");
                //     res.redirect('../log');
                // });
            } else {
                res.send('User created');
                console.log("User already created");
            }
        });
        //dbo.collection("users").findOne({email: email}, function (err, usersInfo) {

        //});
    });
    //res.send('User are created');
});
router.post('/log', function (req, res, next) {
    var eMail = req.body.email;
    var passwordlog = req.body.password;
    model.connectToDb(function (dbo) {
        var myobjlog = {email: eMail, password: passwordlog};
        model.findUser(eMail, function (usersInfo) {
        //dbo.collection("users").findOne({email: eMail}, function (err, usersInfo) {

            console.log(usersInfo);
            if (usersInfo === null) {
                res.redirect('../log');
            } else {
                if (usersInfo.email === eMail) {
                    //session
                    req.session.eMail = eMail;
                    req.session.passwordlog = passwordlog;
                    res.redirect('../dash');
                }
            }
        });

    });
});
router.post('/editform', function (req, res) {
    var email = req.session.eMail;
    model.connectToDb(function (dbo) {
        model.findUser(email, function (usersInfo) {
            var newmail = req.body.email;
            var newname = req.body.username;
            var newpassword = req.body.password;
            var myobj = {name: usersInfo.name, email: usersInfo.email, password: usersInfo.password};
            var newdat = {name: newname, email: newmail, password: newpassword};
            console.log(newdat);
            var ime = usersInfo.name;
            console.log(ime);
            dbo.collection("users").update(myobj, newdat, function (err, res) {
                if (err) {
                    console.log(err);
                }
                console.log("1 document updated");
            });

        });
    });
    res.redirect('../editform');
});
router.post('/dash', function (req, res) {
    req.session = null;
    if (req.session === null) {
        res.redirect('../log');

    }else{
         res.send('../dash');
     }
});
router.post('/balance1', function (req, res, next) {
    var amo = parseInt(req.body.amo);
    var bit = parseInt(req.body.bit);
    var eth = parseInt(req.body.eth);
    var userToSend = req.body.email;
    model.connectToDb(function (dbo) {
        var email = req.session.eMail;
        //model.findUser(email, function (result) {
        model.findBalance(email, function (userBalance) {
            var myobj = {
                //name: result.name,
                email: userBalance.email,
                //password: result.password,
                balance: userBalance.balance,
                bitcoin: userBalance.bitcoin,
                ethereum: userBalance.ethereum
            };
            userBalance.balance = userBalance.balance - amo;
            var newBalance = userBalance.balance;
            userBalance.bitcoin = userBalance.bitcoin - bit;
            var newBitcoin = userBalance.bitcoin;
            userBalance.ethereum = userBalance.ethereum - eth;
            var newEthereum = userBalance.ethereum;
            if (userBalance.balance < amo && userBalance.bitcoin < bit && userBalance.ethereum) {
                res.send('you dont have enough money');
            } else {
                var newdat = {
                    //name: result.name,
                    email: userBalance.email,
                    //password: result.password,
                    balance: newBalance,
                    bitcoin: newBitcoin,
                    ethereum: newEthereum
                };
                dbo.collection("usersBalance").update(myobj, newdat, function (err, userBalance) {
                    if (err) {
                        console.log(err);
                    }
                    console.log("1 document updated");
                });
                console.log(userBalance);
                res.redirect('../balance1');
                // model.findUser(userToSend, function (result) {
                model.findBalance(userToSend, function (userBalance) {
                    // console.log(resul);
                    // console.log("dodavanje")
                    var myobj = {
                        email: userBalance.email,
                        balance: userBalance.balance,
                        bitcoin: userBalance.bitcoin,
                        ethereum: userBalance.ethereum
                    };
                    var newBalance = userBalance.balance = userBalance.balance + amo;
                    userBalance.bitcoin = userBalance.bitcoin + bit;
                    var newBitcoin = userBalance.bitcoin;
                    userBalance.ethereum = userBalance.ethereum + eth;
                    var newEthereum = userBalance.ethereum;
                    var newdat = {
                        email: userBalance.email,
                        balance: newBalance,
                        bitcoin: newBitcoin,
                        ethereum: newEthereum
                    };
                    dbo.collection("usersBalance").update(myobj, newdat, function (err, userBalance) {
                        if (err) {
                            console.log(err);
                        }
                        console.log("1 document updated");
                    });
                    console.log(userBalance);
                });
                //});
            }
        });
        //});
    });
});
router.post('/buy', function (req, res, next) {
    var priceSell = parseFloat(req.body.priceEth);
    var coin = req.body.coin;
    var amount = parseInt(req.body.amo);

    model.connectToDb(function (dbo) {
        model.findCurrencies2(coin,function (currenciesPair) {
            //console.log(currenciesPair.coin1);
            var email = req.session.eMail;
        model.findUser(email, function (usersInfo) {
            var myobj = {
                email: usersInfo.email,
                coin: currenciesPair.coin1,
                amo: amount,
                coins: currenciesPair.coin2,
                priceSell: priceSell
            };
            console.log(myobj);
                model.sortMarket(function (sorted) {
                var match = [];
                    for (var i in sorted) {
                        var re = sorted[i];
                        var arr = [re.coin, re.coins];
                        var s = [myobj.coins, myobj.coin];
                        match = arr.filter(function (e, pos) {
                            return s[pos] === arr[pos];
                        });
                        if (match.length === 2) {
                            if (coin === "eth/btc") {
                                global.priceCound = amount / priceSell;
                            }
                            if(priceCound === re.priceSell || priceCound >= re.priceSell) {
                                console.log("cenite odgovaraat");
                                var email = req.session.eMail;
                                model.findBalance(email, function (userBalance) {
                                    var myobj = {
                                        email: userBalance.email,
                                        balance: userBalance.balance,
                                        bitcoin: userBalance.bitcoin,
                                        ethereum: userBalance.ethereum
                                    };

                                    userBalance.bitcoin = parseFloat(userBalance.bitcoin - amount);
                                    var newBitcoin = userBalance.bitcoin;
                                    userBalance.ethereum = parseFloat(userBalance.ethereum + priceCound);
                                    var newEthereum = userBalance.ethereum;
                                    var newdat = {
                                        email: userBalance.email,
                                        balance: userBalance.balance,
                                        bitcoin: newBitcoin,
                                        ethereum: newEthereum
                                    };
                                    dbo.collection("usersBalance").update(myobj, newdat, function (err, userBalance) {
                                        if (err) {
                                            console.log(err);
                                        }
                                        console.log("1 document updated");
                                    });
                                });
                                var email1 = re.email;
                                global.amoo = re.amo;
                                model.findBalance(email1, function (userBalance) {
                                    var myobj1 = {
                                        email: userBalance.email,
                                        balance: userBalance.balance,
                                        bitcoin: userBalance.bitcoin,
                                        ethereum: userBalance.ethereum
                                    };
                                    //console.log(myobj);
                                    //var newBalance = userBalance.balance = userBalance.balance + amo;
                                    userBalance.bitcoin = parseFloat(userBalance.bitcoin + amoo);
                                    var newBitcoin = userBalance.bitcoin;
                                    userBalance.ethereum = parseFloat(userBalance.ethereum - priceCound);
                                    var newEthereum = userBalance.ethereum;
                                    var newdat = {
                                        email: userBalance.email,
                                        balance: userBalance.balance,
                                        bitcoin: newBitcoin,
                                        ethereum: newEthereum
                                    };
                                    dbo.collection("usersBalance").update(myobj1, newdat, function (err, userBalance) {
                                        if (err) {
                                            console.log(err);
                                        }
                                        console.log("1 document updated");
                                    });
                                    console.log("odgovaraat");
                                });
                                var myquery = {_id: re._id};
                                dbo.collection('market').deleteOne(myquery, function (err, obj) {
                                    if (err) throw err;
                                    console.log("izbrishan prv");
                                });
                                var myquery1 = {_id: myobj._id};
                                dbo.collection('market').deleteOne(myquery1, function (err, obj) {
                                    if (err) throw err;
                                    console.log("izbrishan vtor");

                                });
                                break;
                            }else{
                                //console.log(myobj);
                                dbo.collection("market").insertOne(myobj, function (err, usersInfo) {
                                    console.log("buy placed");
                                });
                            }
                        }else {
                            //console.log(myobj);
                            dbo.collection("market").insertOne(myobj, function (err, usersInfo) {
                                console.log("buy placed");
                            });
                            }

                    }
                });
            });
        });
        });
    res.redirect('../buy');
    });
router.post('/sell', function (req, res, next) {

    var priceSell = parseFloat(req.body.priceEth);
    var coin = req.body.coin;
    var amount = parseInt(req.body.amo);
    model.connectToDb(function (dbo) {
        model.findCurrencies2(coin,function (currenciesPair) {
            var email = req.session.eMail;
            model.findUser(email, function (usersInfo) {
                var myobj = {
                    email: usersInfo.email,
                    coin: currenciesPair.coin2,
                    amo: amount,
                    coins: currenciesPair.coin1,
                    priceSell: priceSell
                };
                model.sortMarket(function (sorted) {
                    for (var i in sorted) {
                        var re = sorted[i];
                        var arr = [re.coin, re.coins];
                        var s = [myobj.coins, myobj.coin];
                            var match = arr.filter(function (e, pos) {
                                return s[pos] === arr[pos];
                            });
                            var priceCound=0;
                            if (match.length === 2) {

                                    if (coin === "eth/btc") {
                                        priceCound = amount/priceSell;
                                    }
                                    if (priceCound === re.priceSell || priceCound <= re.priceSell) {
                                        console.log("cenite odgovaraat")
                                        model.findBalance(email, function (userBalance) {
                                            var myobj = {
                                                email: userBalance.email,
                                                balance: userBalance.balance,
                                                bitcoin: userBalance.bitcoin,
                                                ethereum: userBalance.ethereum
                                            };
                                            //console.log(myobj);
                                            //var newBalance = userBalance.balance = userBalance.balance + amo;
                                            userBalance.bitcoin = parseFloat(userBalance.bitcoin + priceCound);
                                            var newBitcoin = userBalance.bitcoin;
                                            userBalance.ethereum = parseFloat(userBalance.ethereum - amount);
                                            var newEthereum = userBalance.ethereum;
                                            var newdat = {
                                                email: userBalance.email,
                                                balance: userBalance.balance,
                                                bitcoin: newBitcoin,
                                                ethereum: newEthereum
                                            };
                                            dbo.collection("usersBalance").update(myobj, newdat, function (err, userBalance) {
                                                if (err) {
                                                    console.log(err);
                                                }
                                                console.log("1 document updated");
                                            });
                                        });
                                        model.findBalance(re.email, function (userBalance) {
                                            var myobj1 = {
                                                email: userBalance.email,
                                                balance: userBalance.balance,
                                                bitcoin: userBalance.bitcoin,
                                                ethereum: userBalance.ethereum
                                            };
                                            //console.log(myobj);
                                            //var newBalance = userBalance.balance = userBalance.balance + amo;
                                            userBalance.bitcoin = parseFloat(userBalance.bitcoin - amount);
                                            var newBitcoin = userBalance.bitcoin;
                                            userBalance.ethereum = parseFloat(userBalance.ethereum + priceCound);
                                            var newEthereum = userBalance.ethereum;
                                            var newdat = {
                                                email: userBalance.email,
                                                balance: userBalance.balance,
                                                bitcoin: newBitcoin,
                                                ethereum: newEthereum
                                            };
                                            dbo.collection("usersBalance").update(myobj1, newdat, function (err, userBalance) {
                                                if (err) {
                                                    console.log(err);
                                                }
                                                console.log("1 document updated");
                                            });
                                        });
                                        // model.findBalance(re.email, function (userBalance) {
                                        //     var myobj1 = {
                                        //         email: userBalance.email,
                                        //         balance: userBalance.balance,
                                        //         bitcoin: userBalance.bitcoin,
                                        //         ethereum: userBalance.ethereum
                                        //     };
                                        //     console.log(myobj);
                                        //     //var newBalance = userBalance.balance = userBalance.balance + amo;
                                        //     userBalance.bitcoin = parseFloat(userBalance.bitcoin - amount);
                                        //     var newBitcoin = userBalance.bitcoin;
                                        //     userBalance.ethereum = parseFloat(userBalance.ethereum + priceCound);
                                        //     var newEthereum = userBalance.ethereum;
                                        //     var newdat = {
                                        //         email: userBalance.email,
                                        //         balance: userBalance.balance,
                                        //         bitcoin: newBitcoin,
                                        //         ethereum: newEthereum
                                        //     };
                                        //     dbo.collection("usersBalance").update(myobj1, newdat, function (err, userBalance) {
                                        //         if (err) {
                                        //             console.log(err);
                                        //         }
                                        //         console.log("1 document updated");
                                        //     });
                                        // });
                                        console.log("odgovaraat");
                                        var myquery = {_id: re._id};
                                        dbo.collection('market').deleteOne(myquery, function (err, obj) {
                                            if (err) throw err;
                                        });
                                        var myquery1 = {_id: myobj._id};
                                        dbo.collection('market').deleteOne(myquery1, function (err, obj) {
                                            if (err) throw err;
                                        });
                                        break;
                                    }else {
                                        console.log("vnesuvam nova ponuda");
                                        dbo.collection("market").insertOne(myobj, function (err, result) {
                                            console.log("sell placed");
                                        });
                                    }
                            }
                             else {
                                console.log("vnesuvam nova ponuda");
                                dbo.collection("market").insertOne(myobj, function (err, result) {
                                    console.log("sell placed");
                                });
                            }
                            // if (re.email !== result.email && re.coin === myobj.coins && re.coins === myobj.coin ) {
                            //     myobj.priceSell=myobj.priceSell * 100;
                            //     var newObj=myobj.priceSell;
                            //     console.log(myobj.priceSell);
                            //     if(newObj === re.amoBit){
                            //         console.log("prodadeno");
                            //     }else{
                            //         dbo.collection("market").insertOne(myobj, function (err,result) {
                            //             console.log("sell placed");
                            //         });
                            //     }
                            // }
                        }

                });
            });
        });
    });
    res.redirect('../buy');
});
module.exports = router;
