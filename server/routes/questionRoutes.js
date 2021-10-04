import express from  'express'
import {getAllQuestions,createQuestion,updateQuestion,deleteQuestion,likeQuestion,answerQuestion} from '../controllers/questionsController.js'
import auth from '../middleware/auth.js'


const router = express.Router();

router.get('/',getAllQuestions);
router.post('/',auth,createQuestion);
router.patch('/:id',auth,updateQuestion);
router.delete('/:id',auth,deleteQuestion);
router.patch('/:id/likeQuestion',auth,likeQuestion)
router.post('/:id/answerQuestion',auth,answerQuestion)
export default router;