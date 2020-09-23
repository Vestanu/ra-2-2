import React from "react";

function Card(props) {
    const { name, price, color, img } = props.items;

    return <>
        <div className="item">
            <h2 className="name">{name}</h2>
            <span className="color">{color}</span>
            <img src={img} alt={`${name}-${color}`} />
            <div className="item-bottom">
                <span className="price">${price}</span>
                <span className="button">Add to cart</span>
            </div>
        </div>
    </>
}

export default Card;