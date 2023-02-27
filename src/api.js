import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID rHqOudiETuGJNt1xNHkXC61pf3mQQEjtuHEhhhxWMQk",
    },
    params: {
      query: term,
    },
  });

  console.log(response);
  return response.data.results;
};

export default searchImages;
