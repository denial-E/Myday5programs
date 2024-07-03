import React from 'react';
import Card from './Card';

const Career = ({data}) => {
    const career=data.filter((item)=>item.head==='career')
    return (
        <div>
             <div class="row row-cols-1 row-cols-md-3 g-4">
               {career.map((item,index)=>{
                return(
                    <>
                    <div>
                   <Card item={item} index={index}/>
                    </div>
                    </>
                )
               })}

             </div>
            
        </div>
    );
};

export default Career;