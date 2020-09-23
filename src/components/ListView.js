import React from "react";
import Item from "./Item";

function ListView(props) {
    const { items } = props;
    return <>
        <div className="list-view">
            {items.map(o => <Item items={o} />)}
        </div>
    </>
}

export default ListView;