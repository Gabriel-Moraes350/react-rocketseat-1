import React, { Component } from 'react';
import Comment from '../comments/Comment';
import './Post.css';

export default class Post extends Component {
  render() {
    return (
      <div className="main__post">
        <div className="post__header">
          <img
            src={this.props.data.author.avatar}
            alt="Imagem de perfil"
            className="profile-picture"
          />
          <div className="post__header_info">
            <h3>{this.props.data.author.name}</h3>
            <small>{this.props.data.date}</small>
          </div>
        </div>
        <div className="post__content">
          <p>{this.props.data.content}</p>
        </div>
        <hr className="line-comments" />
        <div className="post_comment__container">
          {this.props.data.comments.map(comment => (
            <Comment data={comment} key={comment.id}></Comment>
          ))}
        </div>
      </div>
    );
  }
}
