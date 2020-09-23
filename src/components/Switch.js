import React from "react";

function Switch(props) {
    const { icon } = props;

    const onSwitch = () => {
        props.onSwitch();
    }


    return <>
        <div className="set-view">
            <div className="material-icons" onClick={onSwitch}>{icon}</div>
        </div>
    </>
}

export default Switch;