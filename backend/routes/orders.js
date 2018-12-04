const express = require('express');
var Orders = require('../model/orders');
const router = express.Router();

router.get('', function (req, res) {
    Orders.find().then(result => {
        res.status(200).json(result);
    }).catch(err => {
        res.status(406).json({error: err});
    })
});

router.post('', function(req, res) {
    var newOrder = new Orders();

    newOrder.title = req.body.title;
    newOrder.content = req.body.content;
    newOrder.region = req.body.region;

    newOrder.save().then(result => {
        res.status(200).json(result);
    }).catch(err => {
        res.status(406).json({error: err});
    })
});

module.exports = router;