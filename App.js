import React, {Component} from "react"
import RandomNumber from "./RandomNumber"

// https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch
// https://swapi.co/
// https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261

class App extends Component {
    constructor() {
        super()
        this.state = {person:"no one"}
         this.setState = this.setState.bind(this);
    }
    

    
    componentDidMount() {
        fetch(`https://swapi.dev/api/people/${RandomNumber(100)}`)
            .then(response => response.json())
            .then(data => {console.log(data)
        this.setState(prevState =>{
            return {person : data}
        })
    })
    }
    

    render() {
        return (
            <div>
              <p> Name: {this.state.person.name}</p>
                <p> Height: {this.state.person.height}</p>
                  <p> Hair: {this.state.person.hair_color}</p>
                    <p> Eye color: {this.state.person.eye_color}</p>
            </div>
        )
    }
}

export default App
