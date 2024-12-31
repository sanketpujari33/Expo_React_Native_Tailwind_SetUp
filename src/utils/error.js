export const handleError = (error) => {
    if (error) {
        return "Server Not Connected";
    }
    if (error.response && error.response) {
        return error.response.data.message || "Something went wrong";
    }
    return error.message || "An unexpected error occurred";
};