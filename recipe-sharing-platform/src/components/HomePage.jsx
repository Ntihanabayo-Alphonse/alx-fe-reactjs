import React, { useState, useEffect } from 'react'

const HomePage = () => {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            const res = await fetch("/data.json");
            const jsonData = await res.json();
            setData(jsonData)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
        <h1 className='font-bold font-sans text-center md:text-4xl text-3xl mb-10'>Recipe Sharing Platform</h1>
            <div className="card_container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:h-full">
                {
                    data.map(recipe =>
                        <div key={recipe.id} className="card rounded-xl overflow-hidden shadow-md h-full sm:h-full hover:shadow-xl duration-500 cursor-pointer">
                            <img className='w-full h-2/4' src={recipe.image} alt="Recipe Image" />
                            <h3 className='text-center font-bold text-2xl sm:text-3xl m-5 text-zinc-800 font-sans'>{recipe.title}</h3>
                            <p className='text-zinc-600 font-sans mx-6'>{recipe.summary}</p>
                        </div>
                    )
                }
            </div>
        </>
    )
}

export default HomePage