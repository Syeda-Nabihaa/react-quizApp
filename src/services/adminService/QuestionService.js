import { allApiEndPoints } from "../apiUrl";
import axiosInstance from "../interceptor/interceptor";

export class QuestionService {
  async showQuestion(params) {
    try {
      const response = await axiosInstance.get(allApiEndPoints.showQuestion, {
        headers: {
          "Content-Type": "application/json",
        },
        params, // Use `params` to pass query parameters if needed
      });
      return response.data; // Return the data directly
    } catch (error) {
      console.error("Error fetching questions:", error);
      throw error;
    }
  }

  async AddQuestion(body) {
    try {
      const response = await axiosInstance.post(allApiEndPoints.addQuestion, body, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.data; // Return data from the response
    } catch (error) {
      // Log the complete error for debugging
      console.error("Question cannot add:", error);

      // Throw the complete error so the calling function can handle it
      throw error;
    }
  }
}

export default QuestionService;
