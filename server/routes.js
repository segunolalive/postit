import express from 'express';
import { signUp, signIn, resetPassword, updatePassword, groupMemberSearch }
from './controllers/userController';
import { create, addMembers, getGroups, leaveGroup, getGroupMembers }
from './controllers/groupController';
import { createMessage, getMessages } from './controllers/messageController';
import authenticate from './middleware/authenticate';
import { groupAndUserExist, groupExist } from './middleware/exist';
import { verifyToken } from './includes/functions';

const router = express.Router();

router.post('/user/signup', signUp);

router.post('/user/signin', signIn);

router.post('/user/password_reset', resetPassword);

router.post('/user/password_update', updatePassword);

router.post('/user/token/verify', verifyToken);

router.use(authenticate);

router.post('/group', create);

router.post('/group/:groupId/user', groupAndUserExist, addMembers);

router.post('/group/:groupId/message', createMessage);

router.get('/group/:groupId/messages', groupExist, getMessages);

router.get('/group/user', getGroups);

router.get('/group/:groupId/users', groupExist, getGroupMembers);

router.get('/user/:groupId/search', groupMemberSearch);

router.delete('/group/:groupId/user', groupExist, leaveGroup);

export default router;
