export default function HandleErorrs(result) {
  if (!result.success) {
    const errors = result.error.flatten().fieldErrors;
    console.log("Validation Errors:", errors);
    return { error: errors };
  }

  try {
    // console.log("Validated Data:", result.data);
    // Add logic for further processing, such as database insertion or API calls

    return { success: true, data: result.data }; // Return success response with validated data
  } catch (err) {
    console.error("Error during processing:", err);

    // Return structured error response
    if (err instanceof Error) {
      return {
        error: {
          _form: [err.message],
        },
      };
    } else {
      return {
        error: {
          _form: ["Something went wrong"],
        },
      };
    }
  }
}
