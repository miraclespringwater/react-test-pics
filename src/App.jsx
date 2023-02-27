import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";
import searchImages from "./api";
import { useState } from "react";

const App = () => {
  const [images, setImages] = useState([]);

  const handleSubmit = async (term) => {
    console.log("Do a search with", term);
    const result = await searchImages(term);
    setImages(result);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images} />
    </div>
  );
};

export default App;
