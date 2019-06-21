import React, { Component } from 'react'
import './FormAndInputs.css'
class FormsAndInputs extends Component{
    
    constructor(props){
        super(props)
        this.state = {
            name: null,
            email: null,
            phone: null,
            message: null
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const data = this.state;
        console.log("Final data is: ",data);
    }
    handleInputChange = (event) => {
        event.preventDefault()
        console.log(event)
        console.log(event.target.name)
        console.log(event.target.value)
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    render() {
        return(
            <div className="form">
                <form onSubmit={this.handleSubmit} action="">
                    <p><input  className="form__input" onChange={this.handleInputChange} placeholder="NOMBRE" name="name" type="text"/></p>
                    <p><input  className="form__input" onChange={this.handleInputChange} placeholder="EMAIL" name="name" type="text"/></p>
                    <p><input  className="form__input" onChange={this.handleInputChange} placeholder="TELÉFONO" name="name" type="text"/></p>
                    <p><input  className="form__input" onChange={this.handleInputChange} placeholder="MENSAJE" name="name" type="text"/></p>
                    <button className="form__button" type="submit">ENVIAR</button>
                </form>
            </div>
        );
    }
}
export default FormsAndInputs