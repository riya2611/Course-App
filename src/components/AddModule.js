import React from "react";
import './AddModule.css';

class AddModule extends React.Component{
    state = {
        name : "",
        description: "",
    };
    

    add = (e) => {
        e.preventDefault();
        if(this.state.name === "" || this.state.description === ""){
            alert("All fields are mandatory!");
            return;
        }
        this.props.addModuleHandler(this.state);
        this.setState({name: "", description: ""});
        console.log(this.state);
    };

    render() {
        return (
            <div className="main">
                <div className="module_container">
                <h2>Add Module</h2>
                <form className="ui form" onSubmit={this.add}>
                    <div className="field1">
                        <label>Name</label>
                        <input 
                           type="text" 
                           name="name" 
                           placeholder="name" 
                           value = {this.state.name}
                           onChange={(e) => this.setState({name: e.target.value})}></input>
                    </div>
                    <div className="field2">
                        <label>Description</label>
                        <input 
                           type="text" 
                           name="description" 
                           placeholder="Description of Module"
                           value = {this.state.description}
                           onChange={(e) => this.setState({description: e.target.value})}></input>
                    </div>
                    <button className="ui button blue">Add</button>
                </form>
                </div>

                <div className="link_container">
                <h2>Add Link</h2>
                <form className="ui form" onSubmit={this.add2}>
                    <div className="field1">
                        <label>Name</label>
                        <input 
                           type="text" 
                           name="name" 
                           placeholder="name" 
                           value = {this.state.name}
                           onChange={(e2) => this.setState({name: e2.target.value})}></input>
                    </div>
                    <div className="field2">
                        <label>Link</label>
                        <input 
                           type="url" 
                           name="description" 
                           placeholder="Link of Module"
                           value = {this.state.description}
                           onChange={(e2) => this.setState({description: e2.target.value})}></input>
                    </div>
                    <button className="ui button blue">Add</button>
                </form>
                </div>


                <div className="file_container">
                <h2>Upload File</h2>
                <form className="ui form" onSubmit={this.add3}>
                    <div className="field1">
                        <label>Name</label>
                        <input 
                           type="text" 
                           name="name" 
                           placeholder="name" 
                           value = {this.state.name}
                           onChange={(e3) => this.setState({name: e3.target.value})}></input>
                    </div>
                    <div className="field2">
                        <label>Upload</label>
                        <input 
                           type="url" 
                           name="description" 
                           placeholder="Link of Module"
                           value = {this.state.description}
                           onChange={(e3) => this.setState({description: e3.target.value})}></input>
                    </div>
                    <button className="ui button blue">Add</button>
                </form>
                </div>


                
            </div>
        );
    }
}

export default AddModule;


