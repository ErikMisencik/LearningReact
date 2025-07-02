
import { useEffect, useState } from 'react';
import './App.css'
import api from './Api';



function App() {

  const [data, setData] = useState();
  const handleSubmit =  (event) => {
    event.preventDefault();
    const newPost = {
      title: 'New Post',
      body: 'This is the body of the new post',
      userId: 1
    }
    api.post('/posts', newPost)
      .then(response => {
        console.log('Post created:', response.data);
        setData([response.data]);
      })
      .catch(error => {
        console.error('Error creating post:', error);
      }
    );

  }


  useEffect(() => {
   
  }, []); 

  return (
    <div>
      <h2> API'S POST</h2>
      <form onSubmit={handleSubmit}>
        <button type='submit'> Add Post </button>
      </form>

    </div>
  );
}

export default App
