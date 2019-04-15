import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com",
    // baseURL: "./",
    headers: {
        Authorization: 'Client-ID 9e20df49fbd4617d5ba3558ffce77926a9c4ba34fd9cc4c92579fdcfadb739f3'
    }
});