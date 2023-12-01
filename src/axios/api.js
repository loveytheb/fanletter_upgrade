import axios from "axios"

const instance = axios.create({
    baseURL: process.env.REACT_APP_SURVER_URL,
})

export default instance;