import React from 'react';
import Card from './Card';

const CyberSecurity = ({ data }) => {
    const cybersecurity = data.filter((item) => item.head === 'cyber security')
    return (
        <div>
            <div class="row row-cols-1 row-cols-md-3 g-4">
                {cybersecurity.map((item, index) => {
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

export default CyberSecurity;