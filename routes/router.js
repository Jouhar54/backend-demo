import express from 'express';
import { signup } from '../controllers/userController.js';

const router = express.Router();

router.get('/signup', signup);
router.get('/product', signup);


export default router;