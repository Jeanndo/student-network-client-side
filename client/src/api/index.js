import axios from 'axios';

//const url = 'http://localhost:5000/questions';

const API = axios.create({baseURL:'http://localhost:5000'})

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
      req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
  
    return req;
  });

export const fetchQuestions  = ()=>API.get('/questions');
export const createQuestion  = (newQuestion)=>API.post('/questions',newQuestion);
export const updateQuestion  = (id,updatedQuestion)=>API.patch(`/questions/${id}`,updatedQuestion);
export const deleteQuestion  = (id)=>API.delete(`/questions/${id}`);
export const likeQuestion  = (id)=>API.patch(`/questions/${id}/likeQuestion`);
export const answerQuestion = (id,answer)=>API.patch(`/questions/${id}/answerQuestion`,answer)