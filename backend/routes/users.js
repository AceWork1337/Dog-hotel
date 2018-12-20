var express = require('express');
var router = express.Router();
// let app = router;
var model = require("../models/model");
var Cookies = require('cookies')
router.post('/register', function (req, res) {
    var firstName = req.body.firstName;
    var lastName = req.body.lastName;
    var username = req.body.username;
    var email = req.body.email;
    var password = req.body.password;
    var phone = parseInt(req.body.phone);
    console.log(username);
    model.connectToDb(function (dbo) {
        var myobj = {firstName:firstName, lastName:lastName, username: username, email: email, password: password, phone:phone ,admin:false};
        model.findUser(email, function (usersInfo) {
            console.log(usersInfo);
            if (usersInfo === null) {
                dbo.collection("users").insertOne(myobj, function (err, usersInfo) {
                    console.log("User created");
                    res.send(true);
                });
            } else {
                res.send(false);
                console.log("User already created");
            }
        });
    });
});
router.post('/modify', function (req, res) {
    var firstName = req.body.firstName;
    var lastName = req.body.lastName;
    var username = req.body.username;
    var email = req.body.email;
    var password = req.body.password;
    var phone = parseInt(req.body.phone);
    console.log(username);
    model.connectToDb(function (dbo) {
        var newmyobj = {firstName:firstName, lastName:lastName, username: username, email: email, password: password, phone:phone ,admin:false};
        
        model.findUser(email, function (usersInfo) {
            var myobj = {name: usersInfo.name, email: usersInfo.email, password: usersInfo.password, firstName: usersInfo.firstName, lastName: usersInfo.lastName, phone: usersInfo.phone};
            for (var i in newmyobj){
                console.log(newmyobj[i]);
                if (newmyobj[i] === ""){
                    console.log("praznoe");
                }
            }
            console.log(newmyobj.firstName);
            console.log("blablabla");
            console.log(usersInfo);
            if (usersInfo !== null && newmyobj !==null && newmyobj.values !== []) {
                dbo.collection("users").update(myobj,newmyobj, function (err, usersInfo) {
                    console.log("User updated");
                    res.send(usersInfo);
                });
            } else {
                res.send("user doesnt exist")
            }
        });
    });
    var petID = req.body.petID;
    var petNickname = req.body.petNickname;
    var Breeds = req.body.Breeds;
    var group1 = req.body.group1;
    // var female = req.body.
    var on = req.body.on;
    var chipID = req.body.chipID;
    model.connectToDb(function (dbo){
        var newpetInfo = {email:email, petID:petID, petNickname:petNickname, Breeds:Breeds, group1:group1, on:on, chipID:chipID};
        console.log(newpetInfo);
        model.findPet(chipID, function (petInfo) {
            // console.log("petid");
            // console.log(petinfo);

            // var mypet= {petID:petInfo.petID, petNickName:petInfo.petNickname, Breeds:petInfo.breeds, Sex:petInfo.group1, bday:petInfo.bday, chipID:petInfo.chipID}
            if(petInfo === null){
                dbo.collection("pets").insertOne(newpetInfo, function (err,newpetInfo){
                    console.log(newpetInfo);
                    // res.send(newpetInfo);
                })
            }
        });
    });

}); 

router.post('/log', function (req, res) {
    var email = req.body.email;
    var passwordlog = req.body.password;
    model.connectToDb(function (dbo) {
        var myobjlog = {email: email, password: passwordlog};
        console.log(myobjlog);
        model.findUser(email, function (usersInfo) {
            console.log(usersInfo);

            dbo.collection("users").findOne({email: email}, function (err, usersInfo) {

                console.log(usersInfo);
                if (usersInfo === null) {
                    // res.redirect('../log');
                    res.send('Userot nepostoi');
                } else if (usersInfo.email === email && usersInfo.password === passwordlog) {
                    if(usersInfo.admin){
                        console.log("vlegov");
                        // console.log(usersInfo.email);
                        //session
                        // res.cookies.set( eMail,  eMail  )
                        // res.cookie(eMail , eMail)
                        // res.session.email = email;
                        // res.session.passwordlog = passwordlog;
                        // req.session.al = true;
                        // console.log("Cookies :  ", req.cookies);
                        // Cookies that have not been signed
                        //  console.log(eMail);
                        //  res.cookies.eMail=eMail;
                        //   console.log('Cookies: ', res.cookies)

                        // Cookies that have been signed
                        //  console.log('Signed Cookies: ', req.signedCookies)
                        res.send([{user:false},{admin:true},"admin"]);
                    } else {
                        res.send([{user:true},{admin:false}, {firstName:usersInfo.firstName} ,"user"]);
                    }
                    } else {
                        res.send([{user:false},{admin:false}, console.log(userinfo), "user not exist"]);
                    }
                
            });

        });
    });
});

router.post('/reservation', function (req, res) {
    var email = req.body.email;
    model.connectToDb(function (dbo) {
        model.findUser(email, function (usersInfo) {
            var reservationEmail = usersInfo.email;
            var reservationFirstName = usersInfo.firstName;
            var reservationUserPhone = usersInfo.phone;

            var reservationBreeds = req.body.Breeds;
            var reservationQuantity = parseInt(req.body.quantity);
            var reservationSex = req.body.sex;
            var reservationPickDateTo = req.body.PickDateTo;
            var reservationPickDateFrom = req.body.PickDateFrom;
            var reservationPhone = parseInt(req.body.Phone);
            var reservationRequirements = req.body.Requirements;
            var reservationBirthdayDog = req.body.BirthdayDog;
            var reservationchipID = req.body.chipID;
            var reservationpetID = req.body.petID;
            var reservationpetNickname = req.body.petNickname;

            var myobj = {
                firstName:reservationFirstName, email: reservationEmail, user_phone: reservationUserPhone,
                breeds: reservationBreeds, quantity: reservationQuantity, sex: reservationSex, 
                PickDateTo: reservationPickDateTo, PickDateFrom: reservationPickDateFrom, 
                Phone: reservationPhone, Requirements: reservationRequirements, BirthdayDog: reservationBirthdayDog,
                chipID:reservationchipID, petID:reservationpetID, petNickname:reservationpetNickname
            };
            if (reservationBreeds == null || reservationQuantity == null || reservationSex == null || reservationPickDateTo == null ||  
                reservationPickDateFrom == null || reservationPhone == null || reservationRequirements == null || reservationBirthdayDog == null ) {
                console.log("vnesetegi site polinja");
                res.send('Vnesetegi site polinja');
            } else {
                dbo.collection("reservations").insertOne(myobj, function (err, usersInfo) {
                    if (err) {
                        console.log(err);
                    } else {
                    console.log("reservation created");
                    res.send('reservation created');
                    }
                });
            }
        });
    });
});

router.post('/editform', function (req, res) {
    var email = req.session.eMail;
    model.connectToDb(function (dbo) {
        model.findUser(email, function (usersInfo) {
            var newFirstName = req.body.firstName;
            var newLastName = req.body.lastName;
            var newemail = req.body.email;
            var newUserName = req.body.username;
            var newPassword = req.body.password;
            var newPhone = parseInt(req.body.phone);
            if (newFirstName == null || newLastName == null || newemail == null || newUserName == null ||  newPassword == null || newPhone == null) {
                console.log("vnesetegi site polinja");
                res.send('Vnesetegi site polinja');
            } else {
                console.log("vleze");
                var myobj = {name: usersInfo.name, email: usersInfo.email, password: usersInfo.password, firstName: usersInfo.firstName, lastName: usersInfo.lastName, phone: usersInfo.phone};
                var newdat = {name: newUserName, email: newemail, password: newPassword, firstName: newFirstName, lastName: newLastName, phone: newPhone};
                // console.log("vnesetegi site polinja");
                console.log(newdat);
                // var ime = usersInfo.name;
                // console.log(ime);
                dbo.collection("users").update(myobj, newdat, function (err, res) {
                    if (err) {
                        console.log(err);
                    }
                    console.log("1 document updated");
                });
                res.send('update user :)');
                console.log(usersInfo);
            }
        });
    });
    
});

router.post('/contactform', function (req, res) {
    var firstName = req.body.firstName;
    var email = req.body.email;
    var phone = parseInt(req.body.phone);
    var textbox = req.body.textbox;
    model.connectToDb(function (dbo) {
        var myobj = {firstName:firstName, email: email, phone:phone, textbox: textbox };
        dbo.collection("contact-form").insert(myobj, function(err){
            if (err) {
                console.log(err);
            } else {
                res.send("contact porakata e pratena");
            }
        })
    });
});

router.post('/presentpets', function (req, res) {
    var email = req.session.eMail;
    model.connectToDb(function (dbo) {
        // model.findUser(email, function (usersInfo) {
            var adminInputEmail = req.body.email;
            var adminInputFirstName = req.body.firstName;
            // var adminInputUserPhone = req.body.phone;

            var adminInputBreeds = req.body.breeds;
            var adminInputQuantity = parseInt(req.body.quantity);
            var adminInputSex = req.body.sex;
            var adminInputPickDateTo = req.body.PickDateTo;
            var adminInputPickDateFrom = req.body.PickDateFrom;
            var adminInputPhone = parseInt(req.body.Phone);
            var adminInputRequirements = req.body.Requirements;
            var adminInputBirthdayDog = req.body.BirthdayDog;

            var myobj = {
                firstName:adminInputFirstName, email: adminInputEmail,/* user_phone: adminInputUserPhone,*/
                breeds: adminInputBreeds, quantity: adminInputQuantity, sex: adminInputSex, 
                PickDateTo: adminInputPickDateTo, PickDateFrom: adminInputPickDateFrom, 
                Phone: adminInputPhone, Requirements: adminInputRequirements, BirthdayDog: adminInputBirthdayDog
            };
            // if (reservationBreeds == null || reservationQuantity == null || reservationSex == null || reservationPickDateTo == null ||  
            //     reservationPickDateFrom == null || reservationPhone == null || reservationRequirements == null || reservationBirthdayDog == null ) {
            //     console.log("vnesetegi site polinja");
            //     res.send('Vnesetegi site polinja');
            // } else {
                dbo.collection("presentpets").insertOne(myobj, function (err, usersInfo) {
                    if (err) {
                        console.log(err);
                    } else {
                    console.log("admin input created");
                    res.send('admin input created');
                    }
                });
            // }
        // });
    });
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


        let cbFunc = (data) => {
            console.log(data); 
            res.send(data)
        };

        model.findAllUsers(cbFunc);

    // var priceSell = parseFloat(req.body.priceEth);
    // var coin = req.body.coin;
    // var amount = parseInt(req.body.amo);

    // model.connectToDb(function (dbo) {
    //     model.findCurrencies2(coin,function (currenciesPair) {
    //         //console.log(currenciesPair.coin1);
    //         var email = req.session.eMail;
    //     model.findUser(email, function (usersInfo) {
    //         var myobj = {
    //             email: usersInfo.email,
    //             coin: currenciesPair.coin1,
    //             amo: amount,
    //             coins: currenciesPair.coin2,
    //             priceSell: priceSell
    //         };
    //         console.log(myobj);
    //             model.sortMarket(function (sorted) {
    //             var match = [];
    //                 for (var i in sorted) {
    //                     var re = sorted[i];
    //                     var arr = [re.coin, re.coins];
    //                     var s = [myobj.coins, myobj.coin];
    //                     match = arr.filter(function (e, pos) {
    //                         return s[pos] === arr[pos];
    //                     });
    //                     if (match.length === 2) {
    //                         if (coin === "eth/btc") {
    //                             global.priceCound = amount / priceSell;
    //                         }
    //                         if(priceCound === re.priceSell || priceCound >= re.priceSell) {
    //                             console.log("cenite odgovaraat");
    //                             var email = req.session.eMail;
    //                             model.findBalance(email, function (userBalance) {
    //                                 var myobj = {
    //                                     email: userBalance.email,
    //                                     balance: userBalance.balance,
    //                                     bitcoin: userBalance.bitcoin,
    //                                     ethereum: userBalance.ethereum
    //                                 };

    //                                 userBalance.bitcoin = parseFloat(userBalance.bitcoin - amount);
    //                                 var newBitcoin = userBalance.bitcoin;
    //                                 userBalance.ethereum = parseFloat(userBalance.ethereum + priceCound);
    //                                 var newEthereum = userBalance.ethereum;
    //                                 var newdat = {
    //                                     email: userBalance.email,
    //                                     balance: userBalance.balance,
    //                                     bitcoin: newBitcoin,
    //                                     ethereum: newEthereum
    //                                 };
    //                                 dbo.collection("usersBalance").update(myobj, newdat, function (err, userBalance) {
    //                                     if (err) {
    //                                         console.log(err);
    //                                     }
    //                                     console.log("1 document updated");
    //                                 });
    //                             });
    //                             var email1 = re.email;
    //                             global.amoo = re.amo;
    //                             model.findBalance(email1, function (userBalance) {
    //                                 var myobj1 = {
    //                                     email: userBalance.email,
    //                                     balance: userBalance.balance,
    //                                     bitcoin: userBalance.bitcoin,
    //                                     ethereum: userBalance.ethereum
    //                                 };
    //                                 //console.log(myobj);
    //                                 //var newBalance = userBalance.balance = userBalance.balance + amo;
    //                                 userBalance.bitcoin = parseFloat(userBalance.bitcoin + amoo);
    //                                 var newBitcoin = userBalance.bitcoin;
    //                                 userBalance.ethereum = parseFloat(userBalance.ethereum - priceCound);
    //                                 var newEthereum = userBalance.ethereum;
    //                                 var newdat = {
    //                                     email: userBalance.email,
    //                                     balance: userBalance.balance,
    //                                     bitcoin: newBitcoin,
    //                                     ethereum: newEthereum
    //                                 };
    //                                 dbo.collection("usersBalance").update(myobj1, newdat, function (err, userBalance) {
    //                                     if (err) {
    //                                         console.log(err);
    //                                     }
    //                                     console.log("1 document updated");
    //                                 });
    //                                 console.log("odgovaraat");
    //                             });
    //                             var myquery = {_id: re._id};
    //                             dbo.collection('market').deleteOne(myquery, function (err, obj) {
    //                                 if (err) throw err;
    //                                 console.log("izbrishan prv");
    //                             });
    //                             var myquery1 = {_id: myobj._id};
    //                             dbo.collection('market').deleteOne(myquery1, function (err, obj) {
    //                                 if (err) throw err;
    //                                 console.log("izbrishan vtor");

    //                             });
    //                             break;
    //                         }else{
    //                             //console.log(myobj);
    //                             dbo.collection("market").insertOne(myobj, function (err, usersInfo) {
    //                                 console.log("buy placed");
    //                             });
    //                         }
    //                     }else {
    //                         //console.log(myobj);
    //                         dbo.collection("market").insertOne(myobj, function (err, usersInfo) {
    //                             console.log("buy placed");
    //                         });
    //                         }

    //                 }
    //             });
    //         });
    //     });
    //     });
    // res.redirect('../buy');
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
