import React from 'react';
import ReactLoading from 'react-loading';
const Loading = () => {
    return (
        <div>
             <ReactLoading className='lg:ml-[650px]' type='spinningBubbles' color='black' height={'10%'} width={'10%'} />
        </div>
    );
};

export default Loading;