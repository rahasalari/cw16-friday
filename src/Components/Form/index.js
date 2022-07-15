import React, { Component } from "react";

let defaultError = true;
let displayCourse = "none";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      errorName: "",
      errorEmail: "",
      options: [],
      courseValue: "",
      errorCourse: "",
      personInfo: [],
    };
  }

  componentDidMount() {
    defaultError = false;
  }

  // Control Inputs

  handelChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value }, this.validate);
  };

  // Validate Form

  validate = () => {
    this.validateName();
    this.validateEmail();
    this.validateCourse();
  };
  validateName = () => {
    const { name } = this.state;
    if (name === "") {
      this.setState({ errorName: "Name is required" });
    } else {
      this.setState({ errorName: "" });
    }
  };
  validateEmail = () => {
    const { email } = this.state;
    if (email === "") {
      this.setState({ errorEmail: "Email is required" });
    } else {
      this.setState({ errorEmail: "" });
    }
  };
  validateCourse = () => {
    const { courseValue } = this.state;
    if (courseValue === "") {
      this.setState({ errorCourse: "Course is required" });
    } else {
      this.setState({ errorCourse: "" });
    }
  };

  // Make Options for course select
  fillOptions = (values) => {
    const arr = this.props.course[values];
    this.setState({ courseValue: values }, () => {
      if (this.state.courseValue === "" || undefined) {
        displayCourse = "none";
      } else {
        displayCourse = "block";
        this.setState({ options: [...arr] });
      }
    });
  };

  addPeople = (e) => {
    e.preventDefault();
    const { name, email, department, course } = e.target.elements;
    const person = {
      name: name.value,
      email: email.value,
      department: department.value,
      course: course.value,
    };
    this.setState({ personInfo: [...this.state.personInfo, person] }, () =>
      console.log(this.state.personInfo)
    );
  };

  render() {
    const {
      name,
      email,
      errorName,
      errorEmail,
      courseValue,
      options,
      errorCourse,
      personInfo,
    } = this.state;
    const isValid = errorName === "" && errorEmail === "" && courseValue !== "";

    return (
      <>
        <form onSubmit={(e) => this.addPeople(e)}>
          <h1>React Form</h1>
          <hr></hr>
          <h3>Sign Up sheet</h3>
          <label>Name</label>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={this.handelChange}
            required
          ></input>
          <div className="error-message">{errorName}</div>
          <label>Email</label>
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={email}
            onChange={this.handelChange}
            required
          ></input>
          <div className="error-message">{errorEmail}</div>
          <div>
            <label>Department</label>
            <select
              onChange={this.handelChange}
              value={courseValue}
              onInput={(e) => this.fillOptions(e.target.value)}
              name="department"
            >
              <option></option>
              {Object.keys(this.props.course).map((item) => (
                <option>{item}</option>
              ))}
            </select>
            <div className="error-message">{errorCourse}</div>
          </div>
          <div style={{ display: displayCourse }}>
            <label>Course</label>
            <select name="course" onChange={this.handelChange}>
              {options.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </div>
          <input
            type="submit"
            value="submitForm"
            disabled={!isValid || defaultError}
          ></input>
        </form>
        <div>
          {personInfo.map((item) => (
            <ul>
              <li key={item}> {item.name} </li>
              <li key={item}> {item.email} </li>
              <li key={item}> {item.department} </li>
              <li key={item}> {item.course} </li>
            </ul>
          ))}
        </div>
      </>
    );
  }
}
export default Form;
