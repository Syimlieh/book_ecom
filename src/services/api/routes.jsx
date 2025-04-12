const BASE_URL = import.meta.env.VITE_PRODUCT_API_BASE_URL || "http://localhost:5000/api"; // adjust based on env

export const BOOK_API = {
    GET_ALL: `${BASE_URL}/v1/books`,
    GET_BY_ID: (id) => `${BASE_URL}/v1/books/${id}`,
    CREATE: `${BASE_URL}/books`,
};

export const ORDER_API = {
    CREATE: `${BASE_URL}/v1/order`,
};