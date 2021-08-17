import React from "react";

// to design arrows in carousal
export const NextArrow = (props) =>{

    // props that are passed are classname , styles , onclick
   return (<>
       <div className={props.className}
           style={{...props.style, backgroundColor:"black"}}
           onClick={props.onClick}
       ></div>
   </>
   );
 };
export const PrevArrow = (props) =>{
   return (<>
       <div className={props.className}
           style={{...props.style, backgroundColor:"black"}}
           onClick={props.onClick}></div>
   </>
   );
 };