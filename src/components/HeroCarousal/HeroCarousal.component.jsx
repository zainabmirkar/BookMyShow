import React,{useState,useEffect} from 'react';
import HeroSlider from "react-slick";
import axios from 'axios';
import { NextArrow,PrevArrow } from './Arrows.component';



const HeroCarousal = () =>{
    const [images, setImages] = useState([]);

     useEffect(() => {
         const requestNowPlayingMovies = async () =>{
           const getImages = await axios.get("/movie/now_playing");
           setImages(getImages.data.results);
         };
         requestNowPlayingMovies();
     },[]);


    // large screens
    const settingsLG = {
        arrows:true,
        centerMode: true,
        autoplay: true,
        centerPadding : "300px",
        slidesToShow: 1,
        infinite: true,
        slidesToScroll: 1,
        nextArrow :<NextArrow/>,
        prevArrow : <PrevArrow/>,

    };

  //mobile devices
    const settings = {
        arrows: true,
        
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow :<NextArrow/>,
        prevArrow : <PrevArrow/>,
      };
      
      
    return <>
     
        <div className="lg:hidden">
        {/* mobile devices and medium screen */}
        <HeroSlider {...settings}>
         {
             images.map((image) => (
                 <div className="w-full h-56 md:h-80 py-3">
                     <img src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`}alt="testing" className="w-full h-full "/>
                 </div>
             )) 
         }

         </HeroSlider>
        </div>
        <div className="hidden lg:block">
        {/* large screen*/}
        <HeroSlider {...settingsLG}>
         {
             images.map((image) => (
                 <div className="w-full h-96 px-2 py-3">
                     <img src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`}alt="testing" className="w-full h-full rounded-md"/>
                 </div>
             )) 
         }

         </HeroSlider>
        </div>
    </>
};
export default HeroCarousal;