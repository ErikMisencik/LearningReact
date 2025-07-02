
import { useEffect, useState } from 'react';
import './App.css'
import axios from 'axios';

function App() {

  const [data, setData] = useState({ posts: [], users: [] });
  const [loading, setLoading] = useState(false); // Optional: to manage loading state
  const [error, setError] = useState(null); // Optional: to manage error state

  useEffect(() => {
    setLoading(true); // Set loading to true before fetching data
    axios.all([
      axios.get('https://jsonplaceholder.typicode.com/posts'),
      axios.get('https://jsonplaceholder.typicode.com/users')
    ])
      .then(axios.spread((postsResponse, usersResponse) => {
        console.log('Data fetched successfully:', postsResponse);
        console.log('Users fetched successfully:', usersResponse);
        setData({
          posts: postsResponse.data,
          users: usersResponse.data
        });
        // setData(usersResponse.data) 
        setLoading(false); // Set loading to false after data is fetched
        // throw new Error('Simulated error'); // Simulating an error for demonstration
      }))
      .catch(err => {
        console.error('Error fetching data:', err);
        setError('Failed to fetch data'); // Set error if fetching fails
        setLoading(false); // Set loading to false even if there's an error
      });
  }, []); // Fetching data from an API when the component mounts only renders once

  if (loading) {
    return <div>Loading...</div>; // Optional: display loading state
  }

  if (error) {
    return <div>Error: {error}</div>; // Optional: display error state
  }

  return (
    <div>
      <h2> API'S GET</h2>
      <p>Fetching data from an API using useEffect and useState</p>

      <h3>Posts</h3>
      <ul>
        {data.posts.map((post) => (
          <div key={post.id}>
            <p><strong>{post.title}</strong></p>
            <p>{post.body}</p>
          </div>
        ))}
      </ul>

      <ul>
        <h3>Users</h3>
        {data.users.map((user) => (
          <div key={user.id}>
            <p><strong>{user.name}</strong> ({user.email})</p>
            <p>Company: {user.company.name}</p>
          </div>
        ))}
      </ul>

    </div>
  );
}

export default App
