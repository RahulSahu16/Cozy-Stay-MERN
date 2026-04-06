import axios from "axios";

const API = "http://localhost:3000/api";

export const getHomes = async () => {
  const response = await axios.get(`${API}/homes`);
  return response.data;
};

export const getHomeById = async (id) => {
  const res = await axios.get(`${API}/homes/${id}`);
  return res.data;
};