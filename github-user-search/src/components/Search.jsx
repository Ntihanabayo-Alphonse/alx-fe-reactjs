import React, { useState, useEffect } from 'react'
import fetchUserData from '../services/githubService'

const Search = () => {
    const [search, setSearch] = useState()
    const [userData, setUserData] = useState()
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const value = e.target.value;
        setSearch(value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const data = await fetchUserData(search);
            setUserData(data)

        } catch (error) {
            setError("Looks like we can't find the user");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder='Search Github Username'
                    name='search-input'
                    onChange={handleChange}
                />
                <button className='rounded-md px-6 py-2 text-green-500 bg-blue-950' type="submit">Search</button>
            </form>

            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}

            {userData && (
                <div>
                    <img src={userData.avatar_url} alt="User Profile" />
                    <p>{userData.login}</p>
                    <a href={userData.html_url} target="_blank">View GitHub Profile</a>
                </div>
            )}
        </div>
    )
}

export default Search