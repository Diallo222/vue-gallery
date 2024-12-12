import axios from "axios";

const axiosClient = axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers :{
        'Accept-Version': 'v1'
    },
    params :{
        client_id: import.meta.env.VITE_UNPLASH_ACCESS_KEY
    }
})

export default axiosClient