import axios from "axios";


const axiosPublic = axios.create({
    baseURL: 'http://localhost:9000',
    // baseURL: 'https://bistrobossserver.vercel.app',
});

const useAxiosPublic = () => {
    return axiosPublic
};

export default useAxiosPublic;