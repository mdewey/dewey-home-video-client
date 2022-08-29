// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Menu from "./components/Menu";
import Video from "./pages/Video";
import axios from "axios";
import { useEffect } from "react";
import { useAppDispatch } from "../hooks/redux";



export function App() {
  console.log(process.env);
  const dispatch = useAppDispatch();
  useEffect(() => {
    axios.get(`${process.env["NX_METADATA_API_URL"]}api/Movies`).then(resp => {
      console.log(resp);
      dispatch({ type: "SET_MOVIES", payload: resp.data });
    });

  }, [dispatch]);
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Video />} />
        <Route path="about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
