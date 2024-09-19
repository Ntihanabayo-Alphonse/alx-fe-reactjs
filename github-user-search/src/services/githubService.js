import React, { useEffect, useState } from 'react'
import axios from 'axios'

const githubService = () => {

    const [ user, setUser ] = useState();

    const fetchUserData = () => {
        axios.get(`https://api.github.com/users/${username}`)
            .then(response => setUser(response.json()));
    }

    useEffect(() => {
        fetchUserData();
    }, []);

  return (
    <div>githubService</div>
  )
}

export default githubService