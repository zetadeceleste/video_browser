import axios from "axios";

const KEY = "AIzaSyCvjZNJIH7W45GmdGC4n0eY9ZxLSqTstQE";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: `${KEY}`
  }
});
