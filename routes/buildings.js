const express = require('express');
const router = express.Router();

const Building = require('../model/Building');

router.get('/', function (request, response) {
    const lastItemId = request.query.lastItemId;
    const pageSize = parseInt(request.query.pageSize);
    const condition = lastItemId == undefined || lastItemId === 'undefined' ? {} : { _id: { '$gt': lastItemId } };
    Building
        .find(condition, { name: 1, description: 1, image: 1 })
        .limit(pageSize)
        .exec(function (error, result) {
            if (error) {
                response.send(error);
            } else {
                response.json({
                    items: result,
                    hasMore: result.length == pageSize
                });
            }
        });
});

router.get('/locations', function (request, response) {
    Building
        .find({}, { name: 1, location: 1 })
        .exec(function (error, result) {
            if (error) {
                response.send(error);
            } else {
                response.json(result);
            }
        });
});

router.get('/detail/:id', function (request, response) {
    const id = request.params.id;
    Building.findById(id, function (error, building) {
        if (error) {
            response.send(error);
        } else {
            response.json(building);
        }
    });
});

module.exports = router;