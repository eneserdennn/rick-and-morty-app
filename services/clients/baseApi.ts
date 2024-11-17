import axios from "axios";

const baseApi = axios.create({
  baseURL: "https://rickandmortyapi.com/api",
  timeout: 3000,
});

export default baseApi;
