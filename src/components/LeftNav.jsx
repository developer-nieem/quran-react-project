import React, { useContext } from 'react';
import  { ApiProvider } from '../ContextProvider/ContextProvider';
import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

const LeftNav = () => {
    const {surah} = useContext(ApiProvider);
   
    const surahName =  surah.surahs
   
    if (!surahName) {
        return <p>Loading.....</p>
    }
    console.log(surahName);
// 
    return (
        <div>
          {
            surahName.map(name=> <div>
                
                
                <Nav.Link ><NavLink  className='text-black text-decoration-none w-100 my-2'>{name.number}. {name.englishName}</NavLink></Nav.Link>
                
            </div> )
          }
        </div>
    );
};

export default LeftNav;