import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID vHIbj1cvrY3OfeDZpvdtSG_j61upBaqGIGXdXJBASpU"
  }
});
