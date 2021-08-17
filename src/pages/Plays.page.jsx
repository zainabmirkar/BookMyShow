import React from 'react';

//components
import Poster from '../components/Posters/poster.component';
import Filters from '../components/Filters/Filters.component';
const Plays = () => {
    return (
        <>
        <div className="container mx-auto px-4 ">
            <div className="w-full lg:flex lg:flex-row-reverse">
          <div className="lg:w-3/4">    <h2 className="text-2xl font-bold mb-4">Plays in Mumbai</h2> 
          <div className="flex items-center gap-2 ">
          <div className="border-2 border-gray-300 w-20 text-red-600 my-6 text-center rounded-full p-2 cursor-pointer">Theatre</div>
          <div className="border-2 border-gray-300 w-52 text-red-600 my-6 text-center rounded-full p-2 cursor-pointer">Online Streaming Plays</div>
          </div>
              <div className="flex flex-wrap ">
              <div className="w-1/2 my-3 lg:w-3/12 md:w-1/3">
                  <Poster src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAyMCBBdWc%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00313451-rxvxxkzkpc-portrait.jpg"
                      title="Admission - 21st Aug"
                      subtitle="English -> ₹199"
                  />
                      </div>
              <div className="w-1/2 my-3 lg:w-3/12 md:w-1/3">
                  <Poster src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAyMCBBdWc%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00313451-rxvxxkzkpc-portrait.jpg"
                      title="Admission - 21st Aug"
                      subtitle="English -> ₹199"
                  />
                      </div>
              <div className="w-1/2 my-3 lg:w-3/12 md:w-1/3">
                  <Poster src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAyMCBBdWc%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00313451-rxvxxkzkpc-portrait.jpg"
                      title="Admission - 21st Aug"
                      subtitle="English -> ₹199"
                  />
                      </div>
              <div className="w-1/2 my-3 lg:w-3/12 md:w-1/3">
                  <Poster src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAyMCBBdWc%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00313451-rxvxxkzkpc-portrait.jpg"
                      title="Admission - 21st Aug"
                      subtitle="English -> ₹199"
                  />
                      </div>
                       </div>
                       </div>

              



            <div className="lg:w-3/12 lg:px-16 ">
            <h2 className="text-2xl font-bold mb-4">Filters</h2>
            <div>
               <Filters title="Date" tags={["Next Weekend","Today","Tomorrow"]}/>
               <Filters title="Language" tags={["Tamil","Telugu","Hindi"]}/>
               <Filters title="Categories" tags={["Theatre","Online Streaming Plays"]}/>
               <Filters title="Genres" tags={["Drama","Comedy","Historical"]}/>
               <Filters title="More Filters" tags={["Kids Allowed","Online Streaming"]}/>
               <Filters title="Price" tags={["Free","0 - 500", "Above 2000"]}/>
            </div>

            <div className="border-2 border-red-500 rounded-md my-6 text-center py-1 text-red-600 cursor-pointer">Browse By Venues</div>
             </div>
            
            </div>
            </div>
        </>
    )
}

export default Plays;
