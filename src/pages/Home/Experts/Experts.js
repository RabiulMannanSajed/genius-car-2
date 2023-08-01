import React from 'react';
import expert1 from '../../../Images/experts/expert-1.jpg';
import expert2 from '../../../Images/experts/expert-2.jpg';
import expert3 from '../../../Images/experts/expert-3.jpg';
import expert4 from '../../../Images/experts/expert-4.jpg';
import expert5 from '../../../Images/experts/expert-5.jpg';
import expert6 from '../../../Images/experts/expert-6.png';
import Expert from '../Expert/Expert';

const Experts = () => {
    const experts = [
        { id: 1, name: 'Sharjil', img: expert1 },
        { id: 2, name: 'Rayek', img: expert2 },
        { id: 3, name: 'Asif', img: expert3 },
        { id: 4, name: 'Alif', img: expert4 },
        { id: 5, name: 'Robiul', img: expert5 },
        { id: 6, name: 'Rukshat', img: expert6 },
    ]
    return (
        <div id='experts' className='container'>
            <h2 className='text-primary'>Our Experts</h2>
            <div className='row'>
                {
                    experts.map(expert => <Expert
                        key={expert.id}
                        expert={expert}
                    ></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;