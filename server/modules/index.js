var express = require('express');
var path = require('path');

var Hero = require('../models/hero');

var router = express.Router();

router.get('/hero', function(req, res){
    Hero.find({}, function(err, data){
        if(err){
            console.log('err', err);
        }
        res.send('get data', data);
    });
});

router.post('/hero', function(req, res){
    console.log('body' req.body);
    
    var addedHero = new Hero({
        'alias': req.body.alias,
        'first_name': req.body.first_name,
        'last_name': req.body.last_name,
        'city': req.body.city,
        'power_name': req.body.power_name
    });
    addedHero.save(function(err, data){
        if(err){
            console.log('err', err);
        }
        res.send(data);
    });
});

router.delete('/hero/:id', function(req, res){
    console.log('delete req', req.params);

    Hero.remove({ _id: req.params.id}, function(err, data){
        if(err){
            console.log('err', err);
        }
        res.send(data);
    });
});

router.get('/*', function(req, res){
    var file = req.params[0] || '/views/index.html';
    res.sendFile(path.join(__dirname, '../public/', file));
});

module.exports = router;
