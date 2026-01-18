import axios from "axios";  

export const client = axios.create({
    baseURL: "./data.json",
    headers: {
        "Content-Type": "application/json",
    },
})

export interface Question {
    question: String;
    options: String[];
    answer: String;
}

export type ResponseAPI = {
    title: String;
    icon: String
    questions: Question[];
}