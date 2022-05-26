import { Grid, Box } from "@mui/material";
import "./Radio.scss";
import CardList from "../../components/CardList";

const airRadio = [
  {
    id: 1,
    name: "Nhạc mới mỗi ngày",
    image: "/images/airRadio-1.jpg",
  },
  {
    id: 2,
    name: "Artist's story",
    image: "/images/airRadio-2.jpg",
  },

  {
    id: 3,
    name: "Wazzup",
    image: "/images/airRadio-3.jpg",
  },
  {
    id: 4,
    name: "Chạm x sao",
    image: "/images/airRadio-4.jpg",
  },
];

const newRadio = [
  {
    id: 1,
    name: "Khi em lớn",
    image: "/images/newRadio-1.jpg",
  },
  {
    id: 2,
    name: "All about Women",
    image: "/images/newRadio-2.jpg",
  },

  {
    id: 3,
    name: "Thủ thỉ thầm thì",
    image: "/images/newRadio-3.jpg",
  },
  {
    id: 4,
    name: "Đàn ông học",
    image: "/images/newRadio-4.jpg",
  },
];
const radio = [
  {
    id: 1,
    title: "XONE Radio",
    image: "/images/radio-1.jpg",
  },
  {
    id: 2,
    title: "V-POP",
    image: "/images/radio-2.jpg",
  },

  {
    id: 3,
    title: "On Air",
    image: "/images/radio-3.jpg",
  },
  {
    id: 4,
    title: "Bolero",
    image: "/images/radio-4.jpg",
  },
  {
    id: 5,
    title: "Chạm",
    image: "/images/radio-5.jpg",
  },
];

const singers = [
  {
    id: 1,
    image: "/images/ns-chi-dan.png",
  },
  {
    id: 2,
    image: "/images/ns-erik.png",
  },

  {
    id: 3,
    image: "/images/ns-huong-ly.png",
  },
  {
    id: 4,
    image: "/images/ns-jack.png",
  },
  {
    id: 5,
    image: "/images/ns-justatee.png",
  },
  {
    id: 6,
    image: "/images/ns-karik.png",
  },
  {
    id: 7,
    image: "/images/ns-mr-siro.png",
  },
  {
    id: 8,
    image: "/images/ns-trinh-thang-binh.png",
  },
];

const Radio = () => {
  return (
    <div className="radio home">
      <div className="card-list-group">
        <Grid container>
          {radio.map((list) => (
            <Grid item xs={4} sm={2.4} key={list.id}>
              <div className="radio-box" key={list.id}>
                <div className="radio-top">
                  <img
                    className="radio-top-img"
                    src="/svg/radio-1.svg"
                    alt="radio"
                  />
                  <img
                    className="radio-top-live-icon"
                    src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/live-tag.svg"
                    alt="live"
                  />
                  <CardList listSong={list} />
                </div>
                <div className="radio-bottom">{list.title}</div>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>

      <div className="card-list-group">
        <h3 className="h3-heading">On Air</h3>
        <Grid container spacing={3}>
          {airRadio.map((list) => (
            <Grid item xs={6} sm={3} key={list.id}>
              <CardList listSong={list} />
            </Grid>
          ))}
        </Grid>
      </div>

      <div className="card-list-group">
        <h3 className="h3-heading">Chương Trình Mới</h3>
        <Grid container spacing={3}>
          {newRadio.map((list) => (
            <Grid item xs={6} sm={3} key={list.id}>
              <CardList listSong={list} />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default Radio;
