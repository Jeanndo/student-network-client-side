import mongoose from  'mongoose'

const questionSchema  = mongoose.Schema({
    question:String,
    title:String,
    selectedFile:String,
    name:String,
    creator:String,
    likes:{
      type:[String],
      default:[]
    },
    anwers:{
      type:String,
      default:''
      },
    createdAt:{
        type:Date,
        default:new Date()
    }
})

const QUESTION = mongoose.model('QUESTION',questionSchema);

export default QUESTION;