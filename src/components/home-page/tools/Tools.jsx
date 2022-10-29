import React from 'react'

import "./tools.css";
import cardsData from "../cardsData";

const Tools = () => {

  const card = cardsData.map((cardData) => {
    return (
      <div className="tools__item">
          <a href="/" key={cardData.id}>
            <div className="tools__item__icon">
              <img src={`./icons/${cardData.icon}`} alt="logo" />
            </div>
            <h3>{cardData.title}</h3>
            <div className="tools__item__content">
              <p>{cardData.content}</p>
            </div>
          </a>
      </div>
    )
  })

  return (
    <div className="tools">
        <div className="tools__container">
            {card}
        </div>
    </div>
  )
}

export default Tools