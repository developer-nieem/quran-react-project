import React, { useContext } from 'react';
import { ApiProvider } from '../ContextProvider/ContextProvider';

const MainContent = () => {
    const {surah} =  useContext(ApiProvider);
    


    return (
        <div>
            right
        </div>
    );
};

export default MainContent;