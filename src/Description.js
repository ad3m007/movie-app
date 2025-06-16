import movies from "./file_movies";
import { useParams } from "react-router-dom";

import { useNavigate } from "react-router-dom";





function Description() {
    
    const x=useParams()

    console.log(x)
    
     const filtredx = movies.filter((el) => el.title.toLowerCase()==x.title.toLowerCase())
     console.log(filtredx)


     
  const navigate = useNavigate();
  const navigateTohome = () => {
    navigate("/");
  };


 
  return (
    <>
   {filtredx[0].description}
   <iframe src={filtredx[0].trailer} width="600" height="400" title="Example"></iframe>
      
      <button onClick={navigateTohome}>home</button>
    </>
  )
}

export default Description;
