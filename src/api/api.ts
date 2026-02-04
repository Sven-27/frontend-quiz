import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000',
  method: 'GET',
  headers: {
    // 'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    withCredentials: false,
  },
});


export default api;

export interface Question {
    question: String;
    options: {};
    answer: String;
}

export interface ResponseAPI {
    title: string;
    icon: string;
    'icon-bg': string;
    questions: Question[];
}