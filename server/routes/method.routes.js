import { Router } from 'express';
import * as MethodController from '../controllers/method.controller';
const router = new Router();

// Get all Methods
router.route('/methods').get(MethodController.getMethods);

export default router;
