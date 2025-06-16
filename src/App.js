import { useState } from "react";
import MoviesList from "./MoviesList";
import movies from "./file_movies";
import "./App.css";
import AddMovie from "./AddMovie";
import useFilter from "./useFilter";
import Search from "./search";
import { Route,Routes } from "react-router-dom";
import Description from "./Description";

function App() {
  const [m1, setM1] = useState(movies);

  const [searchTitle, setSearchTitle] = useState("")
  const [searchRating, setSearchRating] = useState(0)
  
  const filtredList = useFilter(m1, searchTitle,searchRating)

  

  const addM = (newMovie) => {
    setM1([...m1, newMovie])
  }

  return (
    <div style={{ backgroundColor: "navy" }}>
      
      <Routes>
        <Route path="/description/:title" element={<Description/>} />
        <Route path="/" element={<MoviesList filtredList={filtredList} />} /> 
     </Routes>

       <Search setSearchTitle={setSearchTitle} setSearchRating={setSearchRating}/>
      
      
      <AddMovie addM={addM} />
    </div>
  );
}

export default App;
