const express = require('express');
const router = express.Router();

const Building = require('../model/building');

router.get('/', function (request, response) {
    const lastItemId = request.query.lastItemId;
    const pageSize = parseInt(request.query.pageSize);
    const condition = lastItemId == undefined || lastItemId === 'undefined' ? {} : { '_id': { '$gt': lastItemId } };
    Building
        .find(condition)
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

module.exports = router;