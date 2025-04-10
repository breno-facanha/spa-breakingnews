import axios from "axios";

const baseUrl = "https://api-breakingnews-cb62.onrender.com"

export function getAllPosts(){
    const response = axios.get(`${baseUrl}/news`)
    return response
}