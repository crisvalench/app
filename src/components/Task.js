
import React,{ Component } from "react";
import '../components/Task.css'

class Taks extends Component{
  render(){
    const {task}=this.props;

    return <p>
      {task.title}-
      {task.description}-
      {task.done}-
      {task.id}
    <input type = 'checkbox'/>
    <button style={btnDelete}>
      x
    </button>
    </p>
  }
}

const btnDelete = {
  fontSize:'18px',
  background:'#ea2027',
  color:'white',
  border:'none',
  padding:'10px 150x',
  borderRadius: '50%',
  cursor:'pointer',
  
}
export default Taks;