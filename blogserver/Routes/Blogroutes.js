import express from 'express';
import { postBlog,newBlog,allBologs } from '../Controllers/Blogcontroller.js';

const router = express.Router();

router.get('/',allBologs);
router.get('/:username',postBlog);
router.post('/newpost',newBlog);

export default router