import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://65-bistro-boss-server-gamma.vercel.app",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
