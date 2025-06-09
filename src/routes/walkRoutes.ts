import { Router } from 'express';
import { createWalk, getWalks, getWalkById } from '../controllers/walkController';

const router = Router();

router.post('/walks', createWalk);
router.get('/walks', getWalks);
router.get('/walks/:id', getWalkById);

export default router;