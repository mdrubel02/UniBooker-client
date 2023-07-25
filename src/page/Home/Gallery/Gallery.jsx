import React from 'react';
import Title from '../../../shared/Title/Title';

const Gallery = () => {
    const content = {
        head:"Our most",
        title:"Popular University"
    }
    return (
        <section className="py-6 md:py-16 px-5 md:px-16 xl:px-28">
        <Title content={content}></Title>
    <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
        <img src="https://i.ibb.co/1TDrq0Z/1541589470-shutterstock-764236861.jpg" alt="carGallary" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square" />
        <img alt="carGallary" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://i.ibb.co/xfjNVdS/images.jpg" />
        <img alt="foodGallary" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://i.ibb.co/Dr8TjcT/oxford-1576245233.jpg" />
        <img alt="carGallary" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://i.ibb.co/L0wzwBd/photo-1523050854058-8df90110c9f1.jpg" />
        <img alt="foodGallary" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://i.ibb.co/R3J620S/photo-1562774053-701939374585.jpg" />
        <img alt="carGallary" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://i.ibb.co/J5k1f32/i-Stock-1142918319-WENR-Ranking-740-430.jpg" />
        <img alt="carGallary" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://i.ibb.co/wyLvdcd/images.jpg" />
        <img alt="carGallary" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://i.ibb.co/VM5FcRC/1MIT.jpg" />
        <img alt="carGallary" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="ttps://i.ibb.co/6tX5Nv4/104790550-Radcliffe-Camera.jpg" />
        <img src="https://i.ibb.co/6rzF3p1/105265768-University-of-Cambridge.jpg" alt="university" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 dark:bg-gray-500 aspect-square" />
    </div>
    </section>
    );
};

export default Gallery;

// //https://i.ibb.co/6rzF3p1/105265768-University-of-Cambridge.jpg
// https://i.ibb.co/1TDrq0Z/1541589470-shutterstock-764236861.jpg
// https://i.ibb.co/xfjNVdS/images.jpg
// https://i.ibb.co/Dr8TjcT/oxford-1576245233.jpg