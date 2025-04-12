import axios from "axios";

export const extractErrorMessage = (error) => {
    if (axios.isAxiosError(error)) {
        const resData = error.response?.data;

        return (
            resData?.message ||
            resData?.issues?.error ||
            resData?.error ||
            error.message
        );
    }

    return "Something went wrong. Please try again.";
};