import { useQuery } from "@tanstack/react-query";
import { fetchCharacters } from "@/services/queries/characterQueries";
import { queryKeys } from "@/services/queries/queryKeys";

export const useCharacterSearch = (query: string) => {
  return useQuery({
    queryKey: [queryKeys.characters, query],
    queryFn: () => fetchCharacters(query),
    enabled: !!query,
  });
};
