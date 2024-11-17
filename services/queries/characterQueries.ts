import baseApi from "../clients/baseApi";

export const fetchCharacters = async (query: string) => {
  const response = await baseApi.get(`/character`, {
    params: { name: query },
  });
  return response.data.results;
};
