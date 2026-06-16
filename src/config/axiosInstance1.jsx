import axios from "axios";

export let axiosInstance1 = axios.create({
    baseURL:"https://api.themoviedb.org/3",
    withCredentials:true,
   
})
