import { useEffect, useState } from "react";
import { QuestionService } from "../../../services/adminService/QuestionService";
import Loader from "../../../components/loader/loader"; // Assuming this is your loader component

export default function ShowQuestion() {
  const service = new QuestionService();

  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Loader state

  async function ShowQuestion() {
    try {
      const response = await service.showQuestion();
      if (response.success) {
        setQuestions(response.data);
        console.log("Questions:", response.data);
      } else {
        console.error("API Error:", response.message || "Unknown error");
      }
    } catch (error) {
      console.error("Request failed:", error);
    } finally {
      setIsLoading(false); // Stop loader once data is fetched or error occurs
    }
  }

  useEffect(() => {
    ShowQuestion();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="relative overflow-x-auto mt-6">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Question
                </th>
                <th scope="col" className="px-6 py-3">
                  option 1
                </th>
                <th scope="col" className="px-6 py-3">
                  option 2
                </th>
                <th scope="col" className="px-6 py-3">
                  option 3
                </th>
                <th scope="col" className="px-6 py-3">
                  option 4
                </th>
                <th scope="col" className="px-6 py-3">
                  answer
                </th>
              </tr>
            </thead>
            <tbody>
              {questions.map((question) => (
                <tr
                  key={question.id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-red-800"
                  >
                    {question.question}
                  </th>
                  <td className="px-7 py-4 text-blue-600">
                    {question.option1}
                  </td>
                  <td className="px-6 py-4 text-blue-600">
                    {question.option2}
                  </td>
                  <td className="px-6 py-4 text-blue-600">
                    {question.option3}
                  </td>
                  <td className="px-6 py-4 text-blue-600">
                    {question.option4}
                  </td>
                  <td className="px-6 py-4 text-green-600 font-bold">
                    {question.answer}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}
