import React, { Component}from "react";

class TaskForm extends Component{

    state={
        title:'',
        description:''
    }

    onSubmit= (event) => {
        this.props.addTask(this.state.title,this.state.description);

        console.log(this.state);
        event.preventDefault();
    }
    onChange =(event)=>{
        console.log(event.target.name,event.target.value);
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    render(){
        return(
            <form onSubmit={this.onSubmit}>
                <input type="text" name='title' placeholder="Write a Task" onChange={this.onChange} value={this.state.title} />
                <br/>
                <br/>
                <textarea placeholder='Write a Description' name='description' onChange={this.onChange} value={this.state.description}></textarea>
                <br/>
                <button type='submit'>
                    Save a Task
                </button>
            </form>
        )
    }
}
export default TaskForm;