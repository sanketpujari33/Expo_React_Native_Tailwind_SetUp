import { createAsyncThunk } from '@reduxjs/toolkit';
import { GET } from '../../utils/http';


export const fetchDataAsync = createAsyncThunk(
    'counter/fetchData', async (userId, { rejectWithValue }) => {
        try {
            const { response, json } = await GET("/product");
            if (!response) {
                return rejectWithValue(handleError({ error: "Server Not Fund" }));
            }
            if (!response.data.error) {
                return json;
            }
            if (json.error) {
                // Here, you can check for specific error messages
                return rejectWithValue(json.error);
            }
        } catch (error) {
            return rejectWithValue(handleError(error));
        }
    }
)