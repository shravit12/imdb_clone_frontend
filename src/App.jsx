import Navbar from './Components/Navbar'
import Home from './Pages/Home'
// import './App.css'
import MovieList from './Pages/MovieList';
import MovieDetails from './Pages/MovieDetails';
import {  Routes ,Route} from "react-router-dom";
import Toprated from './Pages/Toprated';
import Actordetails from './Pages/Actordetails';
import ScrollToTop from './Components/ScrollTopTop';
function App() {

  return (
    <>
     <Navbar />
     <ScrollToTop />
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/movies" element={<MovieList/>}/>
       <Route path="/movie/:id" element={<MovieDetails/>}/>
       <Route path="/top-rated" element={<Toprated/>}/>
       <Route path="/actor/:id" element={<Actordetails/>}/>
     </Routes>
    </>
  )
}

export default App
