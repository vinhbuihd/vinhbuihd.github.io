import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CardList from "../../components/CardList";

import "./Category.scss";

const edm = [
  {
    id: 1,
    name: "EDM now",
    image: "/images/t-edm.jpg",
    singer: "The Chainsmokers, Alan Walker, Alesso",
  },
  {
    id: 2,
    name: "EDM 50: Zing Choice",
    image: "/images/t-edm50.jpg",
    singer: "Calvin Harris, Alan Walker, The Chainsmokers",
  },
  {
    id: 3,
    name: "DJ Station",
    image: "/images/t-dj.jpg",
    singer: "DJ Snake, Selena Gomez, Zedd",
  },
  {
    id: 4,
    name: "EDM with female vocals",
    image: "/images/t-edm-4.jpg",
    singer: "Marshmello, Halsey, Zedd",
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

const Category = () => {
  const navigate = useNavigate();

  const clickPlaylist = () => {
    navigate("/songplaying");
  };

  return (
    <div className="category home">
      <div className="category-banner">
        <img src="/images/vip.jpg" alt="vip" />
      </div>
      <div className="card-list-group">
        <h3 className="h3-heading">EDM</h3>
        <Grid container spacing={3}>
          {edm.map((list) => (
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
    </div>
  );
};

export default Category;
