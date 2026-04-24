import axios from 'axios';

const api = axios.create({
  baseURL: 'https://json-server-fq.onrender.com',
// baseURL: 'http://localhost:3000',
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    withCredentials: false,
  },
});


export default api;

export interface Question {
    question: string;
    options: string[];
    answer: string;
}

export interface ResponseAPI {
    title: string;
    icon: string;
    'icon-bg': string;
    questions: Question[];
}