import mongoose from  'mongoose'

const questionSchema  = mongoose.Schema({
    question:String,
    title:String,
    selectedFile:String,
    creator:String,
    likeCount:{
      type:Number,
      default:0
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