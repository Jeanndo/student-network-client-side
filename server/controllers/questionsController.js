import QUESTION from "../models/questionModel.js";
import mongoose from "mongoose";

export const getAllQuestions = async (req, res) => {
  try {
    const allQuestions = await QUESTION.find();
    res.status(200).json(allQuestions);
  } catch (error) {
    res.status(404).josn({ message: error.message });
  }
};

export const createQuestion = async (req, res) => {
  const question = req.body;
  const newQuestion = new QUESTION(question);

  try {
    await newQuestion.save();
    res.status(201).json(newQuestion);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateQuestion = async (req, res) => {
  const { id: _id } = req.params;
  const question = req.body;
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No Question with that id");

  const updatedQuestion = await QUESTION.findByIdAndUpdate(_id, question, {
    new: true,
  });
  res.json(updatedQuestion);
};

export const deleteQuestion = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("No Question with that id");

  await QUESTION.findByIdAndRemove(id);
  res.json({ message: "Question Removed Successfully!!👍" });

};

export const likeQuestion = async(req,res) =>{

  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("No Question with that id");

  const question = await QUESTION.findById(id);

  const updatedQuestion = await QUESTION.findByIdAndUpdate(id,{likeCount:question.likeCount+1},{new:true})

  res.json(updatedQuestion)

}


export const answerQuestion = async(req,res)=>{
  const {id} = req.params;
  const {answer} =req.body;

  console.log("question and id",answer,id)

  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("No Question with that id");

  const question =  await QUESTION.findById(id);
  const newQuestion = question.anwers=answer;
  const answeredQuestion = await QUESTION.findByIdAndUpdate(id,{anwers:newQuestion},{new:true})
  res.json(answeredQuestion)
}