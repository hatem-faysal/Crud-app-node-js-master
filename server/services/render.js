const axios = require('axios');
var Userdb = require('../model/model');

// http://elshareh.matrix-clouds.com/api/chapters
exports.test=(req,res)=>{
        Userdb.find()
        .then(user=>{
            console.log(user);
            // res.send(user)
            res.render('test',{users:user});
        })
        .catch(err=>{
            res.status(500).send({message:err.message || "Error Occurred while retriving user information"})
        })

}
exports.test22=(req,res)=>{
    // Make a get request to /api/users
    axios.get('http://elshareh.matrix-clouds.com/api/chapters')
    .then((response) => {
        console.log('response.data.data: ', response.data.data);
        res.render('test22',{users:response.data.data});
    })
    .catch((err) => {
        res.send(err)
    })
}

exports.test333=(req,res)=>{
res.render('test333');
}

exports.homeRoutes=(req,res)=>{
    // Make a get request to /api/users
    axios.get('http://localhost:3000/api/users')
    .then((response) => {
        res.render('index',{users:response.data});
    })
    .catch((err) => {
        res.send(err)
    })
}
exports.add_user=(req,res)=>{
    res.render('add_user');
}
exports.update_user=(req,res)=>{
    axios.get('http://localhost:3000/api/users',{params:{id:req.query.id}})
    .then(function(userdata){
        res.render("update_user", { user : userdata.data})
    })
    .catch(err=>{
        res.send(err);
    })
}