import { Router } from 'express';
import userRoutes from './modules/user/userRoutes';

const router: Router = Router();

router.use('/users', userRoutes);

export default router;
