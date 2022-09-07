import { useParams } from "react-router-dom";
import { useAppSelector } from "../../hooks/redux";
import DisplayTags from "../components/DisplayTags";

const Video = () => {
  // get id from page url 
  const { id } = useParams();
  const movie = useAppSelector(state => state.allMovies.find(m => m.id === id));
  console.log(movie);
  if (!movie) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <section className="access">
        <a target="_blank"
          // eslint-disable-next-line max-len
          href={movie.videoUrl} rel="noreferrer">Watch video in new tab</a>
      </section>
      <section className="video">
        <video controls>
          <source src={movie.videoUrl} type="video/mp4" />
        </video>
      </section>
      <h1>{movie.title}</h1>
      <DisplayTags tags={movie.tags} />
      <ul>
        {movie.videoTimeStamps.map((timeStamp, i) => (
          <li key={i}>{timeStamp.timeStamp} -- {timeStamp.description} </li>
        ))}
      </ul>
    </div>
  );
};

export default Video;