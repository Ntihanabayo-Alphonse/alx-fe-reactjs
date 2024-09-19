import React, { useState, useEffect } from 'react'

const Search = () => {

    const [ search, setSearch ] = useState()

    const handleChange = (e) => {
        const value = e.target.value;
        setSearch(value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(search);
    }

  return (
    <form onSubmit={handleSubmit}>
        <input 
            type="text"
            placeholder='Search Github User'
            name='search-input'
            onChange={handleChange}
        />
        <button className='rounded-md px-6 py-2 text-green-500 bg-blue-950' type="submit">Search</button>
    </form>
  )
}

export default Search