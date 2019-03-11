const express = require('express');
const createError = require('http-errors');

const PostStatus = require('../model/PostStatus');

const router = express.Router();

router.post('/', function (request, response, next) {
    PostStatus.create(request.body, function (error) {
        if (error) {
            next(createError(500, error));
        } else {
            response.json({ message: 'Ok!' });
        }
    });
});

router.get('/', function (request, response, next) {
    PostStatus.find(function (error, styles) {
        if (error) {
            next(createError(500, error));
        } else {
            response.json(styles);
        }
    });
});

router.get('/:id', function (request, response, next) {
    PostStatus.findById(request.params['id'], function (error, style) {
        if (error) {
            next(createError(500, error));
        } else {
            response.json(style);
        }
    });
});

router.put('/:id', function (request, response, next) {
    PostStatus.findByIdAndUpdate(request.params['id'], request.body, function (error) {
        if (error) {
            next(createError(500, error));
        } else {
            response.json({ message: 'Updated!' });
        }
    });
});

router.delete('/:id', function (request, response, next) {
    PostStatus.deleteOne({ _id: request.params['id'] }, function (error) {
        if (error) {
            next(createError(500, error));
        } else {
            response.json({ message: 'Deleted!' });
        }
    });
});

module.exports = router;
