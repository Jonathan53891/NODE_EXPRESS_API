import express from 'express';

import { createUser, getUsers, getUser, deleteUser, updateUser } from '../controllers/users.js';

const router = express.Router();

//all routes in here are starting with /users
router.get('/', getUsers);

router.post('/', createUser);

//all routes in here start with id
// /users/9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d => req.params { id: 9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d }
router.get('/:id', getUser);

router.delete('/:id', deleteUser);

router.patch('/:id', updateUser);

export default router;