import express from 'express';
import { 
  compareDiff, 
  saveComparison, 
  getComparison,
  getStats 
} from '../controllers/diffController.js';

const router = express.Router();

// POST /api/diff - Compare texts without saving
router.post('/diff', compareDiff);

// POST /api/save - Save comparison and get shareable link
router.post('/save', saveComparison);

// GET /api/view/:id - Get saved comparison
router.get('/view/:id', getComparison);

// GET /api/stats - Get statistics (optional)
router.get('/stats', getStats);

export default router;
