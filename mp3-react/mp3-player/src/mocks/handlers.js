import { rest } from "msw";

const songs = [
  {
    id: "ZZAU7CAO",
    path: "/mp3/Tron_Ven_Nghia_Tinh.mp3",
    name: "Trọn Vẹn Nghĩa Tình",
    artists_names: "Ưng Hoàng Phúc, Wowy",
    lyric:
      "https://static-zmp3.zmdcdn.me/lyrics/d/e/b/c/debca5ce9656d11f9aee080b30869e0e.lrc",
    bigThumbnail: "/images/tronvennghiatinh-big.jpg",
    thumbnail:
      "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/f/c/8/7/fc8731ef0a79cdf73c3f30a0f01e4485.jpg?fs=MTY1MjmUsIC3MDU4NTAwNXx3ZWJWNHw",
    duration: 240,
    position: 1,
  },
  {
    id: "ZZBUE7ZA",
    path: "/mp3/Thuong_Em.mp3",
    name: "Thương Em",
    artists_names: "Châu Khải Phong, ACV",
    lyric:
      "https://static-zmp3.zmdcdn.me/lyrics/4/3/8/0/4380bfa57dafd052ec2d3fb695cacea2.lrc",
    bigThumbnail: "/images/thuongem-big.jpg",
    thumbnail:
      "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/b/0/0/3/b003deb65962e3b9b5f61f21f2f375ba.jpg?fs=MTY1MjmUsIC3MDU4NTAwNXx3ZWJWNHw",
    duration: 300,
    position: 2,
  },
  {
    id: "ZZ8FBUW9",
    path: "/mp3/DamCuoiNha.mp3",
    name: "Đám Cưới Nha?",

    artists_names: "Hồng Thanh, DJ Mie",

    lyric:
      "https://static-zmp3.zmdcdn.me/lyrics/5/8/5/3/5853eca22fc2741d52352ba654f6e959.lrc",
    bigThumbnail: "/images/damcuoinha-big.jpg",
    thumbnail:
      "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/5/b/8/b/5b8b7cd3d1434afa3b2b9854efdc8756.jpg?fs=MTY1MjmUsIC3MDU4NTAwNXx3ZWJWNHw",
    duration: 175,
  },
  {
    id: "ZZA9OZIO",
    path: "/mp3/ChoNgayCuoiEm.mp3",
    name: "Chờ Ngày Cưới Em",
    artists_names: "Phát Hồ, Hương Ly, X2X",
    lyric:
      "https://static-zmp3.zmdcdn.me/lyrics/3/5/8/d/358d14c61079baee165f3931da6d450b.lrc",
    bigThumbnail: "/images/ChoNgayCuoiEm-big.jpg",
    thumbnail:
      "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/3/8/6/8/38682a9b538219105ff3323d9d6efbb9.jpg?fs=MTY1MjmUsIC3MDU4NTAwNXx3ZWJWNHw",
    duration: 263,
  },
  {
    id: "ZZAFWE8Z",

    path: "https://mp3-s1-zmp3.zmdcdn.me/a05eaaa11be0f2beabf1/2170549633681295119?authen=exp=1652803679~acl=/a05eaaa11be0f2beabf1/*~hmac=6438e87e1e329e652307d5f3b1b49af2&fs=MTY1MjYzMDg3OTI1N3x3ZWJWNnwxMDE0MjYwOTkxfDU4LjE4Ny4xMjUdUngMjAy",
    name: "Thương Em Lắm",
    artists_names: "Tân Chề",
    lyric:
      "https://static-zmp3.zmdcdn.me/lyrics/f/b/4/9/fb4949ac1197e06ab4a6fca910976aca.lrc",
    bigThumbnail: "/images/ThuongEmLam-big.jpg",
    thumbnail:
      "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/b/9/0/1/b9014499063b9fd0a5292a5d797edd65.jpg?fs=MTY1MjmUsIC3MDU4NTAwNXx3ZWJWNHw",
    duration: 201,
  },
  {
    id: "ZZBUFCWD",
    path: "https://mp3-s1-zmp3.zmdcdn.me/9fe4ff7b533aba64e32b/2004360658756638383?authen=exp=1652944074~acl=/9fe4ff7b533aba64e32b/*~hmac=a75135d1478a54d7226aa60c2fccc7cb&fs=MTY1MjmUsIC3MTI3NDU0NXx3ZWJWNnwwfDExMy4xNjYdUngMTgzLjE3MQ",
    name: "Vạn Lý Cô Đơn",
    artists_names: "Dee Trần",
    lyric:
      "https://static-zmp3.zmdcdn.me/lyrics/5/e/e/b/5eeb915f64747b41a2c4f46df0e38f23.lrc",
    bigThumbnail: "/images/VanLyCoDon-big.jpg",
    thumbnail:
      "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/2/2/3/b/223b87bed0d96a982dc2dfaf28815b95.jpg?fs=MTY1MjmUsIC3MDU4NTAwNXx3ZWJWNHw",
    duration: 352,
  },
  {
    id: "ZZA07BED",
    path: "/mp3/SauLungAnhCoAiKia.mp3",
    name: "Sau Lưng Anh Có Ai Kìa",
    artists_names: "Thiều Bảo Trâm",
    lyric:
      "https://static-zmp3.zmdcdn.me/lyrics/b/a/2/1/ba21fa2b0eb67104521d856614cca598.lrc",
    bigThumbnail: "/images/SauLungAnhCoAiKia-big.jpg",
    thumbnail:
      "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/1/8/0/7/1807c6b5fcc7058a14e1a288801221c7.jpg?fs=MTY1MjmUsIC3MDU4NTAwNnx3ZWJWNHw",
    duration: 303,
  },
  {
    id: "ZZBWE9AZ",
    path: "https://mp3-s1-zmp3.zmdcdn.me/dc4b6085d3c43a9a63d5/5252830795539042274?authen=exp=1652803784~acl=/dc4b6085d3c43a9a63d5/*~hmac=535274d5b61ff40377d950af4eb65dbf&fs=MTY1MjYzMDk4NDg2NHx3ZWJWNnwwfDI3LjmUsICyLjE1NS4xOTE",

    name: "Bản Tình Ca Mùa Đông",

    artists_names: "Mr. B",

    lyric:
      "https://static-zmp3.zmdcdn.me/lyrics/d/8/7/a/d87a08a1dd0f8b49cf4567d66f4de17e.lrc",
    bigThumbnail: "/images/BanTinhCaMuaDong-big.jpg",
    thumbnail:
      "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/9/b/d/e/9bde90cda8e1c42463d825c8e5cfb85e.jpg?fs=MTY1MjmUsIC3MDU4NTAwNnx3ZWJWNHw",
    duration: 244,
  },
  {
    id: "ZZ9OIWA0",
    path: "/mp3/MuonEmLa.mp3",
    name: "Muốn Em Là",

    artists_names: "Keyo",

    lyric:
      "https://static-zmp3.zmdcdn.me/lyrics/a/3/7/0/a37019a95490eb2396bec5194bccb7b2.lrc",
    bigThumbnail: "/images/EmMuonLa-big.jpg",
    thumbnail:
      "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/7/4/0/9/7409e051f6f27cb8e6d241654ebb20d3.jpg?fs=MTY1MjmUsIC3MDU4NTAwNnx3ZWJWNHw",
    duration: 221,
  },
  {
    id: "ZZ9ADZ0Z",
    path: "/mp3/MayManKhiCoEm.mp3",

    name: "May Mắn Khi Có Em",

    artists_names: "Đạt Villa, Phạm Sắc Lệnh",

    lyric:
      "https://static-zmp3.zmdcdn.me/lyrics/c/8/6/a/c86a2ccdecfaa200c910bd2da94e476e.lrc",
    bigThumbnail: "/images/MayManKhiCoEm-big.jpg",
    thumbnail:
      "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/3/0/9/8/309880d36090dae9e8d72b17fd1a1785.jpg?fs=MTY1MjmUsIC3MDU4NTAwNnx3ZWJWNHw",
    duration: 353,
  },
  {
    id: "ZZ9DI6FU",
    path: "/mp3/BaoGioKetHon.mp3",

    name: "Bao Giờ Kết Hôn",

    artists_names: "Lý Tuấn Kiệt, Thế Minh",

    lyric:
      "https://static-zmp3.zmdcdn.me/lyrics/1/e/c/d/1ecde57bd5ef168416cbe0b0eb379fcd.lrc",
    bigThumbnail: "/images/BaoGioKetHon-big.jpg",
    thumbnail:
      "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/1/a/4/8/1a481c79381a770368bb065548005b67.jpg?fs=MTY1MjmUsIC3MDU4NTAwNnx3ZWJWNHw",
    duration: 212,
  },
  {
    id: "ZZBZA009",
    path: "/mp3/Co_Khong_Giu_Mat_Dung_Tim.mp3",

    name: "Có Không Giữ Mất Đừng Tìm",

    artists_names: "Trúc Nhân",

    lyric:
      "https://static-zmp3.zmdcdn.me/lyrics/d/5/1/c/d51c696d3d339ebea6d816a4e2e0dece.lrc",
    bigThumbnail: "/images/CoKhongGiuMatDungTim-big.jpg",
    thumbnail:
      "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/0/3/9/7/0397842eb359d014b1928c3a7ff7d548.jpg?fs=MTY1MjmUsIC3MDU4NTAwNnx3ZWJWNHw",
    duration: 216,
  },
  {
    id: "ZZB6DIWD",
    path: "https://mp3-s1-zmp3.zmdcdn.me/8fd1d7de7a9f93c1ca8e/2145098058115578398?authen=exp=1652804048~acl=/8fd1d7de7a9f93c1ca8e/*~hmac=c1f80833a43209176fe747672ea479ef&fs=MTY1MjYzMTI0ODmUsICxN3x3ZWJWNnwwfDExMy4xNjEdUngMjM1LjIxMA",

    name: "Xin Lỗi Anh Yêu Em",

    artists_names: "Mr. B",

    lyric:
      "https://static-zmp3.zmdcdn.me/lyrics/0/5/f/5/05f5157ee03be448bed59ee510575700.lrc",
    bigThumbnail: "/images/AnhXinLoiAnhYeuMinhEm-big.jpg",
    thumbnail:
      "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/d/0/3/1/d031b629e4b8194426974ffcf85a9181.jpg?fs=MTY1MjmUsIC3MDU4NTAwNnx3ZWJWNHw",
    duration: 236,
  },
  {
    id: "ZZUB0I0E",
    path: "/mp3/ChayVeNoiPhiaAnh.mp3",

    name: "Chạy Về Nơi Phía Anh",

    artists_names: "Khắc Việt",

    lyric:
      "https://static-zmp3.zmdcdn.me/lyrics/2/7/5/1/2751ef4b3cd808764b19e6ccc4e662d1.lrc",
    bigThumbnail: "/images/ChayVeNoiPhiaAnh-big.jpg",
    thumbnail:
      "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/6/3/0/d/630d20b0a79917e1545b4e2ada081040.jpg?fs=MTY1MjmUsIC3MDU4NTAwNnx3ZWJWNHw",
    duration: 181,
  },
  {
    id: "ZZBZAU6C",
    path: "https://mp3-s1-zmp3.zmdcdn.me/ed8b8b9527d4ce8a97c5/2160217880081964223?authen=exp=1652804065~acl=/ed8b8b9527d4ce8a97c5/*~hmac=43f256ed58c07a83b7833d28a6aedf0a&fs=MTY1MjYzMTI2NTA1MHx3ZWJWNnwxMDI1MDQwNzMwfDE0LjE4OS4yOC43Mw",

    name: "Cớ Sao Buông Bàn Tay",

    artists_names: "Tâm Tâm, HíuV, HOA HỒNG DẠI MUSIC",

    lyric:
      "https://static-zmp3.zmdcdn.me/lyrics/b/b/2/5/bb2592f0c17e54a09367dd58777157aa.lrc",
    bigThumbnail: "/images/CoSaoBuongTay-big.jpg",
    thumbnail:
      "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/c/c/9/2/cc92d5e50e297a470cac658c6c432fa8.jpg?fs=MTY1MjmUsIC3MDU4NTAwNnx3ZWJWNHw",
    duration: 289,
  },
  {
    id: "ZZA09OUC",
    path: "https://mp3-s1-zmp3.zmdcdn.me/2de0e8a3ace245bc1cf3/8880086914197593975?authen=exp=1652804291~acl=/2de0e8a3ace245bc1cf3/*~hmac=0da6d230a7418d3782fb998ce76dfbc0&fs=MTY1MjYzMTQ5MTYwNXx3ZWJWNnwxMDA4ODmUsICxNDAxfDE3MS4yNDAdUngMTA3LjY3",

    name: "Buồn Không Thể Buông",

    artists_names: "DREAMeR, Phí Phương Anh, RIN9, MiiNa",

    lyric:
      "https://static-zmp3.zmdcdn.me/lyrics/5/1/c/1/51c10850a065f831108aca715e92a3b6.lrc",
    bigThumbnail: "/images/BuonKhongTheBuong-big.jpg",
    thumbnail:
      "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/6/4/0/a/640ac5c5de098aee6af8a332310dfb20.jpg?fs=MTY1MjmUsIC3MDU4NTAwNnx3ZWJWNHw",
    duration: 238,
  },
  {
    id: "ZZA07O7Z",
    path: "/mp3/Ve_Nghe_Me_Ru.mp3",

    name: "Về Nghe Mẹ Ru",

    artists_names: "NSND Bạch Tuyết, Hoàng Dũng, Hứa Kim Tuyền, 14 Casper",

    lyric:
      "https://static-zmp3.zmdcdn.me/lyrics/4/5/0/b/450bd9efdd9c5b54cf3c90e8e9d457a8.lrc",
    bigThumbnail: "/images/VeMeNgheRu-big.jpg",
    thumbnail:
      "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/2/8/3/1/28319835a3d7576ff6c20d94fec136e3.jpg?fs=MTY1MjmUsIC3MDU4NTAwNnx3ZWJWNHw",
    duration: 224,
  },
  {
    id: "ZZBWAUW6",
    path: "https://mp3-s1-zmp3.zmdcdn.me/7e729d692f28c6769f39/2891513937309137842?authen=exp=1652804366~acl=/7e729d692f28c6769f39/*~hmac=acdc7ee2e3696a76b5469863172a6561&fs=MTY1MjYzMTU2NjA3OXx3ZWJWNnwwfDExOC42OS42Ny4yMDA",

    name: "9 Vì Yêu",

    artists_names: "Đinh Đại Vũ, Châu Dương",

    lyric:
      "https://static-zmp3.zmdcdn.me/lyrics/d/f/6/1/df6109f20ea30502a899e713f5032731.lrc",
    bigThumbnail: "/images/9ViYeu-big.jpg",
    thumbnail:
      "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/f/e/b/6/feb644ae2dbad9d66b1f91131df79410.jpg?fs=MTY1MjmUsIC3MDU4NTAwNnx3ZWJWNHw",
    duration: 212,
  },
  {
    id: "ZZO0F8BW",
    path: "/mp3/YeuDuongKhoQuaThiChayVeKhocVoiAnh.mp3",
    name: "Chạy Về Khóc Với Anh",

    artists_names: "ERIK",

    lyric:
      "https://static-zmp3.zmdcdn.me/lyrics/a/a/f/9/aaf93cc7a4160ce64b85f4b7557b3f22.lrc",
    bigThumbnail: "/images/ChayVeKhocVoiAnh-big.jpg",
    thumbnail:
      "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/c/6/d/e/c6def069a1a885c41fe479358fa7c506.jpg?fs=MTY1MjmUsIC3MDU4NTAwNnx3ZWJWNHw",
    duration: 224,
  },
  {
    id: "ZZ9UWZO7",
    path: "/mp3/Rung_Dong.mp3",
    name: "Rung Động",

    artists_names: "Dương Edward",

    lyric:
      "https://static-zmp3.zmdcdn.me/lyrics/3/e/a/c/3eace43b98917b9205bc12fc6c8a2a3f.lrc",
    bigThumbnail: "/images/RungDong-big.jpg",
    thumbnail:
      "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/d/e/3/8/de38ea78ded4ceaf57bd74b07125bcef.jpg?fs=MTY1MjmUsIC3MDU4NTAwNnx3ZWJWNHw",
    duration: 259,
  },
];

export const handlers = [
  rest.get("/songs", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(songs));
  }),

  rest.post("/songs", (req, res, ctx) => {
    sessionStorage.setItem("is-authenticated", "true");

    return res(ctx.status(200), ctx.json(req.body));
  }),
];
