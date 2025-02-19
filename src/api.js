import axios from "axios";
const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID G0R8-55YDY80E2yNLDYzJPQwQqgUOn6Qod-E9CMsr0g",
    },
    params: {
      query: term,
    },
  });
  debugger;
  return response.data.results;
};

export default searchImages;
