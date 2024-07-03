import React from 'react';

const Card = ({item,index}) => {
    return (
        <div>
            <div key={index}>
                <div className='container'>
                <div class="card">
                    <img src={item.image} />
                    <center className='center'style={{paddingTop:'70px'}}>
                    <h5 class="card-title">{item.head}</h5>
                    <h4>{item.date}</h4>
                    <h4>{item.month}</h4>
                    </center>
                    
                </div>
                </div>
               
            </div>

        </div>
    );
};

export default Card;