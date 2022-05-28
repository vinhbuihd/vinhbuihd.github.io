import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Home.css";
import { Grid } from "@mui/material";
import CardList from "../../components/CardList";
import { useNavigate, NavLink } from "react-router-dom";

import { FiMusic } from "react-icons/fi";
import { BiCategoryAlt } from "react-icons/bi";
import { AiOutlineStar } from "react-icons/ai";
import { MdOndemandVideo } from "react-icons/md";

const listSong = [
  {
    id: 1,
    name: "US-UK EDM",
    singer: "Những bản EDM chất nhất đến từ US UK",
    image: "/images/want-listen-1.jpg",
  },
  {
    id: 2,
    name: "Rap Việt mới nhất",
    singer: "Sol7 và những track vừa ra mắt của làng Rap Việt Nam",
    image: "/images/want-listen-2.jpg",
  },

  {
    id: 3,
    name: "Catchy tune",
    singer: "Dễ nghiện dễ nhớ, dễ bắt tai ngay từ lần nghe đầu tiên",
    image: "/images/want-listen-3.jpg",
  },
  {
    id: 4,
    name: "Girl Krush",
    singer: "Concept Girl Krush chưa bao giờ hết hot với các fan K-Pop",
    image: "/images/want-listen-4.jpg",
  },
];
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

const newSong = [
  {
    id: 1,
    name: "V-Pop Tháng 5/2022",
    singer: "Đông Nhi, Chillies, K-ICM",
    image: "/images/newsong-1.jpg",
  },
  {
    id: 2,
    name: "US-UK Tháng 5/2022",
    singer: "Justin Bieber, Sam Smith, Khalid",
    image: "/images/newsong-2.jpg",
  },

  {
    id: 3,
    name: "K-Pop Tháng 5/2022",
    singer: "Jessi, iKON, MoonByul",
    image: "/images/newsong-3.jpg",
  },
  {
    id: 4,
    name: "C-Pop Tháng 5/2022",
    singer: "Châu Thâm, Đào Tử, Tô Tinh Tiệp",
    image: "/images/newsong-4.jpg",
  },
];

const Home = () => {
  const navigate = useNavigate();

  const clickPlaylist = () => {
    navigate("/songplaying");
  };
  return (
    <div className="home">
      <Swiper
        loop
        className="home-slider"
        spaceBetween={10}
        slidesPerView={3}
        modules={[Autoplay, Navigation, Pagination]}
        autoplay={{
          delay: 3000,
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
        }}
        navigation={true}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <div className="home-slider-item">
            <img src="/images/slider-1.jpg" alt="slider" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="home-slider-item">
            <img src="/images/slider-2.jpg" alt="slider" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="home-slider-item">
            <img src="/images/slider-3.jpg" alt="slider" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="home-slider-item">
            <img src="/images/slider-4.jpg" alt="slider" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="home-slider-item">
            <img src="/images/slider-5.jpg" alt="slider" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="home-slider-item">
            <img src="/images/slider-6.jpg" alt="slider" />
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="home-category d-flex align-items-center">
        <NavLink to="/newmusic" className="navigation-item" title="Nhạc mới">
          <div className="navigation-item-icon">
            <FiMusic />
          </div>
          <div className="navigation-item-title">Nhạc mới</div>
        </NavLink>
        <NavLink to="/category" className="navigation-item" title="Thể loại">
          <div className="navigation-item-icon">
            <BiCategoryAlt />
          </div>
          <div className="navigation-item-title">Thể loại</div>
        </NavLink>
        <NavLink to="/topmusic" className="navigation-item" title="Top 100">
          <div className="navigation-item-icon">
            <AiOutlineStar />
          </div>
          <div className="navigation-item-title">Top 100</div>
        </NavLink>
        <NavLink to="/mv" className="navigation-item" title="MV">
          <div className="navigation-item-icon">
            <MdOndemandVideo />
          </div>
          <div className="navigation-item-title">MV</div>
        </NavLink>
      </div>

      <div className="card-list-group">
        <h3 className="h3-heading">Có thể bạn muốn nghe</h3>
        <Grid container spacing={3}>
          {listSong.map((list) => (
            <Grid item xs={6} sm={3} key={list.id}>
              <CardList listSong={list} onClick={clickPlaylist} />
            </Grid>
          ))}
        </Grid>
      </div>
      <div className="card-list-group">
        <h3 className="h3-heading">Top 100</h3>
        <Grid container spacing={3}>
          {top100.map((list) => (
            <Grid item xs={6} sm={3} key={list.id}>
              <CardList listSong={list} onClick={clickPlaylist} />
            </Grid>
          ))}
        </Grid>
      </div>

      <div className="card-list-group">
        <h3 className="h3-heading">Nhạc mới mỗi ngày</h3>
        <Grid container spacing={3}>
          {newSong.map((list) => (
            <Grid item xs={6} sm={3} key={list.id}>
              <CardList listSong={list} onClick={clickPlaylist} />
            </Grid>
          ))}
        </Grid>
      </div>

      <div className="card-list-group">
        <h3 className="h3-heading">Nghệ sĩ Yêu Thích</h3>

        <Swiper
          loop
          spaceBetween={40}
          slidesPerView={3}
          modules={[Autoplay, Navigation, Pagination]}
          autoplay={{
            delay: 3000,
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
          }}
          navigation={true}
          breakpoints={{
            768: {
              slidesPerView: 4,
            },
            992: {
              slidesPerView: 5,
            },

            1200: {
              slidesPerView: 4,
            },

            1300: {
              slidesPerView: 4,
            },
          }}
        >
          <SwiperSlide>
            <div className="home-singer">
              <img src="/images/ns-chi-dan.png" alt="chi-dan" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="home-singer">
              <img src="/images/ns-huong-ly.png" alt="huong-ly" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="home-singer">
              <img src="/images/ns-jack.png" alt="chi-dan" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="home-singer">
              <img src="/images/ns-justatee.png" alt="chi-dan" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="home-singer">
              <img src="/images/ns-karik.png" alt="chi-dan" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="home-singer">
              <img src="/images/ns-mr-siro.png" alt="chi-dan" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="home-singer">
              <img src="/images/ns-trinh-thang-binh.png" alt="chi-dan" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="home-singer">
              <img src="/images/ns-erik.png" alt="chi-dan" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="card-list-group">
        <h3 className="h3-heading">Nhạc Hot tháng</h3>
        <Grid container spacing={3}>
          {newSong.map((list) => (
            <Grid item xs={6} sm={3} key={list.id}>
              <CardList listSong={list} onClick={clickPlaylist} />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default Home;
