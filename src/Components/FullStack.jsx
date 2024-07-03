import React from 'react';
import Card from './Card';

const FullStack = ({ data }) => {
    const fullstackData = data.filter((item) => item.head === 'Full Stack Development')
    return (
        <div>
             <div class="row row-cols-1 row-cols-md-3 g-4">
             {fullstackData.map((item, index) => {
                return (
                    <>
                        <div>
                           <Card item={item} index={index}/>
                        </div>
                    </>
                )
            })}
             </div>
          
        </div >

    );
};

export default FullStack;