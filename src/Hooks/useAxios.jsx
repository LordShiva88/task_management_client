import axios from "axios";

const instance = axios.create({
  baseURL: "https://task-managment-server-rosy.vercel.app/",
});
const useAxios = () => {
  return instance;
};

export default useAxios;
