import { AddQuestionSchema } from "../config/zodSchema";
import HandleError from "./errorhandle";

async function AddQuestionRecall(formData) {
  const QuestionData = {
    question: formData.get("question"), // Use the passed `formData` instance
    answer: formData.get("answer"),
    option1: formData.get("option1"),
    option2: formData.get("option2"),
    option3: formData.get("option3"),
    option4: formData.get("option4"),
  };

  const result = AddQuestionSchema.safeParse(QuestionData);
  return HandleError(result);
}

export default AddQuestionRecall;
