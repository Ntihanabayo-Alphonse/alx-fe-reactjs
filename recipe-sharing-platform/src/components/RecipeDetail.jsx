import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const RecipeDetail = () => {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        const response = await fetch('/data.json');
        const jsonData = await response.json();
        setData(jsonData);
    }

    useEffect(() => {
        fetchData();
    }, []);

    const { id } = useParams();

    const recipe = data.find((recipe) => recipe.id === Number(id));
    

    if (!recipe) {
        return <div>Loading...</div>;
    }

    const { title, summary, image, description, ingredients, instructions } = recipe;

    return (
        <>
            <h1 className='font-bold font-sans text-center md:text-4xl text-3xl mb-10'>Make {title}</h1>
            <div className="card_container h-full">
                <div className="card w-full sm:w-2/3 mx-auto my-0 rounded-xl overflow-hidden shadow-md  h-full hover:shadow-xl duration-500 cursor-pointer pb-10">
                    <img className='w-full h-1/3' src={image} alt="Recipe Image" />
                    <h3 className='text-center font-bold text-2xl sm:text-3xl m-5 text-zinc-800 font-sans'>{title}</h3>
                    <p className='text-zinc-600 font-sans mx-6'>{summary}</p>
                    <p className='text-zinc-600 font-sans mx-6 mt-4 font-bold'>Description</p>
                    <p className='text-zinc-600 font-sans mx-12'>{description}</p>
                    <p className='text-zinc-600 font-sans mx-6 font-bold mt-4'>Ingredients</p>
                    <ul className='mx-16 list-disc'>
                        {
                            ingredients.map((ingredient, index) => (
                                <li key={index}>{ingredient}</li>
                            ))
                        }
                    </ul>
                    <p className='text-zinc-600 font-sans mx-6 font-bold mt-4'>Instructions</p>
                    <ol className='mx-16 list-decimal'>
                        {
                            instructions.map((instruction, index) => (
                                <li key={index}>{instruction}</li>
                            ))
                        }
                    </ol>
                </div>
            </div>
        </>
    )
}

export default RecipeDetail