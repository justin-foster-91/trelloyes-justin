import React from 'react';
import Cards from '../Cards/Cards';
import './Lists.css';

function Lists({cards}) {
  // const cards = this.state.Store.allCards;
  const cardArray = cards.map((item, i) => {
    return(
      <Cards
      key={`Card ${i}`}
      cardId= {cards[i].id}
      cardTitle= {cards[i].title}
      cardContent= {cards[i].content}
    />
    )
  });
  return (
    <>
      <h2>{cards.header}</h2>
      {/* Do I need to receive the props on this end or does the props parameter do that? */}
      {/* How does cards.id change with allCards having a key before the values I want? */}
      {cardArray}
    </>
  );
}

export default Lists;