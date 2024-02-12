const express = require('express');
const {handleGetUsers,handleCreateUser,handleUpdateUser,handleDeleteUser} = require('../controllers/user')
const router = express.Router();

router.get('/users', handleGetUsers);
router.post('/users', handleCreateUser)
router.put('/users/:id', handleUpdateUser)
router.delete('/users/:id', handleDeleteUser)



module.exports = router;