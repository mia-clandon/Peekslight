import {useParametersEmployerQuery} from "../generated/graphql";
import { useGetIntId } from "./useGetIntId";

export const useGetParametersEmployerFromUrl = () => {
  const intId = useGetIntId();
  return useParametersEmployerQuery({
    pause: intId === -1,
    variables: {
      idEmployer: intId,
    },
  });
};
