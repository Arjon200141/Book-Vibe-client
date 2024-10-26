import axios from "axios";

export const axiospublic = axios.create({
    baseURL: 'http://localhost:5000/'
})
const useAxiosPublic = () => {
    return axiospublic;
};

export default useAxiosPublic;