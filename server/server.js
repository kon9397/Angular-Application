const express = require('express');
const jsonServer = require('json-server');
const jwt = require('jsonwebtoken');

const server = jsonServer.create();
const router = jsonServer.router('server/db.json');
const middlewares = jsonServer.defaults();

const SECRET_KEY = 'my-secret-key';

server.use(express.json());
server.use(middlewares);

// Middleware to handle Authorization header and verify the user's authentication token
// Middleware to handle authentication and authorization
server.use((req, res, next) => {
    if (req.url === '/login') {
        next();
    } else if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
        const token = req.headers.authorization.split(' ')[1];

        try {
            console.log('token:', token);
            const decoded = jwt.verify(token, SECRET_KEY);
            console.log('decoded token:', decoded);
            req.user = decoded;
            console.log(req.user);
            next();
        } catch (error) {
            res.status(401).json({ error: 'Invalid authentication token' });
        }
    } else {
        res.status(401).json({ error: 'Authentication required' });
    }
});

// POST /login endpoint to authenticate users and generate a new token
server.post('/login', (req, res) => {
    const { email, password } = req.body;
    const user = router.db.get('users').find({ email, password }).value();

    if (!user) {
        res.status(401).json({ error: 'Invalid email or password' });
    } else {
        const token = jwt.sign({ email: user.email }, SECRET_KEY);
        res.json({ token, user });
    }
});

// GET /users/me endpoint to retrieve data for the currently authenticated user
server.get('/users/me', (req, res) => {
    if (!req.user) {
        res.status(401).json({ error: 'Authentication required' });
    } else {
        const user = router.db.get('users').find({ email: req.headers.email }).value();
        if (!user) {
            res.status(404).json({ error: 'User not found' });
        } else {
            res.json(user);
        }
    }
});

// Mount JSON Server router
server.use(router);

server.listen(3000, () => {
    console.log('JSON Server is running');
});
