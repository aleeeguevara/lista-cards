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
  const [postsPerPage, setPostsPerPage] = useState(10);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(res.data);
      setLoading(false);
    }
    fetchPosts();
  }, []);

  return (
    <div className="App">
      <Card posts={posts} loading={loading} />
    </div>
  );
}

export default App;
