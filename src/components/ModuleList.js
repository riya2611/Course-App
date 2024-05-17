import React from "react";
import ModuleCard from "./ModuleCard";

const ModuleList = (props) => {
    console.log(props);
    const deleteModuleHandler = (id) => {
        props.getModuleId(id);
    };
    
    const renderModuleList = props.ModuleDetails.map((ModuleDetail) => {
        return( 
          <ModuleCard 
            ModuleDetail = {ModuleDetail} 
            clickHandler = {deleteModuleHandler}
            key={ModuleDetail.id}
            />);
    });

    return <div className="ui celled list">
        <h1 stylesheet="ui bold">List of Modules</h1>
        {renderModuleList}</div>;
};

export default ModuleList;