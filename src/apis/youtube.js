import axios from "axios";

const KEY = "AIzaSyC_9PJksV3MIvEkOgR1B-q8rFE35qLnP60";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
