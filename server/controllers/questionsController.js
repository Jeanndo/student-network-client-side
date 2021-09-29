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
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No Question with that id");

  await QUESTION.findByIdAndDelete(id);
  res.json({ message: "Question Removed Successfully!!👍" });

  console.log('Deleted')
};
