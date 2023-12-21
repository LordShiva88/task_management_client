import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

const useTasks = () => {
  const axios = useAxios();
  const { data: tasks = [], refetch, isPending } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const res = await axios.get("/tasks");
      return res.data;
    },
  });
  console.log(tasks);
  return [tasks, refetch, isPending];
};

export default useTasks;
