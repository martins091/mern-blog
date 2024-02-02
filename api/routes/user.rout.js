import express from 'express';
import { test, updateUser , deleteUser } from '../controllers/user.controller.js'
const router = express.Router();
import { verifyToken } from '../utils/verifyUser.js'

router.get('/test', test );
router.put('/update/:userId', verifyToken, updateUser);
router.delete('/delete/:userId', verifyToken, deleteUser);

export default router;