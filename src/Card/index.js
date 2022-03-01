import React from 'react';

import './index.css'

export const Card = ({ posts, loading }) => {
  if (loading) {
    return <h2>Carregando...</h2>
  }
  return (
    <div className="cards-container">
      {posts.map(post => (
        <div key={post.id} className="card">{post.title}</div>
    ))}
    </div>
  );
};