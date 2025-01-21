import { useState } from "react";
import QuestionService from "../../../services/adminService/QuestionService";
import { toast } from "react-toastify";

export default function UpdateQuestion() {
  const service = new  QuestionService();
  const [questionData, setQuestionData] = useState({
    id: "",
    question: "",
    answer: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
  });

  const [formState, setFormState] = useState({
    data: null,
    errors: {},
    isLoading: false,
  });

  async function UpdateQuestion(formData) {
    try {
      const response = (await service.UpdatQuestion(formData)).data;
      if (response.success) {
        toast.success(response.message);
        console.log(response);
      } else {
        console.error(response.message);
      }
    } catch (error) {
      console.error("Updating question errror:", error.message);
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setFormState((prev) => ({ ...prev, isLoading: true }));

    console.log(questionData);
    UpdateQuestion(questionData);
    console.log("question updated:", questionData);
  }

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setQuestionData({
      ...questionData,
      [name]: type === "checkbox" ? checked : value,
    });
  }

  return (
    <>
      <form className="max-w-sm mx-auto mt-7" onSubmit={handleSubmit}>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Id
          </label>
          <input
            type="text"
            name="id"
            value={questionData.id}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        {formState.errors.id && <p className="text-red-500">{formState.errors.id[0]}</p>}


        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Question
          </label>
          <input
            type="text"
            name="question"
            value={questionData.question}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        {formState.errors.question && <p className="text-red-500">{formState.errors.question[0]}</p>}

        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
            <label htmlFor="">Option 1</label>
            <input
              type="text"
              name="option1"
              value={questionData.option1}
                onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            {formState.errors.option1 && (
              <p className="text-red-500">{formState.errors.option1[0]}</p>
            )}
          </div>
          <div className="relative z-0 w-full mb-5">
            <label htmlFor="">Option 2</label>
            <input
              type="text"
              name="option2"
              value={questionData.option2}
                onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            {formState.errors.option2 && <p className="text-red-500">{formState.errors.option2[0]}</p>}
          </div>
        </div>

        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
            <label htmlFor="">Option 3</label>
            <input
              type="text"
              name="option3"
                onChange={handleChange}
              value={questionData.option3}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            {formState.errors.option3 && <p className="text-red-500">{formState.errors.option3[0]}</p>}
          </div>

          <div className="relative z-0 w-full mb-5">
            <label htmlFor="">Option 4</label>
            <input
              type="text"
              name="option4"
                value={questionData.option4}
                onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            {formState.errors.option4 && <p className="text-red-500">{formState.errors.option4[0]}</p>}
          </div>
        </div>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Answer
          </label>
          <input
            type="text"
            name="answer"
            value={questionData.answer}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          {formState.errors.answer && <p className="text-red-500">{formState.errors.answer[0]}</p>}
        </div>
        <button
          type="submit"
          className="text-white bg-green-600 hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Update
        </button>
      </form>
    </>
  );
}
