//3rd parties
import { useState, useEffect } from 'react';
import axios from 'axios';
// function components
import { Card } from './Card'
import { Pagination } from './Pagination'
//styles
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setPageCurrentPage] = useState(1);
  const postsPerPage= 9;

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(res.data);
      setLoading(false);
    }
    fetchPosts(); 
  }, []);

  //get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPost = posts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div className="App">
      <Card posts={currentPost} loading={loading} />
      <Pagination setPage={setPageCurrentPage} page={currentPage} />
    </div>
  );
}

export default App;
