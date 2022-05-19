import { rest } from "msw";

const songs = [
  {
    id: "ZZAU7CAO",
    path: "/mp3/Tron_Ven_Nghia_Tinh.mp3",
    name: "Trọn Vẹn Nghĩa Tình",
    artists_names: "Ưng Hoàng Phúc, Wowy",
    lyric: `[00:19.77] Vest đen đeo cà vạt chỉnh tề
    [00:21.53] Đoàn người đi chậm
    [00:22.54] Trên con đường kính lễ
    [00:23.79] Hôm nay là một ngày không dễ
    [00:25.25] Kính đen để không thấy
    [00:26.25] Hàng mắt đỏ đang vương hàng lệ
    [00:28.01] Anh em tiễn người thân chia xa
    [00:29.96] Cùng đi qua những khoảng thời gian
    [00:31.73] Bôn ba tua ngược những kí ức
    [00:33.51] Như bánh xe đang lăn
    [00:34.51] Trong con tim đang lặng
    [00:35.52] Chợt thăng rồi thả
    [00:36.72] Đời lên rồi xuống cầm lên rồi buông
    [00:40.99] Anh em nguyện chung một chí hướng
    [00:42.74] Vượt qua mọi trận chiến
    [00:43.76] Đó là điều mình muốn
    [00:45.03] Cho đến khi nằm xuống
    [00:46.48] Anh em bên nhau dù thấp hay cao
    [00:50.74] Dù có ra sao có mày và tao
    [00:54.95] Thuở mới đôi mươi
    [00:55.95] Tôi đã dậm chân ra đời
    [00:58.96] Tình nghĩa keo sơn
    [01:00.66] Ngang dọc ngược xuôi
    [01:02.93] Có khi tôi nhận ra là
    [01:04.94] Những câu chuyện ngày qua
    [01:07.71] Thời thế đổi thay
    [01:08.96] Đời ai nào hay nhanh như vậy
    [01:12.23] Một nén hương dâng
    [01:13.23] Anh em nguyện luôn chung tình
    [01:16.49] Thề mãi bên nhau
    [01:17.49] Dẫu vạn lần thương đau
    [01:20.25] Sẽ không bao giờ thay lòng
    [01:22.51] Cũng không bao giờ nói không
    [01:24.77] Dù nguy dù nan
    [01:25.77] Anh em chẳng hề một lòng than van
    [01:28.47] Đường dài tôi bước
    [01:29.73] Một mình trong cơn mưa
    [01:32.49] Tôi vẫn cứ là tôi
    [01:33.99] Tôi ngày này năm xưa
    [01:37.26] Bão giông bủa vây ngút ngàn
    [01:39.02] Lắm khi chuyện tình trái ngang
    [01:41.55] Dù đời vô thế
    [01:42.80] Có chết cũng chẳng phản bội ước thề
    [01:45.81] Một lời khi thốt miệng rồi
    [01:48.32] Như rồng thiêng
    [01:49.83] Bay vẫn cứ lượn bay
    [01:51.58] Nơi muôn vạn trời mây
    [01:54.34] Mãi luôn nằm trong tim mình
    [01:56.86] Trắng đen đợi ngày xác minh
    [01:59.12] Chẳng cần phải nói
    [02:00.37] Sống sao cho
    [02:01.62] Trọn vẹn nghĩa tình được không
    [02:04.65] Hai bên có nhật và nguyệt
    [02:06.15] Đi lên làm điều mình quyết
    [02:08.41] Sau lưng không có gì nuối tiếc
    [02:10.67] Anh em một lần là
    [02:11.93] Trọn đời này suốt kiếp
    [02:12.93] Nhất ngôn cữu đỉnh nan truy
    [02:15.19] Bắt tay khi gặp gian nguy
    [02:17.19] Vay trả nghĩa tình không để phí
    [02:19.21] Có người ra đi
    [02:20.22] Thì cũng có người ra đi
    [02:21.47] Bên trái mà gục xuống
    [02:22.73] Thì bên phải cũng chia ly
    [02:23.73] Bên dưới mà lên trời
    [02:24.73] Thì lãnh địa này phân kỳ
    [02:25.99] Đằng trước không dồng ý
    [02:27.00] Thì về sau khỏi suy nghĩ
    [02:28.00] Một lần và mãi mãi
    [02:29.03] Dứt trọn tình tri kỉ
    [02:30.28] Đồng ý không có đúng sai
    [02:32.04] Mãi mãi nhân quả
    [02:32.79] Không có đứng lại
    [02:33.81] Tương trợ gặp gỡ
    [02:34.82] Đến lúc tương tàn
    [02:36.08] Đi chung đỏ đen
    [02:37.08] Luôn luôn tương phản
    [02:38.34] Tứ phương tám hướng
    [02:39.34] Ranh giới chia rẽ
    [02:40.60] Khác đường khác hướng
    [02:41.60] Nhật nguyệt âm dương
    [02:42.85] Đường dài tôi bước
    [02:44.10] Một mình trong cơn mưa
    [02:46.61] Tôi vẫn cứ là tôi
    [02:48.37] Tôi ngày này năm xưa
    [02:51.38] Bão giông bủa vây ngút ngàn
    [02:53.64] Lắm khi chuyện tình trái ngang
    [02:55.90] Dù đời vô thế
    [02:57.15] Có chết cũng chẳng
    [02:58.40] Phản bội ước thề
    [03:00.17] Một lời khi thốt miệng rồi
    [03:02.42] Như rồng thiêng
    [03:04.11] Bay vẫn cứ lượn bay
    [03:05.86] Nơi muôn vạn trời mây
    [03:08.88] Mãi luôn nằm trong tim mình
    [03:10.88] Trắng đen đợi ngày xác minh
    [03:13.14] Chẳng cần phải nói
    [03:14.40] Sống sao cho
    [03:15.90] Trọn vẹn nghĩa tình được không
    [03:18.91] Đời lên rồi xuống
    [03:21.12] Cầm lên rồi buông
    [03:23.13] Anh em nguyện chung một chí hướng
    [03:24.64] Cho đến khi nằm xuống
    [03:26.34] Mãi luôn nằm trong tim mình
    [03:28.59] Trắng đen đợi ngày xác minh
    [03:30.60] Chẳng cần phải nói sống sao
    [03:33.11] Cho trọn vẹn nghĩa tình được không
    [03:39.89] Được không
    [03:47.93] Được không`,
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
    lyric: `[00:37.60] Ngày mà em vui nhất
    [00:39.99] Là ngày em theo người
    [00:42.78] Trong áo hoa màu trắng
    [00:45.17] Miệng cười rất tươi
    [00:47.58] Buồn nào hơn lúc này
    [00:49.97] Đôi mắt khóe cay
    [00:52.37] Bâng khuâng đứng nhìn theo
    [00:55.15] Nỗi buồn khô héo
    [00:57.94] Người ta cho em
    [00:59.54] Cuộc sống trong sang giàu
    [01:02.33] Lụa là phấn son
    [01:04.32] Cầu mong em sẽ quên anh
    [01:07.91] Cuộc tình một thuở ấm êm
    [01:10.30] Nay đã phai màu
    [01:12.69] Đành ôm thương đau
    [01:13.88] Chúc em yên vui về sau
    [01:17.47] Thầm trách lương duyên
    [01:18.66] Cho anh gặp người con gái
    [01:20.66] Anh đã rất thương
    [01:23.33] Trong khi bản thân khốn khó đủ đường
    [01:28.11] Thương em ngày tháng bên anh
    [01:30.50] Em chẳng sung sướng
    [01:33.29] Từ nay hãy sống tốt
    [01:34.88] Bên người anh đã nhường
    [01:37.67] Nặng tình khóc trong cơn say
    [01:40.06] Lòng đau lắm em đâu có hay
    [01:43.25] Kể từ khi rời xa
    [01:45.24] Đến nay vẫn còn áy náy
    [01:48.43] Thương em cho đến khi
    [01:50.42] Cạn hơi thở vẫn thương
    [01:52.69] Thật xin lỗi không thể cùng em
    [01:55.08] Đến cuối con đường
    [02:28.97] Người ta cho em cuộc sống trong sang giàu
    [02:33.36] Lụa là phấn son
    [02:35.75] Cầu mong em sẽ quên anh
    [02:38.93] Cuộc tình một thuở ấm êm
    [02:41.33] Nay đã phai màu
    [02:43.32] Đành ôm thương đau
    [02:44.91] Chúc em yên vui về sau
    [02:48.50] Thầm trách lương duyên
    [02:49.72] Cho anh gặp người con gái
    [02:51.71] Anh đã rất thương
    [02:54.10] Trong khi bản thân khốn khó đủ đường
    [02:58.88] Thương em ngày tháng bên anh
    [03:01.67] Em chẳng sung sướng
    [03:04.06] Từ nay hãy sống tốt
    [03:06.05] Bên người anh đã nhường
    [03:08.44] Nặng tình khóc trong cơn say
    [03:11.23] Lòng đau lắm em đâu có hay
    [03:14.42] Kể từ khi rời xa đến nay
    [03:16.81] Vẫn còn áy náy
    [03:19.60] Thương em cho đến khi
    [03:21.22] Cạn hơi thở vẫn thương
    [03:23.61] Thật xin lỗi không thể cùng em
    [03:26.40] Đến cuối con đường
    [03:31.57] Thầm trách lương duyên
    [03:32.77] Cho anh gặp người con gái
    [03:34.36] Anh đã rất thương
    [03:37.16] Trong khi bản thân khốn khó đủ đường
    [03:41.93] Thương em ngày tháng bên anh
    [03:44.32] Em chẳng sung sướng
    [03:47.11] Từ nay hãy sống tốt
    [03:49.11] Bên người anh đã nhường
    [03:51.50] Nặng tình khóc trong cơn say
    [03:54.29] Lòng đau lắm em đâu có hay
    [03:57.47] Kể từ khi rời xa đến nay
    [03:59.87] Vẫn còn áy náy
    [04:02.25] Thương em cho đến khi
    [04:04.25] Cạn hơi thở vẫn thương
    [04:06.64] Thật xin lỗi không thể cùng em
    [04:09.03] Đến cuối con đường
    [04:15.00] Thương em cho đến khi
    [04:16.60] Cạn hơi thở vẫn thương
    [04:19.39] Thật xin lỗi không thể cùng em
    [04:25.36] Đến cuối con đường`,
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

    lyric: `[00:16.25] Trai tài gái sắc
      [00:18.01] Đôi mình là nhất
      [00:19.76] Làng trên xóm dưới
      [00:21.28] Đẹp đôi thì có ai bằng
      [00:23.78] Yêu nhau mấy mùa trăng
      [00:25.23] Đến lúc tính chuyện trăm năm
      [00:26.99] Chuyến này anh quyết
      [00:28.74] Cưới em liền tay này
      [00:31.00] Đàn trai bưng mâm
      [00:32.00] Theo sau anh rước em về làm dâu
      [00:34.27] Ngày lành trong tháng
      [00:35.27] Trầu cau anh sang
      [00:36.27] Đeo tay em chiếc nhẫn vàng
      [00:38.03] Ôi vui quá xá em ơi
      [00:40.49] Rượu mừng mình nâng ly
      [00:41.75] Ngày mình vu quy
      [00:42.76] Thì ngần ngại chi 1 2 3 dzô hết ly
      [00:45.52] Kiệu vàng ngựa ô
      [00:46.52] Anh khớp đón em về dinh rồi
      [00:49.29] Pháo bay nổ tung trời
      [00:51.05] Cùng xây giấc mơ tuyệt vời
      [00:53.00] Năm sau anh quyết mà làm giàu
      [00:54.76] Cho em sung sướng đến mai sau
      [00:56.78] Đừng lo sóng gió
      [00:57.55] Chuyện gì mà khó thì cứ để đó anh lo
      [01:17.62] Trai tài gái sắc
      [01:19.64] Đôi mình là nhất
      [01:21.39] Làng trên xóm dưới
      [01:22.65] Đẹp đôi thì có ai bằng
      [01:25.16] Yêu nhau mấy mùa trăng
      [01:26.67] Đến lúc tính chuyện trăm năm
      [01:28.93] Chuyến này anh quyết
      [01:30.18] Cưới em liền tay này
      [01:32.18] Đàn trai bưng mâm
      [01:33.20] Theo sau anh rước em về làm dâu
      [01:35.71] Ngày lành trong tháng
      [01:36.72] Trầu cau anh sang
      [01:37.72] Đeo tay em chiếc nhẫn vàng
      [01:39.48] Ôi vui quá xá em ơi
      [01:41.23] Rượu mừng mình nâng ly
      [01:43.25] Ngày mình vu quy
      [01:44.25] Thì ngần ngại chi 1 2 3 dzô hết luôn
      [01:47.01] Kiệu vàng ngựa ô
      [01:48.01] Anh khớp đón em về dinh rồi
      [01:50.73] Pháo bay nổ tung trời
      [01:52.47] Cùng xây giấc mơ tuyệt vời
      [01:54.43] Năm sau anh quyết mà làm giàu
      [01:56.19] Cho em sung sướng đến mai sau
      [01:57.95] Đừng lo sóng gió
      [01:59.16] Chuyện gì mà khó thì cứ để đó anh lo
      [02:02.17] Ví dầu cầu ván mà đóng đinh
      [02:04.88] Anh sẽ đưa em đi về dinh
      [02:06.65] Anh hứa yêu em mãi chung tình
      [02:09.44] Cầu tre gập ghềnh mà khó đi
      [02:12.21] Anh sẽ dắt tay em dìu đi
      [02:13.96] Ôi vui quá xá từ đây hết ế
      [02:16.48] Kiệu vàng ngựa ô
      [02:17.77] Anh khớp đón em về dinh rồi
      [02:20.03] Pháo bay nổ tung trời
      [02:22.04] Cùng xây giấc mơ tuyệt vời
      [02:24.05] Năm sau anh quyết mà làm giàu
      [02:26.05] Cho em sung sướng đến mai sau
      [02:27.80] Đừng lo sóng gió
      [02:28.82] Chuyện gì mà khó thì cứ để đó anh lo`,
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
    lyric: `[00:12.23] Chờ đợi em bấy lâu nay
      [00:13.99] Để kêu anh bằng chồng
      [00:15.49] Trọn đời anh hứa sẽ không hai lòng
      [00:19.01] Kết thông gia hai nhà ta
      [00:21.02] Tùng dinh tùng dinh qua rước dâu
      [00:22.78] Bằng lòng anh sang
      [00:23.78] Anh mang bưng theo cau trầu
      [00:26.31] Mãi mãi không đổi thay
      [00:28.08] Tình này nguyện trao em đắm say
      [00:29.83] Cưới em về
      [00:30.85] Sẽ không bao giờ để em khóc
      [00:33.59] Nếu như một ngày em buồn
      [00:35.35] Anh sẽ làm cả bầu trời
      [00:37.10] Để cho em thấy không chơi vơi
      [00:43.33] Cuộc đời rắc rối
      [00:44.33] Lắm lúc thăng trầm mỗi tối
      [00:46.34] Chỉ ước mong sao
      [00:47.59] Để mau được giàu lên
      [00:50.37] Nhờ người mai mối
      [00:51.62] Để rước em về mỗi tối
      [00:53.37] Nằm cạnh bên em
      [00:54.87] Để kêu em vợ ơi
      [00:57.63] Bởi quá thương em
      [00:59.14] Nên anh ráng sang năm
      [01:00.90] Mần ăn lên anh hốt em về làm dâu
      [01:04.91] Chút yêu thương thêm chút mê say
      [01:07.69] Làm lòng em chắc chắn sẽ là ngất ngây
      [01:13.51] Chờ đợi em bấy lâu nay
      [01:15.29] Để kêu anh bằng chồng
      [01:16.79] Trọn đời anh hứa sẽ không hai lòng
      [01:20.31] Kết thông gia hai nhà ta
      [01:22.36] Tùng dinh tùng dinh qua rước dâu
      [01:24.11] Bằng lòng anh sang
      [01:25.11] Anh mang bưng theo cau trầu
      [01:27.63] Mãi mãi không đổi thay
      [01:29.38] Tình này nguyện trao em đắm say
      [01:31.39] Cưới em về
      [01:32.41] Sẽ không bao giờ để em khóc
      [01:34.91] Nếu như một ngày em buồn
      [01:36.93] Anh sẽ làm cả bầu trời
      [01:38.68] Để cho em thấy không chơi vơi
      [02:00.75] Rước con dâu hiền ngoan
      [02:02.04] Để rồi pháo hoa theo tràn lan
      [02:04.04] Rượu mừng uống cho sang thiệt sang
      [02:05.82] Họ hàng chúc cho ta rùm rang
      [02:07.58] Lòng mừng vì có em bên đời anh
      [02:09.36] Cùng nhau mình sánh bạc mái đầu xanh
      [02:11.12] Hẹn lòng nguyện ước trăm năm thành đôi
      [02:12.87] Giờ mình cùng tính đi ôi dồi ôi vô rồi
      [02:17.15] Bởi quá thương em
      [02:18.41] Nên anh ráng sang năm
      [02:19.92] Mần ăn lên anh hốt em về làm dâu
      [02:24.44] Chút yêu thương thêm chút mê say
      [02:27.21] Làm lòng em chắc chắn sẽ là ngất ngây
      [02:32.75] Chờ đợi em bấy lâu nay
      [02:34.51] Để kêu anh bằng chồng
      [02:36.27] Trọn đời anh hứa sẽ không hai lòng
      [02:40.02] Kết thông gia hai nhà ta
      [02:41.78] Tùng dinh tùng dinh qua rước dâu
      [02:43.54] Bằng lòng anh sang
      [02:44.54] Anh mang bưng theo cau trầu
      [02:47.06] Mãi mãi không đổi thay
      [02:49.07] Tình này nguyện trao em đắm say
      [02:50.84] Cưới em về
      [02:51.85] Sẽ không bao giờ để em khóc
      [02:54.36] Nếu như một ngày em buồn
      [02:56.36] Anh sẽ làm cả bầu trời
      [02:57.88] Để cho em thấy không chơi vơi
      [03:03.62] Thương anh mấy núi em cũng trèo
      [03:06.38] Mấy sông em cũng lội
      [03:07.89] Mấy đèo em cũng qua
      [03:10.91] Thương anh cái tính anh thật thà
      [03:13.42] Trai quê mà chân chất
      [03:15.21] Mượt mà sao dễ thương
      [03:19.97] Chờ đợi em bấy lâu nay
      [03:21.48] Để kêu anh bằng chồng
      [03:23.00] Trọn đời anh hứa sẽ không hai lòng
      [03:26.77] Kết thông gia hai nhà ta
      [03:28.52] Tùng dinh tùng dinh qua rước dâu
      [03:30.28] Bằng lòng anh sang
      [03:31.29] Anh mang bưng theo cau trầu
      [03:33.79] Mãi mãi không đổi thay
      [03:35.80] Tình này nguyện trao em đắm say
      [03:37.59] Cưới em về
      [03:38.59] Sẽ không bao giờ để em khóc
      [03:41.36] Nếu như một ngày em buồn
      [03:43.12] Anh sẽ làm cả bầu trời
      [03:44.87] Để cho em thấy không chơi vơi`,
    bigThumbnail: "/images/ChoNgayCuoiEm-big.jpg",
    thumbnail:
      "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/3/8/6/8/38682a9b538219105ff3323d9d6efbb9.jpg?fs=MTY1MjmUsIC3MDU4NTAwNXx3ZWJWNHw",
    duration: 263,
  },
  {
    id: "ZZAFWE8Z",

    path: "/mp3/ThuongEmLam.mp3",
    name: "Thương Em Lắm",
    artists_names: "Tân Chề",
    lyric: `[00:15.49] Em ơi anh thương em lắm
      [00:17.08] Tay đâu đưa đây anh nắm
      [00:18.94] Chọn một ngày lành trong năm
      [00:20.55] Anh sẽ qua anh rước em về
      [00:22.88] Và đám cưới trên đường quê
      [00:24.20] Đi trên con đê vui ghê
      [00:26.33] Rình rang pháo nổ rộn ràng
      [00:27.93] Từ đây thiếp sẽ theo chàng
      [00:31.30] Nếu như cuộc đời này không có em
      [00:33.65] Thì anh đây biết sống làm sao
      [00:35.50] Dù cho có sang giàu
      [00:38.63] Thế nên anh về anh thưa má ba
      [00:40.69] Hẹn ngày đi qua nhà em
      [00:42.56] Xin kết tình mà thông gia
      [00:44.88] Em ơi bằng lòng đi em
      [00:46.48] Anh thương em thương nhất trên đời
      [00:48.29] Dù vật đổi sao dời
      [00:49.91] Anh đây chẳng dối nửa lời
      [00:52.29] Ngọt bùi mình cùng chia sớt
      [00:53.88] Ta thương nhau trước sau như một
      [00:55.93] Rồi mình tò te tú tí
      [00:57.28] Mai sau đón thêm đàn con
      [00:59.62] Em ơi anh thương em lắm
      [01:01.22] Tay đâu đưa đây anh nắm
      [01:03.35] Chọn một ngày lành trong năm
      [01:04.95] Anh sẽ qua anh rước em về
      [01:07.07] Và đám cưới trên đường quê
      [01:08.40] Đi trên con đê vui ghê
      [01:10.52] Rình rang pháo nổ rộn ràng
      [01:12.13] Từ đây thiếp sẽ theo chàng
      [01:30.35] Nếu như cuộc đời này không có em
      [01:32.74] Thì anh đây biết sống làm sao
      [01:34.33] Dù cho có sang giàu
      [01:37.79] Thế nên anh về anh thưa má ba
      [01:39.92] Hẹn ngày đi qua nhà em
      [01:41.77] Xin kết tình mà thông gia
      [01:43.90] Em ơi bằng lòng đi em
      [01:45.51] Anh thương em thương nhất trên đời
      [01:47.64] Dù vật đổi sao dời
      [01:48.97] Anh đây chẳng dối nửa lời
      [01:51.35] Ngọt bùi mình cùng chia sớt
      [01:52.95] Ta thương nhau trước sau như một
      [01:55.07] Rồi mình tò te tú tí
      [01:56.40] Mai sau đón thêm thằng ku
      [01:58.79] Em ơi anh thương em lắm
      [02:00.38] Tay đâu đưa đây anh nắm
      [02:02.24] Chọn một ngày lành trong năm
      [02:04.05] Anh sẽ qua anh rước em về
      [02:06.17] Và đám cưới trên đường quê
      [02:07.50] Đi trên con đê vui ghê
      [02:09.63] Rình rang pháo nổ rộn ràng
      [02:11.22] Từ đây thiếp sẽ theo chàng
      [02:14.67] Dzô là dzô là dzô
      [02:16.00] Ngày vui mình cùng nâng ly
      [02:17.81] Vòng tay phu thê cạn chén rượu tình
      [02:22.06] Say là say là say
      [02:23.34] Ngày vui mình cùng say đi
      [02:25.20] Để năm sau
      [02:26.00] Mình đón bé trai đầu lòng
      [02:27.80] Em ơi, em ơi anh thương em lắm
      [02:29.93] Tay đâu đưa đây anh nắm
      [02:32.05] Chọn một ngày lành trong năm
      [02:33.64] Anh sẽ qua anh rước em về
      [02:35.77] Và đám cưới trên đường quê
      [02:37.10] Đi trên con đê vui ghê
      [02:39.23] Rình rang pháo nổ rộn ràng
      [02:40.83] Từ đây thiếp ở bên chàng`,
    bigThumbnail: "/images/ThuongEmLam-big.jpg",
    thumbnail:
      "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/b/9/0/1/b9014499063b9fd0a5292a5d797edd65.jpg?fs=MTY1MjmUsIC3MDU4NTAwNXx3ZWJWNHw",
    duration: 201,
  },
  {
    id: "ZZBUFCWD",
    path: "/mp3/Van-Ly-Co-Don-Dee-Tran.mp3",
    name: "Vạn Lý Cô Đơn",
    artists_names: "Dee Trần",
    lyric: `[00:30.60] Đừng bận tâm đến anh như nào
      [00:37.38] Mình rời xa nhau
      [00:39.36] Chẳng cần ồn ào
      [00:44.55] Bởi em đang thay đổi vô chừng
      [00:51.72] Giờ hai ta
      [00:53.31] Thành người đã từng
      [00:57.30] Thành phố quá chật chội
      [00:59.28] Em ơi nhìn đâu cũng nhớ em
      [01:04.47] Có khi mất cả đời
      [01:06.45] Để thôi vấn vương một người
      [01:11.25] Lời em hứa chẳng qua là đang
      [01:14.42] Vỗ về anh đấy thôi mà
      [01:19.20] Từng là nơi bình yên
      [01:21.59] Nhưng giờ anh mất tất cả
      [01:28.37] Trở thành người dưng
      [01:31.16] Gặp em lại cố vui mừng
      [01:35.54] Nước mắt rưng rưng
      [01:38.34] Nhìn em giữa trời lưng chừng
      [01:42.71] Chẳng còn ai
      [01:45.10] Để anh tin giữa hiện tại
      [01:49.49] Và sẽ chẳng còn ai
      [01:51.88] Để anh cảm thấy nhẫn nại
      [01:56.65] Em như tảng băng trôi
      [01:59.07] Anh làm sao có thể thấu em ơi
      [02:03.51] Và sự lừa dối
      [02:06.29] Vẫn chìm sâu im ắng không lời
      [02:10.68] Đoạn kết quá đẹp
      [02:13.07] Đẹp với em
      [02:14.26] Nhưng với anh xem như hết
      [02:17.85] Vạn lý cô đơn
      [02:20.63] Xa cách em càng nhớ em hơn
      [02:26.21] Còn yêu lòng bao đắn đo
      [02:29.00] Vẫn mãi cô đơn dày vò
      [02:33.02] Tổn thương dường như quá xa
      [02:35.80] Giới hạn của anh mà
      [02:53.72] Trời không mưa
      [02:55.33] Một mình lang thang dòng người
      [02:57.72] Đã quá trưa
      [03:00.91] Nỗi đau xót trong lòng
      [03:02.89] Cạn đi nước mắt hai dòng
      [03:07.67] Lời em hứa chẳng qua là đang
      [03:10.86] Vỗ về anh đấy thôi mà
      [03:15.25] Từng là nơi bình yên
      [03:18.03] Nhưng giờ anh mất tất cả
      [03:25.20] Trở thành người dưng
      [03:27.59] Gặp em lại cố vui mừng
      [03:31.98] Nước mắt rưng rưng
      [03:34.76] Nhìn em giữa trời lưng chừng
      [03:39.15] Chẳng còn ai
      [03:41.54] Để anh tin giữa hiện tại
      [03:46.35] Và sẽ chẳng còn ai
      [03:48.34] Để anh cảm thấy nhẫn nại
      [03:53.12] Em như tảng băng trôi
      [03:55.90] Anh làm sao có thể thấu em ơi
      [03:59.90] Và sự lừa dối
      [04:02.68] Vẫn chìm sâu im ắng không lời
      [04:07.07] Đoạn kết quá đẹp
      [04:09.85] Đẹp với em
      [04:11.05] Nhưng với anh xem như hết
      [04:14.24] Vạn lý cô đơn
      [04:17.02] Xa cách em càng nhớ em hơn
      [04:21.41] Trở thành người dưng
      [04:24.21] Gặp em lại cố vui mừng
      [04:28.58] Nước mắt rưng rưng
      [04:30.97] Nhìn em giữa trời lưng chừng
      [04:35.75] Chẳng còn ai
      [04:38.14] Để anh tin giữa hiện tại
      [04:42.53] Và sẽ chẳng còn ai
      [04:44.92] Để anh cảm thấy nhẫn nại
      [04:49.30] Em như tảng băng trôi
      [04:52.08] Anh làm sao có thể thấu em ơi
      [04:56.47] Và sự lừa dối
      [04:59.26] Vẫn chìm sâu im ắng không lời
      [05:03.67] Đoạn kết quá đẹp
      [05:06.06] Đẹp với em
      [05:07.25] Nhưng với anh xem như hết
      [05:10.84] Vạn lý cô đơn
      [05:13.23] Xa cách em càng nhớ em hơn
      [05:18.01] Vạn lý cô đơn
      [05:20.40] Xa cách em càng nhớ em hơn`,
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
    lyric: `[00:27.12] Mười lần buồn bằng một lần đau
      [00:32.23] Một trăm lần đau mới sốc một lần
      [00:37.85] Tua lại một bài nhạc buồn
      [00:40.89] Ngày xưa hai ta thường nghe
      [00:43.95] Chợt bất giác lại ôm mặt khóc
      [00:50.52] Bản nhạc trở thành
      [00:51.79] Kỉ niệm duy nhất về nhau
      [00:55.61] Còn đâu của người khác không phải em
      [00:59.38] Một người trước kia anh từng yêu
      [01:04.70] Yêu cô ta còn nhiều hơn cả em
      [01:12.03] Phía sau lưng anh kìa
      [01:14.33] Đúng, người ấy đấy phải không
      [01:17.35] Thật sốc khi anh quay lại
      [01:19.90] Ôm chặt cô ấy trong lòng
      [01:23.42] Em không đứng vững nữa rồi
      [01:26.24] Nhìn cả hai vẫn xứng đôi
      [01:29.05] Làm lộ hàng nước mắt rơi
      [01:35.46] Lúc đang yên đang lành
      [01:37.51] Bỗng trượt ngã đúng vào anh
      [01:40.81] Cảm xúc em luôn chân thành
      [01:43.35] Nay lại nhận cú tát rất đau
      [01:48.23] Vết thương tuy không dễ lành
      [01:50.99] Dẫu đau nhưng em sẽ quên được anh
      [02:24.00] Vậy sự tồn tại của em
      [02:26.25] Có nghĩa gì không
      [02:29.28] Có khi là người thế chỗ mà thôi
      [02:32.83] Thừa nhận cũng là quá trễ rồi
      [02:37.41] Lẽ ra em nên nhận thấy sớm hơn
      [02:45.59] Phía sau lưng anh kìa
      [02:47.89] Đúng, người ấy đấy phải không
      [02:51.23] Thật sốc khi anh quay lại
      [02:53.76] Ôm chặt cô ấy trong lòng
      [02:57.09] Em không đứng vững nữa rồi
      [02:59.90] Nhìn cả hai vẫn xứng đôi
      [03:02.72] Làm lộ hàng nước mắt rơi
      [03:09.11] Lúc đang yên đang lành
      [03:11.19] Bỗng trượt ngã đúng vào anh
      [03:14.51] Cảm xúc em luôn chân thành
      [03:17.06] Nay lại nhận cú tát rất đau
      [03:21.90] Vết thương tuy không dễ lành
      [03:24.71] Dẫu đau nhưng em sẽ quên được anh
      [03:30.30] Một trăm bước khoảng cách hai ta
      [03:33.13] Nay chỉ còn một bước thôi mà
      [03:36.17] Anh dừng lại bất giác quay đầu
      [03:38.75] Nhìn về phía sau
      [03:41.54] Chẳng công bằng với em đâu anh
      [03:44.85] Chỉ vì yêu anh nên là
      [03:49.97] Thôi bỏ đi, thôi bỏ đi
      [03:52.25] Thôi bỏ hết đi
      [03:58.88] Kìa, đúng, người ấy đấy phải không
      [04:02.73] Thật sốc khi anh quay lại
      [04:05.54] Ôm chặt cô ấy trong lòng
      [04:08.62] Em không đứng vững nữa rồi
      [04:11.69] Nhìn cả hai vẫn xứng đôi
      [04:14.49] Làm lộ hàng nước mắt rơi
      [04:20.30] Lúc đang yên đang lành
      [04:22.88] Bỗng trượt vấp ngã vào anh
      [04:26.21] Cảm xúc em luôn chân thành
      [04:28.76] Nay lại nhận cú tát rất đau
      [04:33.53] Vết thương tuy không dễ lành
      [04:36.57] Dẫu đau nhưng em sẽ quên được anh
      [04:45.30] Mất nhau thì đã mất rồi
      [04:48.09] Dẫu đau nhưng em sẽ quên được thôi`,
    bigThumbnail: "/images/SauLungAnhCoAiKia-big.jpg",
    thumbnail:
      "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/1/8/0/7/1807c6b5fcc7058a14e1a288801221c7.jpg?fs=MTY1MjmUsIC3MDU4NTAwNnx3ZWJWNHw",
    duration: 303,
  },
  {
    id: "ZZAEUA67",
    path: "/mp3/ThuongQuaXa.mp3",

    name: "Thương Quá Xá",

    artists_names: "Hoon, G5R Squad",

    lyric: `[00:29.09] Chiều, là anh ghé qua hỏi thăm
    [00:31.10] Bác trai cho anh cưới em về
    [00:32.88] Là hết năm nay anh hốt em liền
    [00:35.90] Nhà, đàn trâu đã nuôi mấy năm
    [00:37.91] Bán đi luôn để rước em về
    [00:39.43] Sắm cho em vàng cây nhẫn cưới
    [00:42.72] Nếu lỡ thích nhau rồi
    [00:43.97] Một câu tới luôn thôi nà
    [00:45.98] Hai ta sẽ càng yêu đắm say
    [00:48.74] Nhà hai bên má hai vui mừng
    [00:50.75] Chị ba nước mắt rưng rưng
    [00:52.95] Ôi con dâu nhà ai xinh quá
    [00:55.71] Rồi sao anh thương em quá xá luôn
    [00:57.71] Ôi mèn ôi
    [00:58.47] Thương em quá xá quên luôn ngày đêm
    [01:00.17] Cô dâu xinh nhất đó chính là em đấy
    [01:02.43] Vì anh đây thương em quá xá
    [01:04.44] Nên mai về sau
    [01:05.20] Anh mua bốn bánh cho em trồng rau
    [01:06.96] Mua thêm máy bay cho em nhảy dù
    [01:09.22] Rồi sao anh thương em quá xá luôn
    [01:11.73] Ôi mèn ôi
    [01:12.48] Thương em quá xá thương luôn bờ môi
    [01:14.00] Thương như cá rô bay lên đớp mồi
    [01:16.26] Tình anh là sông sâu người ơi
    [01:18.27] To lớn cứ như trời
    [01:20.27] Nguyện yêu em gió sương cũng chẳng hề vơi
    [01:24.04] Em thương anh quá xá luôn đi
    [01:26.30] Thương anh quá xá luôn đi
    [01:28.01] Thương anh quá xá luôn đi
    [01:29.26] Đi đi đi đi đi đi đi đi
    [01:31.52] Thương anh quá xá luôn đi
    [01:33.03] Thương anh quá xá luôn đi
    [01:34.80] Thương anh quá xá luôn đi
    [01:36.06] Đi đi đi đi đi đi đi đi
    [01:38.32] Thương anh quá xá luôn đi
    [01:39.83] Thương anh quá xá luôn đi
    [01:41.59] Thương anh quá xá luôn đi
    [01:42.84] Đi đi đi đi đi đi đi đi
    [01:45.10] Thương anh quá xá luôn đi
    [01:46.87] Thương anh quá xá luôn đi
    [01:48.37] Thương anh quá xá luôn đi
    [01:49.89] Đi đi đi đi đi đi đi đi
    [01:51.39] Yêu nhau bao nhiêu năm
    [01:52.15] Sau bao con trăng
    [01:52.84] Hôm nay xe hoa đưa em về
    [01:54.85] Theo anh đi mai đây đô la
    [01:56.35] Anh sẽ mua xe hơi cho em, thề
    [01:58.30] Oh xây nhà sang nhất xóm
    [01:59.75] Oh căn villa đê mê
    [02:01.54] Oh không quan tâm khen chê
    [02:03.30] Em thích là nhích ừ cái làm luôn êy
    [02:05.81] Đêm nay tân hôn em ey
    [02:07.56] Chơi đi lo chi em ey
    [02:09.02] Qua mai hai ta chung đôi
    [02:10.46] Bên nhau ăn nên làm ra em ey
    [02:12.47] Chơi luôn lo chi mưa rơi
    [02:14.23] Anh đây say no yêu chơi
    [02:15.74] Nên từ nay êm ấm đưa em về dinh
    [02:17.42] Tương lai vàng tươi
    [02:18.68] Chiều, là anh ghé qua hỏi thăm
    [02:20.96] Bác trai cho anh cưới em về
    [02:22.47] Là hết năm nay anh hốt em liền
    [02:25.67] Nhà, đàn trâu đã nuôi mấy năm
    [02:27.68] Bán đi luôn để rước em về
    [02:29.44] Sắm cho em vàng cây nhẫn cưới
    [02:32.46] Nếu lỡ thích nhau rồi
    [02:33.71] Một câu tới luôn thôi nà
    [02:35.72] Hai ta sẽ càng yêu đắm say
    [02:38.48] Nhà hai bên má hai vui mừng
    [02:40.74] Chị ba nước mắt rưng rưng
    [02:42.50] Ôi con dâu nhà ai xinh quá
    [02:45.52] Rồi sao anh thương em quá xá luôn
    [02:47.53] Ôi mèn ôi
    [02:48.03] Thương em quá xá quên luôn ngày đêm
    [02:50.04] Cô dâu xinh nhất đó chính là em đấy
    [02:52.31] Vì anh đây thương em quá xá
    [02:54.10] Nên mai về sau
    [02:55.10] Anh mua bốn bánh cho em trồng rau
    [02:56.85] Mua thêm máy bay cho em nhảy dù
    [02:59.11] Rồi sao anh thương em quá xá luôn
    [03:01.12] Ôi mèn ôi
    [03:01.87] Thương em quá xá thương luôn bờ môi
    [03:03.63] Thương như cá rô bay lên đớp mồi
    [03:05.89] Tình anh là sông sâu người ơi
    [03:07.89] To lớn cứ như trời
    [03:09.90] Nguyện yêu em gió sương cũng chẳng hề vơi
    [03:12.91] Rồi sao anh thương em quá xá luôn
    [03:15.36] Ôi mèn ôi
    [03:15.88] Thương em quá xá quên luôn ngày đêm
    [03:17.40] Cô dâu xinh nhất đó chính là em
    [03:19.60] Vì anh đây thương em quá xá
    [03:21.63] Nên mai về sau
    [03:22.63] Anh mua bốn bánh cho em trồng rau
    [03:24.15] Mua thêm máy bay cho em nhảy dù
    [03:26.41] Rồi sao anh thương em quá xá luôn
    [03:28.69] Ôi mèn ôi
    [03:29.44] Thương em quá xá thương luôn bờ môi
    [03:31.20] Thương như cá rô bay lên đớp mồi
    [03:33.20] Tình anh là sông sâu người ơi
    [03:35.46] To lớn cứ như trời
    [03:37.44] Nguyện yêu em một đời không phai
    [03:40.97] Em thương anh quá xá luôn đi
    [03:43.23] Thương anh quá xá luôn đi
    [03:44.74] Thương anh quá xá luôn đi
    [03:46.25] Đi đi đi đi đi đi đi đi
    [03:48.51] Thương anh quá xá luôn đi
    [03:50.27] Thương anh quá xá luôn đi
    [03:51.77] Thương anh quá xá luôn đi
    [03:53.28] Đi đi đi đi đi đi đi đi
    [03:55.29] Thương anh quá xá luôn đi
    [03:57.05] Thương anh quá xá luôn đi
    [03:58.80] Thương anh quá xá luôn đi
    [04:00.05] Đi đi đi đi đi đi đi đi
    [04:02.31] Thương anh quá xá luôn đi
    [04:03.81] Thương anh quá xá luôn đi
    [04:05.57] Thương anh quá xá luôn đi
    [04:06.82] Đi đi đi đi đi đi đi đi`,
    bigThumbnail: "/images/ThuongQuaXa-big.jpg",
    thumbnail:
      "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/6/7/e/e/67eed04b534a4304fb63be182220c54c.jpg",
    duration: 251,
  },
  {
    id: "ZZ9OIWA0",
    path: "/mp3/MuonEmLa.mp3",
    name: "Muốn Em Là",

    artists_names: "Keyo",

    lyric: `[00:08.66] Muốn em là má
      [00:10.17] Của con anh ở sau này
      [00:12.18] Muốn em là con
      [00:13.69] Của tía má anh lâu dài
      [00:16.20] Nhất bái thiên địa
      [00:18.21] Nhị bái cao đường
      [00:19.98] Phu thê giao bái
      [00:21.23] Đêm nay ta say ta bái tăng hai
      [00:27.44] Không còn em là đời anh
      [00:29.22] Chẳng ý nghĩa gì
      [00:32.22] Thế nên anh phải cố gắng
      [00:34.73] Bôn ba ngoài kia chục năm
      [00:36.99] Giờ cũng đã có dư
      [00:39.00] Gom về quê cưới nàng
      [00:42.02] Mời em đi về quê anh
      [00:44.02] Chèo xuồng ba lá
      [00:45.53] Ngồi trà đá ngoài hồ cá mình cùng ca
      [00:50.31] Được nhìn em luôn cười vui
      [00:53.32] Là đời anh mãi luôn an bình
      [00:56.83] Muốn em là má
      [00:58.59] Của con anh ở sau này
      [01:00.59] Muốn em là con
      [01:02.35] Của tía má anh lâu dài
      [01:04.60] Nhất bái thiên địa
      [01:06.36] Nhị bái cao đường
      [01:08.37] Phu thê giao bái
      [01:09.64] Đêm nay ta say ta bái tăng hai
      [01:28.94] Em ơi, nói nghe nè
      [01:30.70] Người quê mình chân chất
      [01:32.21] Đường nhà anh cứ đi bằng chân đất
      [01:34.21] Không sao, trưởng làng anh thân nhất
      [01:36.00] Lũ nhóc làng bên
      [01:36.75] Dám qua đây anh cân tất
      [01:38.02] Làm dâu miền Tây
      [01:38.77] Không khó nhưng không phải dễ
      [01:40.02] Chỉ cần gật đầu
      [01:40.77] Anh đón luôn cho phải lễ
      [01:42.03] Bà con lối xóm
      [01:42.79] Họ bảo em tài ghê
      [01:43.78] Một đời yên ấm
      [01:44.54] Khi có được chàng trai quê
      [01:46.50] Dậy nào người ơi gà gáy ó ò o
      [01:49.96] Dậy đi, dậy đi
      [01:51.46] Dậy ăn cái chi cho no
      [01:53.98] Rồi mình lên xe
      [01:55.48] Qua tới thưa mẹ cha
      [01:57.50] Một bài ca hai bên nhà kết thông gia
      [02:01.29] Mời em đi về quê anh
      [02:03.30] Chèo xuồng ba lá
      [02:05.06] Ngồi trà đá ngoài hồ cá mình cùng ca
      [02:09.79] Được nhìn em luôn cười vui
      [02:12.81] Là đời anh mãi luôn an bình
      [02:16.32] Muốn em là má
      [02:17.57] Của con anh ở sau này
      [02:20.08] Muốn em là con
      [02:21.59] Của tía má anh lâu dài
      [02:23.85] Nhất bái thiên địa
      [02:25.86] Nhị bái cao đường
      [02:27.87] Phu thê giao bái
      [02:28.86] Đêm nay ta say ta bái tăng hai
      [02:33.10] Qua ngàn gian nan
      [02:34.38] Giờ đây đã đến lúc rồi
      [02:38.14] Chúng ta chung một nhà thôi
      [02:40.92] Nơi đâu bình yên bằng tình yêu
      [02:42.94] Của anh đối với em
      [02:44.70] Không một câu dối gian
      [02:47.22] Muốn em là má
      [02:48.97] Của con anh ở sau này
      [02:51.00] Muốn em là con
      [02:52.76] Của tía má anh lâu dài
      [02:55.03] Nhất bái thiên địa
      [02:56.78] Nhị bái cao đường
      [02:58.79] Phu thê giao bái
      [03:00.04] Đêm nay ta say ta bái tăng hai`,
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

    lyric: `[00:31.36] Chỉ mong đời ta
      [00:34.05] Sẽ kết duyên cùng nhau
      [00:38.07] Vượt bao phong ba
      [00:40.83] Luôn có anh ở đây mà
      [00:44.85] Ghì chặt bàn tay lên đôi môi của em
      [00:49.89] Như thế này
      [00:52.85] Thật hạnh phúc
      [00:54.29] Cô dâu của anh ngay đây rồi
      [00:58.55] Nhẫn cưới anh sẽ trao yêu thương
      [01:02.06] Ngọt ngào khi lên thánh đường
      [01:06.78] Em là cô gái
      [01:08.80] Anh yêu nhất thế gian
      [01:12.31] Hai chữ trọn đời cùng nhau suốt đời
      [01:20.09] Từ nay về sau
      [01:21.85] Hai ta chung nhà em hỡi
      [01:26.07] Hãy tin anh người nhé
      [01:29.34] Dẫu cho bao ngày sau như thế nào
      [01:34.05] Thì em vẫn luôn là vợ của anh
      [01:39.82] Ôm em nói rằng
      [01:41.77] Dù cho mai sau ta già đi
      [01:47.54] Cảm ơn cuộc đời
      [01:49.30] Đã mang em đến bên đời anh
      [01:53.31] Pháo vu quy rộn rã
      [01:56.84] Kết hai gia đình thông gia chúng mình
      [02:01.36] Niềm vui cùng nhau
      [02:03.11] Thắp nên đường tương lai
      [02:07.06] Anh may mắn
      [02:08.33] Rằng vì khi được em bên cạnh
      [02:15.04] Xua tan muộn phiền
      [02:16.80] Âu lo cuộc đời tan nhanh
      [02:20.06] Aku cinta kamu
      [02:26.13] Bước lên thánh đường
      [02:27.88] Hôm nay có em bên cạnh
      [02:32.90] Gửi trọn tương lai cho anh người hỡi
      [02:51.72] Nhẫn cưới anh sẽ trao yêu thương
      [02:55.23] Ngọt ngào khi lên thánh đường
      [02:59.94] Em là cô gái
      [03:01.95] Anh yêu nhất thế gian
      [03:05.46] Hai chữ trọn đời cùng nhau suốt đời
      [03:13.24] Từ nay về sau
      [03:15.00] Hai ta chung nhà em hỡi
      [03:19.21] Hãy tin anh người nhé
      [03:22.48] Dẫu cho bao ngày sau như thế nào
      [03:26.93] Thì em vẫn luôn là vợ của anh
      [03:32.97] Ôm em nói rằng
      [03:34.92] Dù cho mai sau ta già đi
      [03:40.69] Cảm ơn cuộc đời
      [03:42.44] Đã mang em đến bên đời anh
      [03:46.46] Pháo vu quy rộn rã
      [03:49.97] Kết hai gia đình thông gia chúng mình
      [03:54.49] Niềm vui cùng nhau
      [03:56.25] Thắp nên đường tương lai
      [04:00.36] Anh may mắn
      [04:01.61] Rằng vì khi được em bên cạnh
      [04:08.07] Xua tan muộn phiền
      [04:09.82] Âu lo cuộc đời tan nhanh
      [04:13.33] Aku cinta kamu
      [04:17.53] Hãy tin anh người nhé
      [04:20.81] Dẫu cho bao ngày sau như thế nào
      [04:25.26] Thì em vẫn luôn là vợ của anh
      [04:31.05] Ôm em nói rằng
      [04:33.32] Dù cho mai sau ta già đi
      [04:39.05] Cảm ơn cuộc đời
      [04:40.80] Đã mang em đến bên anh
      [04:44.82] Pháo vu quy rộn rã
      [04:48.08] Kết hai gia đình thông gia chúng mình
      [04:52.85] Niềm vui cùng nhau
      [04:54.61] Thắp nên đường tương lai
      [04:58.58] Anh may mắn
      [04:59.83] Rằng vì khi được em bên cạnh
      [05:06.36] Xua tan muộn phiền
      [05:08.13] Âu lo cuộc đời tan nhanh
      [05:11.64] Aku cinta kamu
      [05:16.66] Anh vẫn trân trọng
      [05:18.41] Thời gian khi được bên em
      [05:23.68] Aku cinta kamu`,
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

    lyric: `[00:16.15] Cuộc chơi còn vui, bia chưa kịp khui
      [00:19.41] Cứ hết mình
      [00:20.87] Chuyện kia từ từ tính sau
      [00:23.33] Mẹ cha đừng lo tương lai sẽ có
      [00:26.84] Con dâu ngoan hiền cùng đàn cháu thơ
      [00:31.05] Đi đâu ai cũng hỏi
      [00:33.77] Tới bao giờ mày kết hôn
      [00:38.30] Hời ơi lo chi sớm
      [00:41.01] Mới ba chục từ từ tính sau
      [00:45.28] Chỉ một câu hỏi
      [00:46.54] Suốt ngày hỏi tới hỏi lui
      [00:49.05] Còn ở bên ai thế nào
      [00:51.06] Là chuyện của tôi
      [00:52.82] Mình còn ham chơi quá trời
      [00:54.82] Bạn bè nó kêu
      [00:56.57] Coi chừng ngày mai cưới vợ
      [00:58.59] Ê đừng nói xui
      [01:00.28] Cuộc chơi còn vui, bia chưa kịp khui
      [01:03.81] Cứ hết mình
      [01:05.26] Chuyện kia từ từ tính sau
      [01:07.77] Mẹ cha đừng lo tương lai sẽ có
      [01:11.03] Con dâu ngoan hiền cùng đàn cháu thơ
      [01:32.04] Cô Ba chú Bảy gặp mặt anh là hỏi
      [01:33.81] Khi nào thì mày mới rước dâu
      [01:35.31] Mới ba mươi còn tuổi ăn tuổi chơi
      [01:37.08] Mà đâu dám tính tới chuyện gia đình
      [01:38.96] Mà xui ghê anh lỡ dính với em
      [01:40.70] Tính ra duyên rồi hai đứa hỏi han
      [01:43.16] Theo anh lên xe cùng nhau mình đi
      [01:44.92] Ra mắt với họ hàng
      [01:46.17] Tích tịch tình tang tình tang
      [01:48.12] Không khí hôm nay rộn ràng
      [01:49.89] Thấy anh dắt con dâu về
      [01:51.16] Nên xóm trên xóm dưới
      [01:52.40] Ai nấy cũng vui mừng
      [01:53.59] Còn cha anh cũng đã nói với anh
      [01:55.53] Tụi mày cưới nhau đi
      [01:56.41] Mọi thứ cứ để tao
      [01:57.86] Ra giêng tao mang theo trầu cau
      [01:59.37] Rước con dâu ngoan về nhà
      [02:01.07] Thiệp mời đã xong
      [02:02.27] Quyết định làm đám cưới thôi
      [02:04.78] Họ hàng hai bên chấp nhận
      [02:06.80] Thì mình tới luôn
      [02:08.31] Lòng thì nôn nao đón chờ
      [02:10.56] Ngày qua rước dâu
      [02:12.06] Không nghĩ một mai
      [02:13.32] Chúng mình sẽ là của nhau
      [02:16.03] Một hai ba dzô
      [02:17.78] Khui bia đi bạn ơi
      [02:19.55] Lên bia đi bạn ơi
      [02:21.30] Cứ nhấp môi nãy giờ
      [02:23.50] Ngồi yên ở đây cho tao nhìn thấy
      [02:26.76] Tao lo cho tụi bây
      [02:28.53] Chơi hết đêm nay rồi về
      [02:30.99] Hôm nay ngồi đây hứa với cha mẹ
      [02:34.26] Xây dựng mái ấm con cháu sum vầy
      [02:37.12] Sẽ vun đắp tương lai
      [02:38.00] Của hai con sau này
      [02:38.75] Lo mần ăn nghĩ đến tương lai
      [02:41.70] Hết ngày hôm nay con xin khép lại
      [02:45.41] Một hai ba dzô
      [02:47.18] Khui bia đi bạn ơi
      [02:49.18] Lên bia đi bạn ơi
      [02:50.94] Cứ nhấp môi nãy giờ
      [02:52.95] Ngồi yên ở đây cho tao nhìn thấy
      [02:56.41] Tao lo cho tụi bây
      [02:58.18] Chơi hết đêm nay rồi về
      [03:00.13] Tích tịch tình tang tình tang
      [03:01.90] Không khí hôm nay rộn ràng
      [03:03.60] Thấy anh dắt con dâu về
      [03:05.07] Nên xóm trên xóm dưới
      [03:06.07] Ai nấy cũng vui mừng
      [03:07.52] Còn cha anh cũng đã nói với anh
      [03:09.30] Tụi mày cưới nhau đi
      [03:10.28] Mọi thứ cứ để tao
      [03:11.54] Ra giêng tao mang theo trầu cau
      [03:13.05] Rước con dâu ngoan về nhà
      [03:14.83] Tích tịch tình tang`,
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

    lyric: `[00:18.50] Bất ngờ, em nói chia tay
      [00:21.43] Dù lúc tôi đang yêu em đắm say
      [00:25.67] Và thế rồi, em mất tăm hơi
      [00:28.60] Mặc xác tôi nơi này lòng chơi vơi
      [00:33.12] Hết hồn, nay em nhắn cho tôi
      [00:36.03] Rồi nói em đang mong thương nhớ tôi
      [00:40.29] Thế quái nào, em không để tôi yên
      [00:43.49] Trái tim tôi nào phải công viên
      [00:47.20] Thật ra, tôi nghe nói xa xăm
      [00:49.33] Bên ai em sống không vui
      [00:50.92] Nên em mới quay về thăm
      [00:54.38] Trời ơi, thương em quá em ơi
      [00:56.50] Tôi mong em mãi cô đơn
      [00:58.36] Và sống được trọn trăm năm
      [01:01.81] Tất nhiên là khi chia tay
      [01:04.74] Tôi cũng buồn nhiều ngày trôi nằm ôm gối
      [01:09.00] Thế nhưng, người có đâu hay
      [01:11.92] Người mất nhiều lại là em chẳng phải tôi
      [01:16.19] Tất nhiên là khi chia tay
      [01:19.13] Tôi cũng đau tôi cũng buồn ở trái tim
      [01:23.65] Thế nhưng người hãy nhớ giùm
      [01:26.56] Có không giữ thì mất đừng tìm
      [01:45.16] Thật ra, tôi cứ ngỡ sau khi chia tay
      [01:47.83] Không thể quên đi
      [01:49.16] Bao nhiêu nhớ thương về em
      [01:52.62] Ngờ đâu, khi chia cách hai nơi
      [01:54.73] Chỉ dăm ba tháng thôi
      [01:56.08] Tôi đã quên sạch rồi em ơi
      [01:59.80] Tất nhiên là khi chia tay
      [02:02.72] Tôi cũng buồn nhiều ngày trôi nằm ôm gối
      [02:07.23] Thế nhưng, người có đâu hay
      [02:10.16] Người mất nhiều lại là em chẳng phải tôi
      [02:14.40] Tất nhiên là khi chia tay
      [02:17.60] Tôi cũng đau tôi cũng buồn ở trái tim
      [02:21.86] Thế nhưng người hãy nhớ giùm
      [02:24.52] Có không giữ thì mất đừng tìm
      [02:43.65] Tốt hơn là khi chia tay
      [02:46.30] Đừng có chờ đừng mong đừng tiếc nuối
      [02:50.82] Vì chính những lời nói chia tay
      [02:53.76] Là em chọn là em chẳng phải tôi
      [02:58.27] Tất nhiên là khi chia tay
      [03:00.93] Tôi cũng đau tôi cũng buồn ở trái tim
      [03:05.43] Thế nhưng người hãy nhớ giùm
      [03:08.36] Có không giữ thì mất đừng tìm
      [03:12.61] Thế nhưng người hãy nhớ giùm
      [03:15.53] Có không giữ thì mất đừng tìm
      [03:19.25] Có không giữ thì mất đừng tìm
      [03:22.91] Có không giữ thì mất đừng tìm`,
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

    lyric: `[00:21.18] Dường như là anh đã yêu
     [00:24.96] Từ lần đầu khi anh gặp người
     [00:28.96] Một tình yêu như thắp sáng tâm hồn
     [00:32.94] Luôn thao thức nhớ mong hình bóng ai
     [00:36.91] Dù cho em nơi chốn xa
     [00:40.91] Từng ngày dài anh vẫn đợi chờ
     [00:44.49] Bầu trời khuya ngàn sao sáng lung linh
     [00:48.88] Luôn thao thức nhớ em từng đêm
     [00:54.45] Từ giây phút khi em đã trao anh nụ cười
     [01:02.42] Và ánh mắt sáng trong khi em nhìn anh
     [01:10.39] Lặng nhìn lướt thao thức nhớ em từng đêm
     [01:17.07] Nơi trái tim anh luôn mong về người
     [01:22.66] Người yêu ơi em có biết
     [01:26.66] Một ngày anh sẽ đến bên em
     [01:30.24] Trao em nụ hôn đắm đuối
     [01:33.83] Và ta sẽ yêu nhau hết cuộc đời
     [01:38.51] Bầu trời như sáng trong hơn trái tim anh này
     [01:42.80] Nguyện sẽ luôn yêu em mãi mãi
     [01:46.33] Người ở nơi đâu có biết không em
     [01:50.31] Anh đang chìm trong bóng tối
     [01:53.89] Hãy về đây yêu anh như ngày mình có nhau
     [01:58.31] Tình yêu đó sẽ luôn luôn
     [02:01.09] Theo anh suốt cuộc đời
     [02:06.98] Người yêu ơi em biết chăng
     [02:09.77] Trong trái tim này yêu người tha thiết
     [02:14.55] Ở nơi đó anh sẽ cùng em
     [02:17.74] Hát với nhau bài ca tình yêu ước mơ
     [02:22.91] Ngàn vì sao đêm nay
     [02:24.91] Sẽ luôn chứng giám cho
     [02:27.30] Một tình yêu đẹp tươi
     [02:31.29] Và ta sẽ bên nhau thật lâu
     [02:34.08] Thời gian ngừng trôi mãi mãi
     [02:42.47] Một ngày anh sẽ đến bên em
     [02:46.44] Trao em nụ hôn đắm đuối
     [02:49.92] Và ta sẽ bên nhau hết cuộc đời
     [02:54.31] Bầu trời như sáng trong hơn trái tim anh này
     [02:59.00] Nguyện sẽ luôn yêu em mãi mãi
     [03:01.78] Người ở nơi đó có biết không em
     [03:06.16] Anh đang chìm trong bóng tối
     [03:09.75] Hãy về đây yêu anh như ngày mình có nhau
     [03:14.53] Tình yêu đó sẽ theo anh suốt cuộc đời này
     [03:18.92] Trời đêm ấy lung linh muôn vì sao đêm
     [03:22.90] Ngàn vì sao tỏa sáng khắp thế gian
     [03:29.28] Một tình yêu`,
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

    lyric: `[00:25.56] Em thấy lẻ loi
      [00:28.20] Em sợ nỗi buồn
      [00:31.20] Anh sẽ ở đây làm em yêu đời
      [00:36.87] Em không tin vào ai
      [00:39.51] Điều này thật điên dại
      [00:42.51] Sẽ có anh ở đây
      [00:44.39] Làm em nghĩ lại
      [00:47.32] Điều em đang sợ
      [00:49.95] Chạy về nơi phía anh
      [00:52.24] Cánh tay này dài rộng lắm
      [00:55.24] Chạy về nơi phía anh
      [00:57.51] Trái tim này cũng ấm lắm
      [01:00.81] Chạy đi đâu nữa em
      [01:03.39] Chỉ có bên anh
      [01:04.88] Là nơi an toàn nhất rồi
      [01:07.90] Đừng đi đâu
      [01:09.40] Chạy về nơi phía anh
      [01:16.46] Em thấy lẻ loi
      [01:19.09] Em sợ nỗi buồn
      [01:22.10] Anh sẽ ở đây làm em yêu đời
      [01:27.75] Em không tin vào ai
      [01:30.38] Điều này thật điên dại
      [01:33.39] Sẽ có anh ở đây
      [01:35.28] Làm em nghĩ lại
      [01:38.29] Điều em đang sợ
      [01:40.92] Chạy về nơi phía anh
      [01:43.19] Cánh tay này dài rộng lắm
      [01:45.83] Chạy về nơi phía anh
      [01:48.45] Trái tim này cũng ấm lắm
      [01:51.76] Chạy đi đâu nữa em
      [01:54.39] Chỉ có bên anh
      [01:55.52] Là nơi an toàn nhất rồi
      [01:58.55] Đừng đi đâu
      [02:00.06] Chạy về nơi phía anh
      [02:05.99] Chạy về nơi phía anh
      [02:08.62] Cánh tay này dài rộng lắm
      [02:11.26] Chạy về nơi phía anh
      [02:13.89] Trái tim này cũng ấm lắm
      [02:17.20] Chạy đi đâu nữa em
      [02:19.84] Chỉ có bên anh
      [02:21.36] Là nơi an toàn nhất rồi
      [02:23.62] Đừng đi đâu
      [02:25.43] Chạy về nơi phía anh
      [02:28.45] Chạy về nơi phía anh
      [02:31.08] Cánh tay này dài rộng lắm
      [02:34.14] Chạy về nơi phía anh
      [02:36.65] Trái tim này cũng ấm lắm
      [02:39.68] Chạy đi đâu nữa em
      [02:42.32] Chỉ có bên anh
      [02:43.82] Là nơi an toàn nhất rồi
      [02:46.83] Đừng đi đâu
      [02:47.95] Chạy về nơi phía anh`,
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

    lyric: `[00:21.60] Nhớ năm xưa ở đây
      [00:23.99] Ta hứa yêu nồng say
      [00:26.85] Ở bến đò hát câu hò
      [00:29.17] Còn em bấm dây đàn
      [00:31.83] Hứa bên nhau thật lâu
      [00:33.95] Sẽ có mâm cao trầu
      [00:36.87] Chẳng mong cầu
      [00:37.67] Chẳng sang giàu miễn bên nhau
      [00:41.42] Ngần ấy năm trôi
      [00:42.75] Sao lòng anh thay đổi
      [00:44.87] Hay ta chẳng thể chung lối
      [00:47.26] Quên đi tình em
      [00:49.31] Người chẳng luyến lưu gì
      [00:51.44] Nơi đó phương xa
      [00:52.78] Mong người ta êm ấm
      [00:54.91] Em đem lòng tin nên lầm
      [00:57.30] Bao nhiêu nghĩa tình tàn phai
      [01:00.95] Cớ sao buông bàn tay
      [01:02.82] Rời xa nơi chốn đây
      [01:05.75] Giọt nước mắt tuôn tràn mi
      [01:07.92] Người chẳng lưu luyến chi
      [01:10.84] Thiết tha bao ngày qua
      [01:12.97] Giờ anh đem bao xót xa
      [01:15.89] Thầm nhớ thương anh đầy vơi
      [01:17.75] Người khuất xa nơi phương trời
      [01:20.93] Tiếng tơ duyên quạnh hiu
      [01:22.98] Một mình em vấn vương
      [01:25.91] Trách sao anh vô tình
      [01:27.78] Lòng cô liêu em trót thương
      [01:30.70] Cố nhân xưa còn đâu
      [01:33.09] Giờ đành ôm bao nỗi đau
      [01:35.68] Lòng đắng mắt em lại cay
      [01:37.80] Vì nhớ anh nên âu sầu
      [02:02.08] Thôi thì mình xa
      [02:03.11] Gửi kỉ niệm nơi hàng cây xanh
      [02:04.67] Câu hò xưa thì cũng đã quên
      [02:05.73] Lòng người dần tàn phai nhanh
      [02:07.02] Có những nỗi buồn
      [02:08.19] Chẳng biết tâm sự ai nghe
      [02:09.62] Dòng lưu bút ngày nào còn đó
      [02:10.69] Vẫn còn in mãi bên ghe
      [02:11.99] Bức tranh màu sắc mà ta thường vẽ
      [02:13.29] Bỗng dưng nó lại không màu
      [02:14.58] Em hãy quên đi những ngày tháng
      [02:15.79] Đừng lưu giữ nó trong đầu
      [02:17.08] Nhớ ngày nào
      [02:17.74] Người con gái anh thương mà ta cất giữ
      [02:19.71] Hoa không tàn nếu em không hứa
      [02:20.84] Thì là hoa bất tử
      [02:21.64] Trách sao cơ hàn
      [02:22.90] Để kỉ niệm cuốn theo dòng sông
      [02:26.30] Để duyên lỡ làng
      [02:27.90] Một mình em ngóng trông vô vọng
      [02:31.35] Hứa yêu lâu dài
      [02:32.69] Nhưng nào ngờ đứt dây tơ hồng
      [02:36.43] Lòng quặn đau phút giây ban đầu
      [02:41.15] Cớ sao buông bàn tay
      [02:42.76] Rời xa nơi chốn đây
      [02:45.68] Giọt nước mắt tuôn tràn mi
      [02:47.82] Người chẳng lưu luyến chi
      [02:50.74] Thiết tha bao ngày qua
      [02:52.80] Giờ anh đem bao xót xa
      [02:55.74] Thầm nhớ thương anh đầy vơi
      [02:57.60] Người khuất xa nơi phương trời
      [03:00.78] Tiếng tơ duyên quạnh hiu
      [03:02.64] Một mình em vấn vương
      [03:05.83] Trách sao anh vô tình
      [03:07.69] Lòng cô liêu em trót thương
      [03:10.88] Cố nhân xưa còn đâu
      [03:12.74] Giờ đành ôm bao nỗi đau
      [03:15.60] Lòng đắng mắt em lại cay
      [03:17.74] Vì nhớ anh nên âu sầu
      [03:22.45] Tấm thân em gầy hao
      [03:24.04] Vì đem lòng thương anh biết bao
      [03:26.70] Ngàn nhung nhớ tình anh trao
      [03:29.30] Ngày tháng sao quá ngọt ngào
      [03:32.42] Bóng anh đã dần xa
      [03:34.01] Tình ta giờ tan theo khói sương
      [03:36.67] Ngày anh đi
      [03:37.73] Lòng mang nhớ thương vô thường
      [03:43.65] Cớ sao buông bàn tay
      [03:45.43] Rời xa nơi chốn đây
      [03:48.36] Giọt nước mắt tuôn tràn mi
      [03:50.23] Người chẳng lưu luyến chi
      [03:53.15] Thiết tha bao ngày qua
      [03:55.28] Giờ anh đem bao xót xa
      [03:58.22] Thầm nhớ thương anh đầy vơi
      [04:00.34] Người khuất xa nơi phương trời
      [04:03.26] Tiếng tơ duyên quạnh hiu
      [04:05.39] Một mình em vấn vương
      [04:08.25] Trách sao anh vô tình
      [04:10.11] Lòng cô liêu em trót thương
      [04:13.29] Cố nhân xưa còn đâu
      [04:15.15] Giờ đành ôm bao nỗi đau
      [04:18.34] Lòng đắng mắt em lại cay
      [04:20.22] Vì nhớ anh nên âu sầu`,
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

    lyric: `[00:20.48] Người ta nay đã bước đi
      [00:22.53] Sao em vẫn ở lại
      [00:25.52] Tự ôm nỗi buồn
      [00:27.06] Không biết nói cho ai
      [00:29.61] Rồi khi cơn mưa rơi xuống
      [00:31.43] Hai dòng lệ cứ tuôn
      [00:33.98] Buồn nào đau hơn nỗi buồn không thể buông
      [00:41.36] Trời đã ngớt mưa
      [00:43.14] Em giờ đã thấy nhẹ lòng chưa
      [00:45.87] Sau bao nhiêu nỗi buồn
      [00:47.49] Về chuyện đôi lứa
      [00:50.49] Người ta đã quên
      [00:52.05] Sao giờ em vẫn chưa thể quên
      [00:54.84] Tình yêu sao lại tàn nhẫn nhường này
      [00:59.69] Kỉ niệm xưa
      [01:01.22] Giờ là những thước phim dư thừa
      [01:04.05] Em tua đi tua lại
      [01:05.61] Để làm chi nữa
      [01:08.67] Sao vẫn thương
      [01:10.20] Một người nay đã hết thương mình
      [01:13.02] Sao em chưa một lần tự thương lấy em
      [01:17.09] Người ta nay đã bước đi
      [01:19.15] Sao em vẫn ở lại
      [01:22.22] Tự ôm nỗi buồn
      [01:23.51] Không biết nói cho ai
      [01:26.06] Rồi khi cơn mưa rơi xuống
      [01:28.09] Hai dòng lệ cứ tuôn
      [01:30.64] Buồn nào đau hơn nỗi buồn không thể buông
      [01:35.45] Em tự hỏi
      [01:36.47] Liệu mình có làm sai
      [01:37.83] Khi tình trường cứ biến em thành
      [01:39.00] Một thương binh thảm bại
      [01:40.64] Không biết bao lần làm hại
      [01:42.52] Đến chính cả bản thân mình
      [01:43.55] Vì người đó bước bên ai
      [01:44.97] Yêu mà cho đi hết
      [01:45.70] Để rồi đến cuối chẳng có gì
      [01:47.21] Yêu mà cứ nhắm mắt
      [01:47.87] Thì kết cục chỉ có hoen mi
      [01:49.76] Do em lụy
      [01:50.91] Do em suy
      [01:51.77] Ngoài miệng nói buông bỏ
      [01:52.41] Nhưng trong lòng nào muốn quên đi
      [01:53.86] Kỉ niệm xưa
      [01:55.73] Giờ là những thước phim dư thừa
      [01:58.46] Em tua đi tua lại
      [02:00.00] Để làm chi nữa
      [02:03.05] Sao vẫn thương
      [02:04.58] Một người nay đã hết thương mình
      [02:07.39] Sao em chưa một lần tự thương lấy em
      [02:11.47] Người ta nay đã bước đi
      [02:13.51] Sao em vẫn ở lại
      [02:16.59] Tự ôm nỗi buồn
      [02:17.87] Không biết nói cho ai
      [02:20.41] Rồi khi cơn mưa rơi xuống
      [02:22.45] Hai dòng lệ cứ tuôn
      [02:24.98] Buồn nào đau hơn nỗi buồn không thể buông
      [02:29.27] Khóc đủ rồi
      [02:30.54] Lau khô đôi mi
      [02:31.57] Đứng dậy thôi
      [02:32.84] Quên anh ta đi, quên anh ta đi
      [02:34.37] Và nhìn lên cao
      [02:35.13] Để nước mắt chẳng thể nào rơi
      [02:38.91] Ngày nào lồng ngực em vẫn run
      [02:40.66] Thì vẫn phải cố bước đi đến cùng
      [02:43.67] Buồn nào rồi cũng sẽ đến lúc phải buông
      [02:50.01] Người ta nay đã bước đi
      [02:51.79] Sao em vẫn ở lại
      [02:54.88] Tự ôm nỗi buồn
      [02:56.41] Không biết nói cho ai
      [02:58.96] Rồi khi cơn mưa rơi xuống
      [03:01.01] Hai dòng lệ cứ tuôn
      [03:03.51] Buồn nào đau hơn nỗi buồn không thể buông
      [03:08.04] Dù nhiều người đã đến
      [03:09.51] Nhưng chẳng một ai ở lại
      [03:13.02] Tự than trách mình
      [03:14.57] Không biết đúng hay sai
      [03:17.13] Chuyện hợp tan
      [03:17.89] Ai cũng phải trải qua biết bao lần
      [03:21.72] Người nặng lòng hơn
      [03:22.73] Sẽ là người buồn hơn
      [03:26.76] Nhặt lại những mảnh vỡ
      [03:27.66] Mà người đó đã gây xong
      [03:29.03] Em đúc thành chìa khóa
      [03:29.92] Để tự mình phá dây gông
      [03:31.60] Băng bó vết thương đầy lòng
      [03:33.38] Liệu em có đủ mạnh mẽ
      [03:34.40] Bước hết chương này không
      [03:35.82] Không một ai giúp được em
      [03:37.87] Nỗi buồn của mình
      [03:38.51] Họ chỉ muốn góp chút lượt xem
      [03:40.42] Cố chấp là tâm bệnh
      [03:41.44] Dần dà thành tâm ma
      [03:42.82] Đường dẫu có gập ghềnh
      [03:43.58] Đừng khóc dưới mưa tầm tã`,
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

    lyric: `[00:05.42] Tích tắc chẳng hay
      [00:06.69] Đã mấy năm trôi qua
      [00:07.96] Tuổi ngày một nhiều
      [00:08.76] Mà sự nghiệp giờ này
      [00:09.51] Tựa chân ghì một chỗ
      [00:10.77] Lắm lúc muốn buông
      [00:12.06] Để nước mắt thôi tuôn
      [00:13.32] Ngoảnh mặt nhìn lại, đường còn dài
      [00:14.58] Và mình còn hai bàn tay trắng.
      [00:15.83] Còn sự kỳ vọng
      [00:17.10] Còn sự trông mong
      [00:18.37] Còn mẹ ngồi chờ,
      [00:19.12] Mẹ ngồi chờ một ngày con sẽ thành công
      [00:21.14] Will that day really come to me, mother
      [00:23.69] Will that day really come to me, mother
      [00:26.49] Đường về nhà dường như xa hơn
      [00:28.78] Mỏi mệt ngày một như nhiều hơn
      [00:31.59] Thèm một lần được làm Peter Pan
      [00:34.16] Chẳng ngại ngần vì không cần phải lớn
      [00:36.45] Sẽ chẳng sao
      [00:37.47] Nếu đời không giống như mong đợi
      [00:39.25] Trái tim luôn thảnh thơi
      [00:41.54] Có khó khăn thế nào
      [00:43.10] Cũng chẳng sao đâu mà
      [00:44.37] Chỉ cần được về nhà nghe mẹ ru ơi à
      [00:46.93] Ai đó từ nơi xa
      [00:48.66] Nhớ về quê thăm bến đò năm xưa
      [00:51.97] Lũy tre đầu làng
      [00:54.01] Bờ lao xanh xanh thắm giọt mưa
      [00:57.33] Nơi có mẹ đang trông
      [00:59.13] Ngóng ngày mong đêm
      [01:00.40] Bây sắp về chưa
      [01:02.45] Hỡi ơi ru hời
      [01:04.22] Hò xang xê quan liu ú quàn liu
      [01:16.40] Hò xang xê quan liu ú quàn liu
      [01:28.88] Ta có bước qua vội vã trọn kiếp người
      [01:31.43] Làm sao đi hết từng lời mà mẹ ru
      [01:34.27] Con khoác lên cho bản thân nhiều tiếng cười
      [01:36.84] Phong ba sóng gió
      [01:37.87] Chỉ nhớ về nhà mẹ ru
      [01:39.59] Giật mình thì giờ trôi qua
      [01:40.60] Người thân yêu ta như là cơn gió
      [01:42.64] Châu báu ngọc ngà vinh hoa nào
      [01:43.65] Sánh bằng câu à ơi hò
      [01:45.19] Mẹ không còn ru
      [01:45.94] Không phải vì con đã lớn
      [01:47.22] Thương yêu vẫn còn đây
      [01:48.24] Nhưng chỉ là tới lúc con đã xa hơn
      [01:49.97] Đường về nhà dường như xa hơn
      [01:52.30] Mỏi mệt ngày một như nhiều hơn
      [01:55.12] Thèm một lần được làm Peter Pan
      [01:57.66] Chẳng ngại ngần vì không cần phải lớn
      [01:59.95] Sẽ chẳng sao
      [02:01.01] Nếu đời không giống như mong đợi
      [02:02.52] Trái tim luôn thảnh thơi
      [02:05.07] Có khó khăn thế nào cũng chẳng sao đâu mà
      [02:07.87] Chỉ cần được về nhà nghe mẹ ru ơi à.
      [02:10.40] Ai đó từ nơi xa
      [02:12.19] Nhớ về quê thăm bến đò năm xưa
      [02:15.49] Lũy tre đầu làng
      [02:17.53] Bờ lao xanh xanh thắm giọt mưa
      [02:20.59] Nơi có mẹ đang trông
      [02:22.62] Ngóng ngày mong đêm
      [02:23.64] Bây sắp về chưa
      [02:25.93] Hỡi ơi ru hời
      [02:27.74] Hò xang xê quan liu ú quàn liu
      [02:31.80] Suốt một đời mẹ trông ngóng con
      [02:36.90] Tóc trắng mây trời môi nhạt màu son
      [02:42.24] Con vẫn còn mải mê nơi chốn xa
      [02:47.35] Để mẹ già đêm héo ngày hon
      [02:53.18] Chim xa rừng nhớ nước nhớ non
      [02:57.26] Người lìa xứ sở con thương cây nhớ cội
      [03:02.89] Hoa tím lục bình
      [03:04.41] Sông quê mòn nước nổi
      [03:07.71] Quê hương mãi muôn đời
      [03:09.98] Trong trái tim con
      [03:22.70] Hò xang xê quan liu ú quàn liu
      [03:33.13] Hò xang xê quan liu ú quàn liu`,
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

    lyric: `[00:17.46] Một ngày mới thức giấc
      [00:19.01] Thấy nụ cười của anh
      [00:21.28] Một lần nữa em nghe trái tim đập nhanh
      [00:25.46] Có em là điều tuyệt vời nhất trong đời anh
      [00:29.61] Nguyện yêu em
      [00:30.37] Một tình yêu mãi chân thành
      [00:33.37] Cầm tay anh đi bên anh
      [00:35.25] Khắp chân trời xa xôi
      [00:37.51] Mặc xuân qua hè sang thu đến
      [00:39.39] Hay mùa đông tới
      [00:41.27] Với anh điều ngọt ngào
      [00:43.16] Chỉ có em mà thôi
      [00:45.42] Vì yêu em, cả thế giới không cần
      [00:51.75] Ngẩn ngơ, vì yêu
      [00:54.72] Thức trắng đêm nhớ nhung, vì yêu
      [00:56.50] Thế giới như đảo điên, vì yêu
      [00:58.52] Lắm lúc thấy trái tim thật phiêu
      [01:00.46] Em đã bước đến thật bình yên
      [01:02.48] Mang giấu đi hết nơi nào những ưu phiền
      [01:05.49] Lời yêu trao anh em chưa từng đắn đo
      [01:09.01] Có khi, vì yêu
      [01:10.51] Hờn anh giận anh cũng, vì yêu
      [01:12.52] Buồn vui vô cớ cũng, vì yêu
      [01:14.52] Không muốn anh bước bên một ai
      [01:16.54] Dẫu có bao khó khăn ngày mai
      [01:18.54] Hay bão giông vẫn đang chờ ở tương lai
      [01:21.81] Hạnh phúc hôm nay hai ta cùng có được
      [01:26.58] Chính vì yêu
      [01:43.64] Cầm tay anh đi bên anh
      [01:45.40] Khắp chân trời xa xôi
      [01:47.16] Mặc xuân qua hè sang thu đến
      [01:49.17] Hay mùa đông tới
      [01:51.18] Với anh điều ngọt ngào
      [01:53.12] Chỉ có em mà thôi
      [01:55.15] Vì yêu em, cả thế giới không cần
      [01:59.91] Ngẩn ngơ, vì yêu
      [02:02.68] Thức trắng đêm nhớ nhung, vì yêu
      [02:04.45] Thế giới như đảo điên, vì yêu
      [02:06.47] Lắm lúc thấy trái tim thật phiêu
      [02:08.41] Em đã bước đến thật bình yên
      [02:10.43] Mang giấu đi hết nơi nào những ưu phiền
      [02:13.68] Lời yêu trao anh em chưa từng đắn đo
      [02:16.94] Có khi, vì yêu
      [02:18.45] Hờn anh giận anh cũng, vì yêu
      [02:20.47] Buồn vui vô cớ cũng, vì yêu
      [02:22.49] Không muốn anh bước bên một ai
      [02:24.50] Dẫu có bao khó khăn ngày mai
      [02:26.50] Hay bão giông vẫn đang chờ ở tương lai
      [02:29.77] Hạnh phúc hôm nay hai ta cùng có được
      [02:33.98] Ngẩn ngơ, vì yêu
      [02:36.75] Thức trắng đêm nhớ nhung, vì yêu
      [02:38.50] Thế giới như đảo điên, vì yêu
      [02:40.51] Lắm lúc thấy trái tim thật phiêu
      [02:42.47] Em đã bước đến thật bình yên
      [02:44.48] Mang giấu đi hết nơi nào những ưu phiền
      [02:47.74] Lời yêu trao anh em chưa từng đắn đo
      [02:50.75] Có khi, vì yêu
      [02:52.51] Hờn anh giận anh cũng, vì yêu
      [02:54.52] Buồn vui vô cớ cũng, vì yêu
      [02:56.53] Không muốn anh bước bên một ai
      [02:58.54] Dẫu có bao khó khăn ngày mai
      [03:00.54] Hay bão giông vẫn đang chờ ở tương lai
      [03:03.82] Hạnh phúc hôm nay hai ta cùng có được
      [03:08.84] Chính vì yêu`,
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

    lyric: `[00:20.22] Mùi hương hoa diên vĩ
      [00:21.72] Hay là hương tóc mềm
      [00:24.49] Ngàn vì sao chẳng sáng
      [00:26.25] Hơn đôi mắt của em
      [00:29.25] Thật đẹp đến trăng thẹn thùng
      [00:31.26] Phải nấp sau mây
      [00:34.30] Vậy thì cớ sao
      [00:35.29] Anh đây lại nỡ buông tay
      [00:38.57] Ừ thì anh không muốn
      [00:40.33] Phải nhìn thấy em buồn
      [00:43.35] Chuyện tình yêu nếu như
      [00:45.10] Không thể nắm thì buông
      [00:48.63] Tự nhiên không biết vì lẽ gì
      [00:51.14] Cứ lại tự kiềm lòng suốt thôi
      [00:57.93] Cây không muốn lá rời cành
      [00:59.68] Khi lá vẫn còn xanh
      [01:02.44] Yêu đương khó quá
      [01:03.70] Thì chạy về khóc với anh
      [01:06.71] Một người luôn yêu em nhất
      [01:08.97] Chắc chắn sẽ không bỏ đi
      [01:10.99] Khiến em phải buồn được đâu
      [01:16.76] Phong ba sóng gió phủ đầu
      [01:18.78] Anh vẫn đứng đằng sau
      [01:21.29] Tình yêu có duyên
      [01:22.56] Thì tự tìm đến với nhau
      [01:25.58] Dù sao anh cũng vui lòng
      [01:27.86] Làm người anh trai
      [01:28.86] Đến suốt đời này được không
      [01:51.94] Ừ thì cây chỉ muốn
      [01:53.44] Giữ chặt lá bên đời
      [01:55.95] Từng sợ một cơn gió kia
      [01:57.98] Sẽ đi đến dạo chơi
      [02:01.68] Sợ rằng cơn gió chợt vô tình
      [02:04.20] Cây ngậm ngùi phải nhìn lá rơi
      [02:10.73] Cây không muốn lá rời cành
      [02:12.73] Khi lá vẫn còn xanh
      [02:15.50] Yêu đương khó quá
      [02:16.50] Thì chạy về khóc với anh
      [02:19.77] Một người luôn yêu em nhất
      [02:22.02] Chắc chắn sẽ không bỏ đi
      [02:23.78] Khiến em phải buồn được đâu
      [02:29.81] Phong ba sóng gió phủ đầu
      [02:31.56] Anh vẫn đứng đằng sau
      [02:34.32] Tình yêu có duyên
      [02:35.32] Thì tự tìm đến với nhau
      [02:38.58] Dù sao anh cũng vui lòng
      [02:40.84] Làm người anh trai
      [02:41.85] Đến suốt đời này được không
      [02:48.61] Cây không muốn lá rời cành
      [02:50.37] Khi lá vẫn còn xanh
      [02:53.13] Yêu đương khó quá
      [02:54.14] Thì chạy về khóc với anh
      [02:57.39] Một người luôn yêu em nhất
      [02:59.40] Chắc chắn sẽ không bỏ đi
      [03:01.42] Khiến em phải buồn được đâu
      [03:07.18] Phong ba sóng gió phủ đầu
      [03:09.20] Anh vẫn đứng đằng sau
      [03:11.95] Tình yêu có duyên
      [03:12.96] Thì tự tìm đến với nhau
      [03:16.22] Dù sao anh cũng vui lòng
      [03:18.22] Làm người anh trai
      [03:19.48] Đến suốt đời này được không
      [03:26.01] Dù sao anh cũng đây rồi
      [03:28.01] Làm người theo em
      [03:29.26] Đến hết đời này mà thôi`,
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

    lyric: `[00:22.17] Anh chẳng biết thế nào là yêu
      [00:28.46] Chỉ biết là mỗi khi không được nhìn em
      [00:36.74] Lòng lại dâng lên
      [00:37.99] Bao nhiêu cảm xúc thấy rất khó tả
      [00:44.27] Anh nhớ em nhiều phải chăng
      [00:47.03] Đó chính là yêu
      [00:51.54] Buồn vì em đau
      [00:52.80] Vui khi trên môi em nở nụ cười
      [00:58.84] Anh muốn là người mang đến em bình yên
      [01:05.32] Em có muốn cùng anh
      [01:06.53] Đi qua bao bão giông
      [01:09.04] Em có muốn
      [01:09.57] Ở cạnh bên anh đến suốt đời
      [01:13.33] Một thế giới riêng anh và em
      [01:16.34] Với những niềm vui, hạnh phúc đắm say
      [01:20.12] Anh muốn là người chở che
      [01:21.63] Khi em yếu mềm
      [01:23.63] Anh muốn được
      [01:24.39] Vòng tay ra ôm em mỗi đêm
      [01:28.16] Liệu anh có thể là người
      [01:31.19] Em chọn sánh đôi
      [01:50.52] Và anh đã yêu em từ lâu lắm
      [01:57.29] Phút giây anh với em
      [02:00.31] Chạm mặt ngày ấy
      [02:05.33] Chỉ tựa như mây trôi ngang qua thôi
      [02:08.84] Nhưng lỡ thương rồi
      [02:12.61] Anh đã rung động
      [02:14.12] Chợt thấy thêm yêu cuộc sống
      [02:20.14] Đừng buồn em ơi
      [02:21.42] Ngay bên em đã có dáng anh rồi
      [02:27.21] Anh sẽ là người mang đến
      [02:29.73] Cho em bình yên
      [02:34.24] Em có muốn cùng anh
      [02:35.25] Đi qua bao bão giông
      [02:37.51] Em có muốn
      [02:38.26] Ở cạnh bên anh đến suốt đời
      [02:42.04] Một thế giới riêng anh và em
      [02:44.81] Với những niềm vui, hạnh phúc đắm say
      [02:48.60] Anh muốn là người chở che
      [02:50.12] Khi em yếu mềm
      [02:52.39] Anh muốn được
      [02:53.15] Vòng tay ra ôm em mỗi đêm
      [02:56.91] Liệu anh có thể là người
      [02:59.44] Em chọn sánh đôi
      [03:18.51] Em có muốn cùng anh
      [03:19.51] Đi qua bao bão giông
      [03:22.02] Có muốn ở cạnh bên anh suốt đời
      [03:26.23] Một thế giới riêng anh và em
      [03:29.26] Với những niềm vui, hạnh phúc đắm say
      [03:33.02] Anh muốn là người chở che
      [03:34.53] Khi em yếu mềm
      [03:36.54] Anh muốn được
      [03:37.29] Vòng tay ra ôm em mỗi đêm
      [03:41.32] Liệu anh có thể là người
      [03:43.83] Em chọn sánh đôi
      [03:48.60] Liệu anh có thể là người sánh đôi`,
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
