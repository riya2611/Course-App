import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';
import {v4 as uuid} from "uuid";
import Header from "./components/Header";
import AddModule from "./components/AddModule";
import ModuleList from './components/ModuleList';
// import AddResource from "./components/AddResource";

function App(){
  const LOCAL_STORAGE_KEY = "ModuleDetails";
  const [ModuleDetails, setModuleDetails] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []
  );

  const addModuleHandler = (ModuleDetail) => {
    console.log(ModuleDetail);
    setModuleDetails([...ModuleDetails, {id: uuid(), ...ModuleDetail }]);
  };

  const removeModuleHandler = (id) => {
    const newModuleList = ModuleDetails.filter((ModuleDetail) => {
      return ModuleDetail.id != id;
    });
    setModuleDetails(newModuleList);
  }

  useEffect(() => {
    const retrieveModuleDetails = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(retrieveModuleDetails) setModuleDetails(retrieveModuleDetails);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(ModuleDetails));   
  }, [ModuleDetails]);


  return(
    <div className='ui container'>
      <Header/>
      <AddModule addModuleHandler={addModuleHandler} />
      <ModuleList ModuleDetails={ModuleDetails} getModuleId={removeModuleHandler}/>
      
    </div>
  );
}


export default App;
