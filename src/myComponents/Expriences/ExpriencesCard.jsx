import React from 'react';
import Card from './Card';
import BackgroundCirlcle from '../BackgroundCirlcle';

const ExpriencesCard = () => {
    return (
        <div className='grid grid-cols-2 gap-10 mt-10 relative '>
            {/* background circle */}
            <BackgroundCirlcle/>
           <Card/>
           <Card/>
           <Card/>
           <Card/>
            
        </div>
    );
};

export default ExpriencesCard;