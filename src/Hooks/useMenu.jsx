import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useMenu = () => {

    const axiosPublic = useAxiosPublic();

    const { data: menu = [], isPending: isLoading, refetch } = useQuery({
        queryKey: ['menu'],
        queryFn: async () => {
            const res = await axiosPublic('/menu')
            return res;
        }
    })


    return [menu, isLoading, refetch]
};

export default useMenu;