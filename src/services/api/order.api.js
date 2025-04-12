import axios from "axios";
import { ORDER_API } from "./routes";
import { extractErrorMessage } from "../../utils/api.utils";

export const createOrderApi = async (orderData) => {
    try {
        const response = await axios.post(ORDER_API.CREATE, orderData);
        return response.data;
    } catch (error) {
        const message = extractErrorMessage(error)
        throw new Error(message);
    }
};