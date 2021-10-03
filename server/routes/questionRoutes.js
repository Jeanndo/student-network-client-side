import express from  'express'
import {getAllQuestions,createQuestion,updateQuestion,deleteQuestion,likeQuestion,answerQuestion} from '../controllers/questionsController.js'

const router = express.Router();

router.get('/',getAllQuestions);
router.post('/',createQuestion);
router.patch('/:id',updateQuestion);
router.delete('/:id',deleteQuestion);
router.patch('/:id/likeQuestion',likeQuestion)
router.patch('/:id/answerQuestion',answerQuestion)
export default router;