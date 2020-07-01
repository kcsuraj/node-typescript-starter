import { Router, Request, Response } from 'express';
import { createUser } from './userController';

const router: Router = Router();

/**
 * POST /api/users
 */
router.post('/', createUser);

export default router;
