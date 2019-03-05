const express = require('express');

const ArchitecturalStyle = require('../model/ArchitecturalStyle');

const router = express.Router();

router.post('/', function (request, response) {
    ArchitecturalStyle.create(request.body, function (error) {
        if (error) {
            response.status(500).send(error);
        } else {
            response.json({ message: 'Ok!' });
        }
    });
});

router.get('/', function (request, response) {
    ArchitecturalStyle.find(function (error, styles) {
        if (error) {
            response.status(500).send(error);
        } else {
            response.json(styles);
        }
    });
});

router.get('/:id', function (request, response) {
    ArchitecturalStyle.findById(request.params['id'], function (error, style) {
        if (error) {
            response.status(500).send(error);
        } else {
            response.json(style);
        }
    });
});

router.put('/:id', function (request, response) {
    ArchitecturalStyle.findByIdAndUpdate(request.params['id'], request.body, function (error) {
        if (error) {
            response.status(500).send(error);
        } else {
            response.json({ message: 'Updated!' });
        }
    });
});

router.delete('/:id', function (request, response) {
    ArchitecturalStyle.deleteOne({ _id: request.params['id'] }, function (error) {
        if (error) {
            response.status(500).send(error);
        } else {
            response.json({ message: 'Deleted!' });
        }
    });
});

module.exports = router;
