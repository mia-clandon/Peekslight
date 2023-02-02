import {useEmployerQuery} from "../generated/graphql";
import { useGetIntId } from "./useGetIntId";

export const useGetEmployerFromUrl = () => {
  const intId = useGetIntId();
  return useEmployerQuery({
    pause: intId === -1,
    variables: {
      id: intId,
    },
  });
};
