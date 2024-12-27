// Initilize express router
import express from 'express';
import {getTeacher} from '../controllers/teacherController.js';

const router = express.Router();

router.get('/teacher', getTeacher);
export default router;