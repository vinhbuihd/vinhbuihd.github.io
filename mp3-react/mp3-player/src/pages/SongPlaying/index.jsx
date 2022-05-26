import "./SongPlaying.css";
import { Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import SongItem from "../../components/SongItem";
import { useContext } from "react";
import { LayoutContext } from "../../components/Layout";
import CdThumbnail from "../../components/CdThumbnail";

const SongPlaying = () => {
  const { isPlaying } = useSelector((state) => state);
  const { currentIndex, songs, searchResult } = useContext(LayoutContext);
  const dispatch = useDispatch();

  return (
    <div className="song-playing">
      <Grid container spacing={5}>
        <Grid item md={4} sm={12}>
          <CdThumbnail song={searchResult} />
        </Grid>
        <Grid item md={8} sm={12} className="song-playing-playlist">
          <SongItem key={searchResult.id} song={searchResult} />
        </Grid>
      </Grid>
    </div>
  );
};

export default SongPlaying;
