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
     this.handleAdd = this.handleAdd.bind(this)
 }

 handleChange(e){
    this.setState({
        [e.target.name]: e.target.value
    })
 }

 handleAdd(e){
    e.preventDefault()
    const {title, year, posterImg}  = this.state
    this.props.addMovie(title, year, posterImg)
 }

 render(){
     console.log(this.state)
     return (
         <form onSubmit={this.handleAdd} className="Form">
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