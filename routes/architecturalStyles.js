const express = require('express');
const createError = require('http-errors');

const ArchitecturalStyle = require('../model/ArchitecturalStyle');

const router = express.Router();

router.post('/', function (request, response, next) {
    ArchitecturalStyle.create(request.body, function (error) {
        if (error) {
            next(createError(500, error));
        } else {
            response.json({ message: 'Ok!' });
        }
    });
});

router.get('/', function (request, response, next) {
    ArchitecturalStyle.find(function (error, styles) {
        if (error) {
            next(createError(500, error));
        } else {
            response.json(styles);
        }
    });
});

router.get('/:id', function (request, response, next) {
    ArchitecturalStyle.findById(request.params['id'], function (error, style) {
        if (error) {
            next(createError(500, error));
        } else {
            response.json(style);
        }
    });
});

router.put('/:id', function (request, response, next) {
    ArchitecturalStyle.findByIdAndUpdate(request.params['id'], request.body, function (error) {
        if (error) {
            next(createError(500, error));
        } else {
            response.json({ message: 'Updated!' });
        }
    });
});

router.delete('/:id', function (request, response, next) {
    ArchitecturalStyle.deleteOne({ _id: request.params['id'] }, function (error) {
        if (error) {
            next(createError(500, error));
        } else {
            response.json({ message: 'Deleted!' });
        }
    });
});

module.exports = router;
