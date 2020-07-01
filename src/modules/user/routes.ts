import { Router, Request, Response } from 'express';
import { createUser } from './controller';

const router: Router = Router();

/**
 * POST /api/users
 */
router.post('/', createUser);

export default router;
