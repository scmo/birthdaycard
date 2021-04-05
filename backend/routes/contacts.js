const express = require('express')
const router = express.Router()

const contactService = require('../services/contacts.service')
const middleware = require('../middleware')



router.get('/', middleware.verify, contactService.getContacts);

router.post('/', (req, res) => {
    return res.send('POST HTTP method on user resource');
});

router.put('/', (req, res) => {
    return res.send('PUT HTTP method on user resource');
});

router.delete('/', (req, res) => {
    return res.send('DELETE HTTP method on user resource');
});

module.exports = router
