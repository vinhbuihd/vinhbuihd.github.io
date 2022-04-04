import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ImageList from "./ImageList";
import Search from "./Seach";
import Button from "./Button";

const defaultApi = "https://api.unsplash.com/";
const partApi = "photos/?client_id=f7N-c7ynV9x6FAE3c1mP35-_1uRQeFNKMYlRro55XGA";

//https://api.unsplash.com/search/photos/?client_id=f7N-c7ynV9x6FAE3c1mP35-_1uRQeFNKMYlRro55XGA&page=1&query=girl

function App() {
  const [images, setImages] = useState([]);

  const [page, setPage] = useState(1);
  const [searchText, setSearchText] = useState("");
  const [totalPages, setTotalPages] = useState(null);
  const perPage = 12;

  let api = `${defaultApi}${
    searchText == "" ? "" : "search/"
  }${partApi}&page=${page}${
    searchText == "" ? "" : "&query=" + searchText
  }&per_page=${perPage}`;

  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (searchText) {
          setTotalPages(res.total_pages);
          setImages(res.results);
        } else {
          setImages(res);
        }
      })
      .catch((error) => console.log(error));
  }, [page, searchText, perPage]);

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <div className="App">
      <Search value={searchText} onChange={handleChange} />
      <ImageList images={images} />
      <div className="text-center mt-4 mb-5">
        <Button
          onClick={() => setPage(page - 1)}
          disabled={page == 1}
          title="<< Prev"
        />
        <Button
          onClick={() => setPage(page + 1)}
          disabled={totalPages ? page >= totalPages : false}
          title="Next >>"
        />
      </div>
    </div>
  );
}

export default App;
