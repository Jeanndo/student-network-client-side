import * as api from '../../api'
import {FETCH_ALL,CREATE,UPDATE,DELETE} from '../actions/actionTypes/types'


export const  getQuestions =  ()=>async(dispatch)=>{

    try {
       const {data} = await api.fetchQuestions(); 
       dispatch({type:FETCH_ALL,payload:data});

    } catch (error) {
        console.log(error.message);
    }

}

export const createQuestions = (question)=>async(dispatch)=>{

try {

  const {data} = await api.createQuestion(question);  

  dispatch({type:CREATE,payload:data})

} catch (error) {
    console.log(error.message);
}

}

export const updateQuestion = (id,question)=>async (dispatch)=>{

  try {
      
  const {data} = await api.updateQuestion(id,question);
  dispatch({type:UPDATE,payload:data});

  } catch (error) {
      console.log(error.message);
  }
}

export const deleteQuestion = (id)=> async (dispatch)=>{


  try {
    await api.deleteQuestion(id);

    dispatch({type:DELETE,payload:id});
  } catch (error) {
    console.log(error);
  }
}


export const likeQuestion = (id)=>async (dispatch)=>{
  try {
    const {data} = await api.likeQuestion(id);
    dispatch({type:UPDATE,payload:data});
  } catch (error) {
    console.log(error);
  }
}

export const answerQuestion = (value,id)=>async (dispatch)=>{
  try {
    const {data} = await api.answerQuestion(value,id);
    dispatch({type:UPDATE,payload:data});
    return data.answers
  } catch (error) {
    console.log(error);
  }
}

