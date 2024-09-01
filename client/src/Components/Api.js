import axios from "axios";

const baseURL = "https://punar-jeevan-server.vercel.app/";

export default axios.create({ baseURL: baseURL });
