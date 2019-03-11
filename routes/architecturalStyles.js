const express = require('express');
const createError = require('http-errors');
const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');

const checkJwt = jwt({
    secret: jwksRsa.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`
    }),

    // Validate the audience and the issuer.
    audience: process.env.AUTH0_CLIENT_ID,
    issuer: `https://${process.env.AUTH0_DOMAIN}/`,
    algorithms: ['RS256']
});

const ArchitecturalStyle = require('../model/ArchitecturalStyle');

const router = express.Router();

router.post('/', checkJwt, function (request, response, next) {
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
