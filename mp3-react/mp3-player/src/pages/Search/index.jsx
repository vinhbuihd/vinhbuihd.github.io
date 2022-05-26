import { useContext } from "react";
import { LayoutContext } from "../../components/Layout";
import SongItem from "../../components/SongItem";
import "./Search.scss";

const Search = () => {
  const { searchResult, suggestList, setSuggestList } =
    useContext(LayoutContext);

  return (
    <div className="search home">
      <h2>Kết quả tìm kiếm</h2>
      <h3>Top kết quả</h3>
      <SongItem key={searchResult.id} song={searchResult} />

      <h3>Bài hát</h3>
      {suggestList.map((song) => (
        <SongItem key={song.id} song={song} />
      ))}
    </div>
  );
};

export default Search;
