import React from 'react';
import Card from './Card';

const DataScience = ({ data }) => {
   const datascience= data.filter((item)=>item.head==='data science')
    return (
        <div>
            <div class="row row-cols-1 row-cols-md-3 g-4">
                {datascience.map((item,index) => {
                    return (
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

export default DataScience;