import { useContext } from "react";
import "./Zingchart.scss";
import { BsFillPlayFill } from "react-icons/bs";

import LineChart from "../../components/LineChart";
import { LayoutContext } from "../../components/Layout";
import SongItem from "../../components/SongItem";

const Zingchart = () => {
  const { songs } = useContext(LayoutContext);

  return (
    <div className="zing-chart">
      <div className="align-items-center d-flex">
        <h3 className="zing-chart-heading">#zingchart</h3>
        <div className="zing-chart-play-icon">
          <BsFillPlayFill />
        </div>
      </div>

      <div className="chart">
        <LineChart className="canvas" />

        <div className="zing-chart-playlist">
          {songs.map((song) => (
            <SongItem key={song.id} song={song} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Zingchart;
