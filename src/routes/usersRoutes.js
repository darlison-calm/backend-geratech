const express = require('express');
const router = express.Router();
const usersControllers = require('../controllers/usersControllers');

router.post('/', usersControllers.userCreate);
router.get('/', usersControllers.userList);
router.put('/:id', usersControllers.userUpdate)

module.exports = router;