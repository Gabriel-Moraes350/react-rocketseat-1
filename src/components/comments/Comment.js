import React from 'react';
import './Comment.css';

export default function Comment({ data }) {
  return (
    <div className="post__comment">
      <img
        src={data.author.avatar}
        alt="Imagem de perfil"
        className="profile-picture"
      />
      <div className="post__comment__text">
        <strong>{data.author.name}</strong> {data.content}
      </div>
    </div>
  );
}
