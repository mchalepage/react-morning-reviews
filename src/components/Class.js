import React, {Component} from 'react'

class Form extends Component {
 constructor(){
     super()

     this.state = {
         title: '',
         year: '',
         posterImg: ''
     }

     this.handleChange = this.handleChange.bind(this)
 }

 handleChange(e){
    this.setState({
        [e.target.name]: e.target.value
    })
 }

 render(){
     console.log(this.state)
     return (
         <form>
             <input 
             name='title' 
             placeholder='Title'
             onChange={e => this.handleChange(e)}/>
             <input 
             name='year' 
             placeholder='Year'
             onChange={e => this.handleChange(e)}/>
             <input 
             name='posterImg' 
             placeholder='Poster'
             onChange={e => this.handleChange(e)}/>

             <button type='submit'>Add Movie</button>
         </form>
     )
 }
}

export default Form