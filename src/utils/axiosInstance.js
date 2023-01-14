import axios from "axios";

const axiosInstance = () => {
    const axiosConfig = axios.create({
        baseURL: 'https://newsapi.org/v2', ///everything?q=ai&apikey=2b60fc7b25084694831d7b2a4456ce59
        responseType: 'json'
    })

    return axiosConfig
}

export default axiosInstance