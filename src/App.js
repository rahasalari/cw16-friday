import React, { Component } from 'react';
import Form from './Components/Form';

const COURSES = {core: ["java scripting","git-it","Scope Chains & Closures","ElementaryElectron",
"learn you node","How to npm","stream-adventure","how-to-markdown"], electives: [
"Functional Javascript", "Level Me Up Scotty!", "ExpressWorks", "Make Me Hapi", "Promise It Won't Hurt",
"Async You", "NodeBot Workshop", "Going Native", "Planet Proto", "WebGL Workshop", 
"ESNext Generation", "Test Anything", "Tower of babel", "learn you mongo",
"regex-adventure", "learn-sass", "Pattern Lab Workshop", "learn you bash", "Currying in JavaScript",
"Shader School", "Byte wiser", "Bug Clinic", "Browserify Adventure", "Intro toWebGL", 
"Count to 6", "Kick off Koa", "Lololo Dash", "learn you couchdb", "learn uv", "Learn Generators",
"learn you react", "perf school", "Web Audio School", "torrential", "Thinking in React", 
"Post-mortem debugging", "Seneca in practice", "LESS is more" ],};
class App extends Component {
  constructor(){
    super()
    this.state = COURSES
  }
  render() {
    return (
      <>
      <Form course = {this.state}/>
      </>
    );
  }
}

export default App;