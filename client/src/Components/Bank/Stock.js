import React, { useState, useEffect } from 'react';
import axios from "../Api";

const Stock = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("/bank/getStock").then((r) => {
            setData(r.data.stock);
        }).catch((err) => { alert("Something went wrong") });
    }, []);

    return (
        <div className="flex justify-center py-10 bg-gray-100 min-h-screen">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
                {
                    data && Object.keys(data).map((e) => {
                        return (
                            <div key={e} className='bg-blood text-white shadow-lg h-40 w-40 flex flex-col justify-center items-center rounded-full transform hover:scale-105 transition-transform duration-300'>
                                <p className='text-3xl font-extrabold'>{data[e]}mL</p>
                                <p className='text-xl'>{e}</p>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
};

export default Stock;
