import express from  'express'
import {getAllQuestions,createQuestion,updateQuestion,deleteQuestion} from '../controllers/questionsController.js'

const router = express.Router();

router.get('/',getAllQuestions);
router.post('/',createQuestion);
router.patch('/:id',updateQuestion);
router.delete('/:id',deleteQuestion);


export default router;