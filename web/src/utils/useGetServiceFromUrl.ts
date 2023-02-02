import {useServiceQuery} from "../generated/graphql";
import {useGetIntId} from "./useGetIntId";

export const useGetServiceFromUrl = () => {
    const intId = useGetIntId();
    return useServiceQuery({
        pause: intId === -1,
        variables: {
            id: intId,
        },
    });
};
