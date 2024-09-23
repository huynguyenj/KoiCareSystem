import axios from 'axios'
const REST_API_BASE_URL = "http://localhost:8081";

export const register =() =>axios.post(REST_API_BASE_URL+'/api/user')
export const login = (userInfo) => axios.post(REST_API_BASE_URL+'/auth/login',userInfo)