import React from 'react'

const FoodItems = (props) => {
    return (
        <article>
        <h4>{props.name}</h4>
        <img src={props.src} alt={props.name} width="400px" height="400px"/>
        <p>Best time to eat: <span>{props.time}</span></p>
        <p>Best place: <span>{props.place}</span></p>
        </article>
    )
}

export default FoodItems