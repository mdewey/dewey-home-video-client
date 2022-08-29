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
        <a href={movie.url}>{movie.url}</a>
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