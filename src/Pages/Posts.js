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
      renderedCards.push(<li><PostCard cardImage= {card.image} cardTitle={card.title} cardContent={card.content}/></li>)
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
      <div>
      <PostsBoard />
      </div>
    )
  }

export default Posts;