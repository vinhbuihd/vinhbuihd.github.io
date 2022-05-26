import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Follow.scss";
import { Autoplay, Navigation, Pagination } from "swiper";
import NewFeed from "../../components/NewFeed";
import { Grid } from "@mui/material";

const newFeeds = [
  {
    id: 1,
    avatar: "/images/f-bigdaddy.jpg",
    name: "Big Daddy",
    caption: "Làm 1 tý Hạ Long với gia đình 😍",
    image: "/images/f-bigdaddy-img.jpg",
    like: 20,
    comment: 8,
    date: "23 tháng 5 lúc 11:33",
  },
  {
    id: 2,
    avatar: "/images/f-hongthanh-ava.jpg",
    name: "Hồng Thanh",
    caption: "Nắng...",
    image: "/images/f-hongthanh.jpg",
    like: 2,
    comment: 0,
    date: "23 tháng 5 lúc 11:26",
  },
  {
    id: 3,
    avatar: "/images/f-htling.jpg",
    name: "Hoàng Thùy Linh",
    caption:
      "Chúc mừng một mùa SEA Games đã diễn ra thành công và rực rỡ tại Việt Nam chúng ta",
    image: "/images/f-htling-img.jpg",
    like: 125,
    comment: 58,
    date: "23 tháng 5 lúc 12:30",
  },
  {
    id: 4,
    avatar: "/images/f-ndln.jpg",
    name: "Ninh Dương Lan Ngọc",
    caption:
      "Lần đầu chúc mừng sinh nhật Thỏ Ngọc hồn nhiên hơi ngơ ngơ mà thấy thương nhiều , hổng biết từ đâu va vào nhau, nhìn thấy hành trình thay đổi và cố gắng của bả mà trân trọng lắm",
    image: "/images/f-ndln-img.jpg",
    like: 25,
    comment: 18,
    date: "23 tháng 5 lúc 12:30",
  },
  {
    id: 5,
    avatar: "/images/f-huongly.jpg",
    name: "Hương Ly",
    caption: "Đi ăn lẩu Thái thôi cả nhà ơiiii",
    image: "/images/f-huongly-img.jpg",
    like: 225,
    comment: 118,
    date: "23 tháng 5 lúc 18:30",
  },
  {
    id: 6,
    avatar: "/images/f-trami-img.jpg",
    name: "Trà My Idol",
    caption:
      "Bác Park ơi!!! Cháu của bác nè 🥰Từ khi có bác mng được đi bão đều đều vui như trẩy hội 🥰Chúc mừng tất cả những chiến thắng của các vận động viên, tuyển bóng đá nam và bóng đá nữ cùng với tất cả những huy chương mà chúng ta có được tại Sea game 2022 ❤️❤️❤️",
    image: "/images/f-trami-big.jpg",
    like: 55,
    comment: 14,
    date: "23 tháng 5 lúc 15:05",
  },
];

const newFeeds2 = [
  {
    id: 7,
    avatar: "/images/f-vct.jpg",
    name: "Vũ Cát Tường",
    caption: "Ai mua ủng hộ tui đi!!!",
    image: "/images/f-vct-img.jpg",
    like: 120,
    comment: 18,
    date: "23 tháng 5 lúc 11:33",
  },
  {
    id: 8,
    avatar: "/images/f-tun.jpg",
    name: "Tun",
    caption: "Không nói nhiều, Việt Nam vô địch !!!",
    image: "/images/f-tun-img.jpg",
    like: 2,
    comment: 0,
    date: "23 tháng 5 lúc 11:26",
  },
  {
    id: 9,
    avatar: "/images/f-ttv.jpg",
    name: "Trường Thế Vinh",
    caption: "Happy birthday to me <3",
    image: "/images/f-ttv-img.jpg",
    like: 1225,
    comment: 258,
    date: "23 tháng 5 lúc 12:30",
  },
  {
    id: 10,
    avatar: "/images/f-miule.jpg",
    name: "Miu Lê",
    caption: "Có không giữ, mất mừng nhiều",
    image: "/images/f-miule-img.jpg",
    like: 225,
    comment: 218,
    date: "23 tháng 5 lúc 12:30",
  },
  {
    id: 11,
    avatar: "/images/f-ktq.jpg",
    name: "Khổng Tú Quỳnh",
    caption: "Thích một mình nhưng ngại cô đơn...",
    image: "/images/f-ktq-img.jpg",
    like: 225,
    comment: 118,
    date: "23 tháng 5 lúc 18:30",
  },
  {
    id: 12,
    avatar: "/images/f-khoi.jpg",
    name: "Khói",
    caption: "Custom outfit a không để quần dơ.",
    image: "/images/f-khoi-img.jpg",
    like: 55,
    comment: 14,
    date: "23 tháng 5 lúc 15:05",
  },
];

const Follow = () => {
  const [tab, settab] = useState("VN"); // 'VN', 'USUK', 'KPOP', "CPOP", "HOT"
  return (
    <div className="follow home">
      <div className="follow-nav d-flex justify-content-center">
        <div className="follow-tab">
          <button
            className={`btn ${tab == "VN" ? "active" : ""}`}
            onClick={() => settab("VN")}
          >
            Việt Nam
          </button>

          <button
            className={`btn ${tab == "USUK" ? "active" : ""}`}
            onClick={() => settab("USUK")}
          >
            US-UK
          </button>

          <button
            className={`btn ${tab == "KPOP" ? "active" : ""}`}
            onClick={() => settab("KPOP")}
          >
            KPOP
          </button>

          <button
            className={`btn ${tab == "CPOP" ? "active" : ""}`}
            onClick={() => settab("CPOP")}
          >
            CPOP
          </button>

          <button
            className={`btn ${tab == "HOT" ? "active" : ""}`}
            onClick={() => settab("HOT")}
          >
            NỔI BẬT
          </button>
        </div>
      </div>

      <div className="follow-main">
        <div className="card-list-group">
          <Swiper
            loop
            spaceBetween={40}
            slidesPerView={2}
            modules={[Autoplay, Navigation, Pagination]}
            autoplay={{
              delay: 3000,
              pauseOnMouseEnter: true,
              disableOnInteraction: false,
            }}
            navigation={true}
            breakpoints={{
              0: {
                slidesPerView: 2,
              },
              576: {
                slidesPerView: 3,
              },
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
                slidesPerView: 5,
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

        <div className="new-feed-group">
          <Grid container spacing={2}>
            <Grid item sm={6} xs={12}>
              {newFeeds.map((feed) => (
                <Grid item sm={12} key={feed.id}>
                  <NewFeed feed={feed} />
                </Grid>
              ))}
            </Grid>

            <Grid item sm={6} xs={12}>
              {newFeeds2.map((feed) => (
                <Grid item sm={12} key={feed.id}>
                  <NewFeed feed={feed} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default Follow;
