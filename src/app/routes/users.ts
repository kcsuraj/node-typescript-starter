import { Router } from 'express';

const router: Router = Router();

/**
 * GET /api/users
 */
router.get('/', (req: any, res: any) => {
  res.status(200).json({});
});

export default router;
