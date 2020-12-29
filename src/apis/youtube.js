import axios from "axios";

const KEY = "AIzaSyBDTUFam1-4DgSajE33W2B-NLj6Nk6369w";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
