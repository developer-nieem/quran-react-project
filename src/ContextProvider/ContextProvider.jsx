import React, { createContext, useEffect, useState } from 'react';

export const ApiProvider = createContext()
const ContextProvider = ({children}) => {

    const [surah, setSurah] = useState([]);
    
    useEffect(()=>{
        fetch('http://api.alquran.cloud/v1/quran/ar.alafasy')
        .then(res=> res.json())
        .then(data=> setSurah(data.data))
    },[])

   
const apiInfo = {
    surah,
}
    return (
        <div>
            <ApiProvider.Provider value={apiInfo}>
                {children}
            </ApiProvider.Provider>
        </div>
    );
};

export default ContextProvider;