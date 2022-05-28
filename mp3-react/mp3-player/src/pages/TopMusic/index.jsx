import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CardList from "../../components/CardList";
import "./TopMusic.scss";

const top100 = [
  {
    id: 1,
    name: "Top 100 Pop Âu Mỹ",
    singer: "Adele, Justin Bieber, The kid LAROI",
    image: "/images/top100-1.jpg",
  },
  {
    id: 2,
    name: "Top 100 nhạc EDM",
    singer: "Alan Walker, K-319, Emelie Hollow",
    image: "/images/top100-2.jpg",
  },

  {
    id: 3,
    name: "Top 100 V-Pop hay nhất",
    singer: "ERIK, Thiều Bảo Trâm, Đinh Tùng Huy",
    image: "/images/top100-3.jpg",
  },
  {
    id: 4,
    name: "Top 100 nhạc dance Việt",
    singer: "CUKAK, Phát Hồ, Đinh Long",
    image: "/images/top100-4.jpg",
  },
];

const top100vn = [
  {
    id: 1,
    name: "Top 100 EDM Việt Nam",
    singer: "Masew, Pháo, CM1X",
    image: "/images/t-nhacviet-1.jpg",
  },
  {
    id: 2,
    name: "Top 100 nhạc phim Việt Nam",
    singer: "Phan Mạnh Quỳnh, Lâm Bảo Ngọc, Khải Đăng",
    image: "/images/t-nhacviet-2.jpg",
  },

  {
    id: 3,
    name: "Top 100 nhạc Trịnh",
    singer: "Hùng Cường, Lưu Ánh Loan, Việt Hòa",
    image: "/images/t-nhacviet-3.jpg",
  },
  {
    id: 4,
    name: "Top 100 nhạc Rap việt",
    singer: "Binz, Rhymastic, Soobin Hoàng Sơn",
    image: "/images/t-nhacviet-4.jpg",
  },
];

const top100usuk = [
  {
    id: 1,
    name: "Top 100 nhạc Đồng Quê",
    singer: "Taylor Swift, Mitchen Tenpenny, Walker Hayes",
    image: "/images/t-usuk-1.jpg",
  },
  {
    id: 2,
    name: "Top 100 nhạc Rap - HipHop",
    singer: "Post Malone, Iann Dior, 24KGoldn ",
    image: "/images/t-usuk-2.jpg",
  },

  {
    id: 3,
    name: "Top 100 nhạc R&B",
    singer: "Giveon, Khalid, Nicky Minaj",
    image: "/images/t-usuk-3.jpg",
  },
  {
    id: 4,
    name: "Top 100 nhạc Rock Âu Mỹ",
    singer: "Simple Plan, KOJ, Foo Fighters",
    image: "/images/t-usuk-4.jpg",
  },
  {
    id: 5,
    name: "Top 100 nhạc Electronic Âu Mỹ",
    singer: "Alan Walker, K-391, Emelie Hollow",
    image: "/images/t-usuk-5.jpg",
  },
];

const top100chaua = [
  {
    id: 1,
    name: "Top 100 nhạc Hàn Quốc",
    singer: "BIGBANG, BLACKPINK, IVE ",
    image: "/images/t-chaua-1.jpg",
  },
  {
    id: 2,
    name: "Top 100 nhạc J-Pop",
    singer: "Kenshi Yonezu, YOASOBI, FLOW",
    image: "/images/t-chaua-2.jpg",
  },

  {
    id: 3,
    name: "Top 100 nhạc Hoa Ngữ",
    singer: "A Nhũng, Mộng Nhiên, Danh Quyết",
    image: "/images/t-chaua-3.jpg",
  },
  {
    id: 4,
    name: "Top 100 nhạc phim Hàn Quốc",
    singer: "Jo Jung Suk, Gaho, DAVICHI",
    image: "/images/t-chaua-4.jpg",
  },
  {
    id: 5,
    name: "Top 100 nhạc phim Hoa Ngữ",
    singer: "Cheng Xiao, Xu Kai, Angela Zhang",
    image: "/images/t-chaua-5.jpg",
  },
];

const TopMusic = () => {
  const navigate = useNavigate();
  const clickPlaylist = () => {
    navigate("/songplaying");
  };

  return (
    <div className="topmusic home">
      <div className="topmusic-banner">
        <img src="/images/b-top100.png" alt="top 100" />
      </div>
      <div className="card-list-group">
        <h3 className="h3-heading">Nổi bật</h3>
        <Grid container spacing={3}>
          {top100.map((list) => (
            <Grid item xs={6} sm={3} key={list.id}>
              <CardList listSong={list} onClick={clickPlaylist} />
            </Grid>
          ))}
        </Grid>
      </div>

      <div className="card-list-group">
        <h3 className="h3-heading">Nhạc Việt Nam</h3>
        <Grid container spacing={3}>
          {top100vn.map((list) => (
            <Grid item xs={6} sm={3} key={list.id}>
              <CardList listSong={list} onClick={clickPlaylist} />
            </Grid>
          ))}
        </Grid>
      </div>

      <div className="card-list-group">
        <h3 className="h3-heading">Nhạc Âu Mỹ</h3>
        <Grid container spacing={3}>
          {top100usuk.map((list) => (
            <Grid item xs={6} sm={3} key={list.id}>
              <CardList listSong={list} onClick={clickPlaylist} />
            </Grid>
          ))}
        </Grid>
      </div>

      <div className="card-list-group">
        <h3 className="h3-heading">Nhạc Châu Á</h3>
        <Grid container spacing={3}>
          {top100chaua.map((list) => (
            <Grid item xs={6} sm={3} key={list.id}>
              <CardList listSong={list} onClick={clickPlaylist} />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default TopMusic;
