
const reducer = (questions=[],action)=>{

switch(action.type){
    case 'DELETE':
        return questions.filter((question)=>question._id!==action.payload._id);
    case 'UPDATE':
    case 'LIKE':
        return questions.map((question)=>question._id===action.payload._id?action.payload:question);
    case 'FETCH_ALL':

        return action.payload;
    case 'CREATE':
    return  [...questions,action.payload];

    default:
        return questions;
}

}

export default reducer;

