import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../hooks/redux";
import DisplayTags from "../components/DisplayTags";
import LaunchIcon from '@mui/icons-material/Launch';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
const Video = () => {
  const { id } = useParams();
  const [videoUrl, setVideoUrl] = useState("");
  const movieMetaData = useAppSelector(state =>
    state.allMovies.find(m => m.id === id));
  useEffect(() => {
    // call API to get movie stream URL
    axios
      .get(`${process.env["NX_METADATA_API_URL"]}api/Movies/${id}/video`)
      .then(resp => {
        setVideoUrl(resp.data.videoUrl);
      });

  }, [id]);

  if (!movieMetaData) {
    return <div>Loading...</div>;
  }
  return (
    <div className='video-page'>
      <section>
        {videoUrl ?
          <section className="video">
            <video controls>
              <source src={videoUrl} type="video/mp4" />
            </video>
          </section>
          :
          <>loading video url</>}
      </section>
      <Paper sx={{
        margin: '1rem',
        padding: '2rem',
        width: '100%',
      }}
        elevation={5}
      >
        <h1>{movieMetaData.title} <a target="_blank"
          href={videoUrl} rel="noreferrer"><LaunchIcon /></a></h1>

        <ul>
          {movieMetaData.videoTimeStamps.map((timeStamp, i) => (
            <li key={i}>{timeStamp.timeStamp} -- {timeStamp.description} </li>
          ))}
        </ul>
        <DisplayTags tags={movieMetaData.tags} />

      </Paper>
    </div>
  );
};

export default Video;