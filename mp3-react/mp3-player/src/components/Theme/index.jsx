import "./Theme.scss";
import { AiOutlineClose, AiOutlineCheckCircle } from "react-icons/ai";
import { Grid } from "@mui/material";
import { useContext } from "react";
import { LayoutContext } from "../Layout";

const themeList = [
  {
    id: 1,
    name: "Mặc định",
    thumbnail:
      "https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/theme/purple.jpg",
  },
  {
    id: 2,
    name: "Zing Music Awards",
    thumbnail:
      "https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/theme/zma.jpg",
  },
  {
    id: 3,
    name: "Jack",
    thumbnail:
      "https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/theme/jack.jpg",
  },
];

const ThemeItem = ({ theme, setIsShowPlayList }) => {
  const { themeId, setThemeId } = useContext(LayoutContext);

  const handleChangeTheme = () => {
    setThemeId(theme.id);
    setIsShowPlayList(false);
  };

  return (
    <div className={`themeItem ${themeId == theme.id ? "active" : ""}`}>
      <div className="themeItem-top">
        <div className="themeItem-check">
          <AiOutlineCheckCircle />
        </div>
        <div className="themeItem-hover d-flex align-items-center justify-content-center">
          <button
            className="themeItem-apply-btn btn"
            onClick={handleChangeTheme}
          >
            Áp dụng
          </button>
        </div>
        <div className="themeItem-img">
          <img src={theme.thumbnail} alt={theme.name} />
        </div>
      </div>
      <p className="themeItem-name">{theme.name}</p>
    </div>
  );
};

const Theme = ({ isShowThemeList, setIsShowPlayList }) => {
  return (
    <div
      className={`theme align-items-center justify-content-center ${
        isShowThemeList ? "show" : ""
      }`}
      onClick={() => setIsShowPlayList(false)}
    >
      <div className="theme-container" onClick={(e) => e.stopPropagation()}>
        <div className="theme-container-top d-flex align-items-center">
          <h3>Giao diện</h3>
          <div
            className="theme-close-btn"
            onClick={() => setIsShowPlayList(false)}
          >
            <AiOutlineClose />
          </div>
        </div>

        <div className="theme-container-main d-flex align-items-center">
          <Grid container spacing={4}>
            {themeList.map((theme) => (
              <Grid item xs={6} sm={4} key={theme.id}>
                <ThemeItem
                  theme={theme}
                  setIsShowPlayList={setIsShowPlayList}
                />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default Theme;
