import { Router, Request, Response } from 'express';
import * as userController from '../controllers';

const router: Router = Router();

/**
 * POST /api/users
 */
router.post('/', userController.createUser);

export default router;
