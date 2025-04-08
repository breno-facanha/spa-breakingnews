import axios from "axios";

const baseUrl = "http://localhost:3100"

export function getAllPosts(){
    const response = axios.get(`${baseUrl}/news`)
    return response
}