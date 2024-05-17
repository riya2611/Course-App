import React from "react";

const ModuleCard = (props) => {
    const {id, name, description} = props.ModuleDetail;
    return (
        <div className="item">
                <div className="content">
                    <div className="header">{name}</div>
                    <div>{description}</div>
                    <div>
                        <i 
                        className="trash alternate outline icon"
                        style = {{color: "red", marginTop: "7px"}}
                        onClick={() => props.clickHandler(id)}
                        ></i>
                    </div>
                </div>
            </div>
    );
}

export default ModuleCard;