// IMPORTS
import { Router } from 'express';
import * as diaryController from '../controllers/diary_controller.js';

// INITIATE ROUTER
const router = Router();

// ROUTES
router.route('/me').get(diaryController.getMyDiaryEntries);

router
    .route('/')
    .get(diaryController.getAllDiaryEntries)
    .post(diaryController.createDiaryEntry);

router
    .route('/:id')
    .get(diaryController.getDiaryEntry)
    .delete(diaryController.deleteDiaryEntry)
    .patch(diaryController.updateDiaryEntry);

// EXPORT ROUTER
export default router;
