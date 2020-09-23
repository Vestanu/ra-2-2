import React from "react";
import Card from "./Card";

function CardsView(props) {
    const { cards } = props;
    return <>
        <div className="cards-view">
            {cards.map(o => <Card key={o.img} items={o} />)}
        </div>
    </>
}

export default CardsView;