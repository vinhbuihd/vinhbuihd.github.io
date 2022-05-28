import { createContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../Header";
import PlayerControl from "../PlayerControl";
import SideNav from "../SideNav";
import SidePlayList from "../SidePlayList";
import Theme from "../Theme";
import "./Layout.css";

export const LayoutContext = createContext();

const Layout = () => {
  const [songs, setSongs] = useState([]);
  const [showPlaylist, setShowPlayList] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isShowThemeList, setIsShowPlayList] = useState(false);
  const [themeId, setThemeId] = useState(1);
  const [searchResult, setSearchResult] = useState({});
  const [suggestList, setSuggestList] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");

  document.title = "Zing Mp3 | Nghe nhạc chất";

  useEffect(() => {
    fetch("/songs")
      .then((res) => res.json())
      .then((res) => {
        setSongs(res);
      })
      .catch((error) => console.log(error));
  }, []);

  const nextSong = () => {
    // let currentIndex = songs.findIndex((song) => song.id == currentSong.id);
    if (currentIndex == songs.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };
  const prevSong = () => {
    // let currentIndex = songs.findIndex((song) => song.id == currentSong.id);
    if (currentIndex == 0) {
      setCurrentIndex(songs.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const randomSong = () => {
    // let currentIndex = songs.findIndex((song) => song.id == currentSong.id);
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * songs.length);
    } while (randomIndex == currentIndex);
    setCurrentIndex(randomIndex);
  };

  useEffect(() => {
    let currentItems = document.querySelectorAll(".song-item.active");

    currentItems.forEach((currentItem) => {
      currentItem.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    });
  }, [currentIndex]);

  if (songs.length == 0) {
    return (
      <div style={{ textAlign: "center", fontSize: "48px" }}>Loading...</div>
    );
  }

  return (
    <LayoutContext.Provider
      value={{
        currentIndex,
        setCurrentIndex,
        nextSong,
        prevSong,
        randomSong,
        songs,
        setSongs,
        themeId,
        setThemeId,
        searchResult,
        setSearchResult,
        suggestList,
        setSuggestList,
        searchKeyword,
        setSearchKeyword,
      }}
    >
      <div
        className={`wrapper ${
          themeId == 1 ? "" : themeId == 2 ? "zingAwards" : "jack"
        }`}
      >
        <SideNav />
        <Header setIsShowPlayList={setIsShowPlayList} />
        <Theme
          isShowThemeList={isShowThemeList}
          setIsShowPlayList={setIsShowPlayList}
        />
        <SidePlayList
          songs={songs}
          showPlaylist={showPlaylist}
          setShowPlayList={setShowPlayList}
        />
        <div className="outlet">
          <Outlet />
        </div>
        <PlayerControl
          setShowPlayList={setShowPlayList}
          showPlaylist={showPlaylist}
          songs={songs}
        />

        <ToastContainer
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          autoClose={1000}
          position="bottom-right"
          toastClassName="toastClassName"
          bodyClassName="grow-font-size"
          progressClassName="fancy-progress-bar"
        />
      </div>
    </LayoutContext.Provider>
  );
};

export default Layout;
