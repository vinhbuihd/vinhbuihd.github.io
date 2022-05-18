import { Lrc } from "react-lrc";
import { Grid } from "@mui/material";

import { MdOpenInFull, MdCloseFullscreen } from "react-icons/md";
import { HiOutlineChevronDown } from "react-icons/hi";
import { AiOutlineSetting } from "react-icons/ai";
import CdThumbnail from "../CdThumbnail";
import "./Lyric.css";

const lrc = `[00:19.77] Vest đen đeo cà vạt chỉnh tề
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
[03:47.93] Được không`;

const Lyric = ({ currentTime, isShowLyric, setIsShowLyric }) => {
  return (
    <div className={`song-karaoke ${isShowLyric ? "show" : ""}`}>
      <div className="lyric-container">
        <div className="lyric-top d-flex align-items-center">
          <div className="lyric-left"></div>
          <div className="lyric-tab">
            <button className="btn">Danh sách phát</button>
            <button className="btn active">Lời bài hát</button>
          </div>

          <div className="lyric-button-group d-flex align-items-center">
            <div className="icon-button">
              <MdOpenInFull />
            </div>
            <div className="icon-button">
              <AiOutlineSetting />
            </div>
            <div className="icon-button" onClick={() => setIsShowLyric(false)}>
              <HiOutlineChevronDown />
            </div>
          </div>
        </div>
        <div className="lyric-body">
          <Grid container spacing={8}>
            <Grid item md={4} sm={12}>
              <div className="lyric-cdThumb">
                <CdThumbnail />
              </div>
            </Grid>

            <Grid item md={8} sm={12}>
              <div className="lyric-text">
                <Lrc
                  style={{ height: "500px" }}
                  lrc={lrc}
                  autoScroll={true}
                  topBlank={false}
                  bottomBlank={true}
                  currentMillisecond={currentTime * 1000}
                  lineRenderer={({ index, active, line }) => (
                    <div
                      className="lyric-line"
                      style={{
                        color: active ? "yellow" : "#fff",
                      }}
                    >
                      {line.content}
                    </div>
                  )}
                />
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default Lyric;
