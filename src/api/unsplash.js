import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID uxN4eVoAZ1fBMXNW_rnWk2FgZg-9uq40IgvmlNAYVuo",
  },
});
