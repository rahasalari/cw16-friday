import React, { Component } from 'react';

let defaultError = true;
class Form extends Component {
    state ={
        name: '',
        email: '',
        errorName: '',
        errorEmail :'',
    }
    componentDidMount(){
        defaultError = false;
    }
    validate = () => {
        this.validateName();
        this.validateEmail();
    }
    
    handelChange = (e) => {
        const{name, value} = e.target;
        this.setState({[name]: value}, this.validate);
    }

    validateName = () => {
        const {name} = this.state;
        if (name === ""){
            this.setState({errorName: "Name is required"})
        }else{
            this.setState({errorName: ""})
        }
    }

    validateEmail = () => {
        const {email} = this.state;
        if (email === ""){
            this.setState({errorEmail: "Email is required"})
        }else{
            this.setState({errorEmail: ""})
        }
    }

    render(){
        const {name, email, errorName, errorEmail} = this.state;
        const isValid = errorName === "" && errorEmail === "";
        const {core, electives} = this.props.course;
        return(
            <>
                <form>
                    <h1>React Form</h1>
                    <hr></hr>
                    <h3>Sign Up sheet</h3>
                    <label>Name</label>
                    <input type="text" placeholder='Name' name='name' value={name} onChange={this.handelChange} required></input>
                    <div className='error-message'>{errorName}</div>
                    <label>Email</label>
                    <input type="text" placeholder='Email' name='email' value={email} onChange={this.handelChange} required></input>
                    <div className='error-message'>{errorEmail}</div>
                    <label>Department</label>
                    <select name='department'>
                        {/* {Object.keys(this.props.course).map(item => 
                            <option>{item}</option>)
                            } */}
                        <option value='1' selected>1</option>
                        <option value='1'>1</option>
                    </select>
                    <label>Course</label>
                    <select name='course'>
                        <option value='1'>1</option>
                        <option value='1'>1</option>
                    </select>
                    <input type="submit" value="submitForm" disabled = {!isValid || defaultError}></input>
                </form>
            </>

        )
    }
}
export default Form;