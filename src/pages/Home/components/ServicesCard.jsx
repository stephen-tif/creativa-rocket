import React from "react";
import 'atropos/css'
import Atropos from 'atropos/react';

const ServicesCard = ({ title, description, imageUrl }) => (
    <Atropos
        className="w-full md:w-1/3 p-4"
        activeOffset={70}
        shadowScale={0.9}
        rotateXMax={25}
        rotateYMax={25}
        shadow={true}
        highlight={true}
    >
        <div className="bg-white dark:bg-red-950 dark:bg-gradient-to-r dark:from-black text-black dark:text-white border-2 border-red-600 dark:border-gray-400 rounded-lg overflow-hidden shadow-lg">
            <div className="p-4 z-10" data-atropos-offset="5.5">
                <h1 className="text-xl font-bold mb-2">{title}</h1>
                <p className="text-base">{description}</p>
            </div>
            <div className='opacity-90'>
                <img
                    className="w-75 mx-auto my-2.5"
                    src={imageUrl}
                    alt={title}
                />
            </div>
        </div>
    </Atropos>
);

export default ServicesCard;