import { useContext, useEffect, useRef, useState } from "react";
import styles from "./Zingchart.module.scss";
import { BsFillPlayFill } from "react-icons/bs";
import classNames from "classnames/bind";
import Chart from "chart.js/auto";
import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import LineChart from "../../components/LineChart";
import { LayoutContext } from "../../components/Layout";
import SongItem from "../../components/SongItem";

const cx = classNames.bind(styles);

const Zingchart = () => {
  const { songs } = useContext(LayoutContext);

  ChartJs.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  const chartData = {
    data: {
      labels: [
        "10:00",
        "12:00",
        "14:00",
        "16:00",
        "18:00",
        "20:00",
        "22:00",
        "00:00",
        "02:00",
        "04:00",
        "06:00",
        "08:00",
      ],
      datasets: [
        {
          label: "Trọn Vẹn Nghĩa Tình",
          data: [
            10546, 9950, 9480, 12034, 11434, 10019, 9329, 8937, 9963, 10041,
            9519, 9575, 10196, 11150, 10589, 6814, 5070, 3799, 3160, 3164, 4738,
            10273, 10998, 10806,
          ],
          backgroundColor: "#4a90e2",
          borderColor: "#4a90e2",
          borderWidth: 1.5,
          tension: 0.4,
          pointBackgroundColor: "#fff",
          pointBorderColor: "#4a90e2",
          pointBorderWidth: 3,
          pointRadius: 0,
          hoverRadius: 6,
        },
        {
          label: "Thương Em",
          data: [
            8039, 7383, 6811, 9549, 8764, 7499, 6917, 6524, 7559, 7702, 7032,
            7097, 7614, 8699, 8048, 6213, 4501, 3182, 2620, 2593, 4268, 7606,
            8208, 8318,
          ],
          backgroundColor: "#27bd9c",
          borderColor: "#27bd9c",
          borderWidth: 1.5,
          tension: 0.4,
          pointBackgroundColor: "#fff",
          pointBorderColor: "#27bd9c",
          pointBorderWidth: 3,
          hoverRadius: 6,
          pointRadius: 0,
        },
        {
          label: "Đám Cưới Nha?",
          data: [
            7391, 6905, 6232, 8665, 7928, 7181, 6526, 5935, 6516, 6779, 6680,
            6651, 6825, 7665, 7537, 5933, 4489, 3272, 2769, 2751, 3429, 5384,
            6494, 6906,
          ],
          backgroundColor: "#e35050",
          borderColor: "#e35050",
          borderWidth: 1.5,
          tension: 0.4,
          pointBackgroundColor: "#fff",
          pointBorderColor: "#e35050",
          pointBorderWidth: 3,
          hoverRadius: 6,
          pointRadius: 0,
        },
      ],
    },

    options: {
      animation: {
        hover: {
          duration: 1000,
          easing: "linear",
          from: 1,
          to: 0,
          loop: true,
        },
      },
      responsive: true,
      plugins: {
        legend: {
          display: true,
          position: "left",
        },
        tooltip: {
          mode: "index",
          position: "nearest",
          intersect: false,
          yAlign: "bottom",
          backgroundColor: "#e35050",
          titleFontSize: 16,
          titleFontColor: "#0066ff",
          bodyFontColor: "#000",
          bodyFontSize: 14,
          displayColors: false,
          lable: {
            display: false,
          },
        },
      },
      interaction: {
        mode: "dataset",
        intersect: false,
      },
      stacked: false,

      scales: {
        y: {
          display: false,
        },
      },
    },
  };

  return (
    <div className={cx("zing-chart")}>
      <div className={cx("align-items-center d-flex")}>
        <h3 className={cx("heading")}>#zingchart</h3>
        <div className={cx("play-icon")}>
          <BsFillPlayFill />
        </div>
      </div>

      <div className={cx("chart")}>
        <LineChart
          className={cx("canvas")}
          data={chartData.data}
          options={chartData.options}
        />

        <div className={cx("playlist")}>
          {songs.map((song) => (
            <SongItem key={song.id} song={song} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Zingchart;
