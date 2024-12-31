import api from './axiosInstance';

async function POST(url, info, token, type) {
    try {
        const headers = {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
        };

        if (type !== "formData") {
            headers["Content-Type"] = "application/json";
        }

        const response = await api.post(url, info, { headers });
        return { response: response, json: response.data };
    } catch (error) {
        return { response: error.response, json: error.response?.data || {} };
    }
}

async function PUT(url, info, token, type) {
    try {
        const headers = {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
        };

        if (type !== "formData") {
            headers["Content-Type"] = "application/json";
        }

        const response = await api.put(url, info, { headers })
        return { response: response, json: response.data };
    } catch (error) {
        return { response: error.response, json: error.response?.data || {} };
    }
}

async function DELETE(url, token) {
    try {
        const headers = {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
        };

        const response = await api.delete(url, { headers }); // Use the api instance
        return { response: response, json: response.data };
    } catch (error) {
        return { response: error.response, json: error.response?.data || {} };
    }
}

async function GET(url, token) {
    try {
        const headers = {
            Authorization: token ? `Bearer ${token}` : undefined,
            Accept: "application/json",
        };

        const response = await api.get(url, { headers });
        return { response: response, json: response.data };
    } catch (error) {
        return { response: error.response, json: error.response?.data || {} };
    }
}

export { POST, PUT, DELETE, GET };