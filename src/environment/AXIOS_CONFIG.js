import axios from "axios";

export default axios.create({
  baseURL: "https://cargamesofka.herokuapp.com/",
  headers: { "Content-type": "application/json" },
});

