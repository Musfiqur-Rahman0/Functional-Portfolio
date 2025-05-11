import { glowing } from '@/consents/data';
import { motion } from 'framer-motion';
import React from 'react';

const BackgroundCirlcle = () => {
    
    return (
        <motion.div variants={glowing} animate="glow" className={`h-full w-1/3  absolute bg-radial from-[#763CAC] to-primary blur-[200px] left-[50%] -translate-x-1/2 top-1/2 -translate-y-1/2  rounded-full z-[5px] `}></motion.div>
    );
};

export default BackgroundCirlcle;