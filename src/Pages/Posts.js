import React from 'react';
import './Posts.css';
import PostCard from './Posts/PostCard'
import {controller} from '../controller';

const PostsBoard = () => {
  const renderCards = () => {
    const cardData = controller.fetchCardsFromDatabase();
    const options = {
      cardPerPage: 30
    }
    
    let renderedCards = [];
    cardData.forEach(card => {
      renderedCards.push(<PostCard key={card.key} cardImage= {card.image} cardTitle={card.title} cardContent={card.content}/>)
    })
    console.log(renderedCards)
    return renderedCards
  }
  return (
    <ul className="postBoard">
      {renderCards()}
    </ul>
  )
}

const Posts = () => {
    return (
      <div className="postsPage">
      <PostsBoard />
      </div>
    )
  }

export default Posts;