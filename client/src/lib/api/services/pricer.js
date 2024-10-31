import api from "..";

export async function getProductByBarCode({ barCode, host }) {
    const response = await api.post('/', {
        host,
        barCode,
    })
    return response.data;
}