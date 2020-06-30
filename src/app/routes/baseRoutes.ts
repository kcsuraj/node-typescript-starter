import { Router } from 'express';
import { userRoutes } from './index';

const router: Router = Router();

router.use('/users', userRoutes);

export default router;
