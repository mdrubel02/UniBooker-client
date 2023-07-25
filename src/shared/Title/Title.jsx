import React from 'react';

const Title = ({content}) => {
    const {title,head} = content
    return (
        <div className="px-4 py-5 lg:px-8 lg:pb-16 text-center font-semibold">
            <span className='text-yellow capitalize'>{head}</span>
            <h3 className='sm:text-4xl text-2xl font-semibold capitalize'>{title}</h3>
        </div>
    );
};

export default Title;