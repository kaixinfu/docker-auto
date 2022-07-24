import axios from "axios";

const baseUrl = process.env.NODE_ENV === "development" ? "http://localhost:3000" : "";

export const getUsers = () => {
    return axios.get(`${baseUrl}/api/users`)
}