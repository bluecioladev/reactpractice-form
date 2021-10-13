//import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router, Route,Link } from 'react-router-dom'
import { Component } from 'react';
import './App.css';
import tasks from './sample/tasks.json'

import Tasks from './components/Tasks'

import TaskForm from './components/taskForm'
import Posts from './components/Post'
console.log(tasks);
class App extends Component {

  state = {
    tasks: tasks
  }
  addTask = (title, description) => {
    //console.log(title,description);



    const newTask = {
      title: title,
      description: description,
      id: this.state.tasks.length
    }
    this.setState({
      tasks: [...this.state.tasks, newTask]
    })
  }

  deleteTask = (id) => {
    const newtasks = this.state.tasks.filter(task => task.id !== id)
    this.setState({
      tasks: newtasks
    })
    console.log(newtasks);
  }
  checkDone = (id) => {
    const newTasks = this.state.tasks.map(task => {
      if (task.id === id) {
        task.done = !task.done

      }
      return task;
    })
    this.setState({ tasks: newTasks })
  }


  render() {
    return <div>
      <Router>
      <Link to='/'>Home</Link>
      <br/>
      <Link to='/posts'>Posts</Link>

      <Route exact path="/" render={() => {
       return <div>
          <TaskForm addTask={this.addTask} />
          <Tasks tasks={this.state.tasks} deleteTask={this.deleteTask} checkDone={this.checkDone} />
        </div>
      }}>

      </Route>
      <Route path="/posts" component={Posts}>

      </Route>
      </Router>

     
    </div>
  }
}

export default App;
