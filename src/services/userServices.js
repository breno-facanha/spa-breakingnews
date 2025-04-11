import axios from "axios";

const baseUrl = "https://api-breakingnews-cb62.onrender.com"
// const baseUrl = "http://localhost:3100"

export function getAllPosts(){
    const response = axios.get(`${baseUrl}/news`)
    return response
}

export function getTopPost(){
    const response = axios.get(`${baseUrl}/news/top`)
    return response
}
