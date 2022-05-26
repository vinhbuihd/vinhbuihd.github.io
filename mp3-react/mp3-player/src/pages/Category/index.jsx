import { Grid } from "@mui/material";
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

const Category = () => {
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
              <CardList listSong={list} />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default Category;
