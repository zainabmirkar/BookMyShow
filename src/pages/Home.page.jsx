import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Slider from 'react-slick';
//entartainment card slider
import EntertainmentCardSlider from "../components/Entertainment/Entertainmentcard.component"
import PosterSlider from '../components/PosterSlider/PosterSlider.component';

// config
import TempPosters from "../config/TempPosters.config";


const HomePage = () =>{
   const [popularMovies,setPopularMovies] = useState([]);
   const [topRatedMovies,setTopRatedMovies] = useState([]);
   const [upcomingMovies,setUpcomingMovies] = useState([]);



   useEffect(()=>{
     const requestPopularMovies = async () => {
       const getPopularMovies= await axios.get("/movie/popular");
       setPopularMovies(getPopularMovies.data.results);
     };
     requestPopularMovies();
   },[]);

  //  console.log({popularMovies});

   useEffect(()=>{
    const requestTopRatedMovies = async () => {
      const getTopRatedMovies= await axios.get("/movie/top_rated");
      setTopRatedMovies(getTopRatedMovies.data.results);
    };
    requestTopRatedMovies();
  },[]);

  // console.log({popularMovies});

  useEffect(()=>{
    const requestUpcomingMovies = async () => {
      const getUpcomingMovies= await axios.get("/movie/upcoming");
      setUpcomingMovies(getUpcomingMovies.data.results);
    };
    requestUpcomingMovies();
  },[]);

  // console.log({popularMovies});




  return <>
  <div className="flex flex-col gap-12">
  <div className="container mx-auto px-36 ">
  <h1 className="text-2xl font-bold text-gray-800 my-3 mx-2">The Best Of Entertainment</h1>
     <EntertainmentCardSlider/>
     </div>

    <div className="bg-bms-800 py-12">

     <div className="container mx-auto px-4  lg:px-24">
     <div className="hidden  md:flex">
     
     <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png" alt="premiereimg"
       className="w-full h-full"
     />
   
   
  </div>
     <PosterSlider images={popularMovies} title="Premieres" subtitle="Brand New Releases Every Friday" isDark={true}/>
     </div>

    </div>
    </div>

    
     <div className="container mx-auto px-4 my-8 lg:px-24">
     <PosterSlider images={topRatedMovies} title="Online Streaming Events" isDark={false}/>
     </div>

     
     <div className="container mx-auto px-4 my-8 lg:px-24">
     <PosterSlider images={upcomingMovies} title="Outdoor Events" isDark={false}/>
     </div>



  </>;
};


export default HomePage;









