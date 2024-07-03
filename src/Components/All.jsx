import React from 'react';
import './style/All.css';
import Card from './Card';


const All = ({ data }) => {
    return (
        <div>
            <div class="row row-cols-1 row-cols-md-3 g-4">
                {data.map((item, index) => {
                    return (
                        <>
                        <Card item={item} index={index}/>
                        </>
                    )
                })}
            </div>


        </div>












    );
};

export default All;