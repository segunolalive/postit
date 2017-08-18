import express from 'express';
import { signUp, signIn, signOut } from './controllers/userController';
import { create, addMembers, createMessage, getMessages } from './controllers/groupController';
import authenticate from './middleware/authenticate';
import groupAndUserExist from './middleware/exist';

const router = express.Router();

router.post('/user/signup', signUp);

router.post('/user/signin', signIn);

router.use(authenticate);

router.post('/user/signout', signOut);

router.post('/group', create);

router.use(groupAndUserExist);

router.post('/group/:groupId/user', addMembers);

router.post('/group/:groupId/message', createMessage);

router.get('/group/:groupId/messages', getMessages);

module.exports = router;
