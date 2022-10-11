import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';



// const handleClick = (data, index) => {
//     this.setState({
//         activeIndex: index,
//     });
// };


const Statistics = () => {
    const quizes = useLoaderData();
    console.log(quizes.data)

    return (
        <div className='mt-12 w-4/5 mx-auto'>
            <ResponsiveContainer width="100%" height={500}>

                <BarChart data={quizes.data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="total" fill="#67E8F9" />
                </BarChart>
            </ResponsiveContainer >


        </div>
    );
};

export default Statistics;