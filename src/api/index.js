import axios from "axios";


const API = axios.create({
    baseURL: "https://neobisauthproject-production.up.railway.app/api/auth",
    headers:{
        "Content-Type":"application/json",
        
    }
}); 

export const register = async (data) => {
    const res = await instance.post('registration', data)
    return res.data
}

