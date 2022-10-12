import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Label } from 'recharts';



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

                <BarChart data={quizes.data} margin={{ top: 15, right: 30, left: 20, bottom: 30 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name">
                        <Label value="Total questions in each topic" position="bottom"></Label>

                    </XAxis>
                    <YAxis />
                    <Tooltip />
                    {/* <Legend /> */}
                    <Legend verticalAlign="insideTop" height={36} />

                    <Bar dataKey="total" fill="#cebdde" />
                </BarChart>
            </ResponsiveContainer >


        </div>
    );
};

export default Statistics;