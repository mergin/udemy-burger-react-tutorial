import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {

    state = {
        persons: [
            {
                name: 'Marco',
                age: 28
            },
            {
                name: 'Polo',
                age: 29
            },
            {
                name: 'Aldebarán',
                age: 26
            }
        ],
        showPersons: false
    }

    switchNameHandler = (newName) => {
        console.log('Was clicled!');
        this.setState({
            persons: [
                {
                    name: 'Marco',
                    age: 28
                },
                {
                    name: 'Polo',
                    age: 29
                },
                {
                    name: newName,
                    age: 26
                }
            ]
        })
    }

    nameChangedHandler = (event) => {
        this.setState({
            persons: [
                {
                    name: 'Marco',
                    age: 28
                },
                {
                    name: event.target.value,
                    age: 29
                },
                {
                    name: 'Aldebarán',
                    age: 26
                }
            ]
        })
    }

    // togglePersonsHandler = () => {
    //     this.
    // }

    render() {

        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

        return (
            <div className="App">
                <h1>React App</h1>
                <p>This is working</p>
                <button
                    style={style}
                    onClick={this.togglePersonsHandler}>
                    Switch Name
                </button>
                {
                    this.state.showPersons ? <div >
                        <Person
                            name={this.state.persons[0].name}
                            age={this.state.persons[0].age} />
                        <Person
                            name={this.state.persons[1].name}
                            age={this.state.persons[1].age}
                            // recommended
                            click={this.switchNameHandler.bind(this, 'Milo')}
                            changed={this.nameChangedHandler} />
                        <Person
                            name={this.state.persons[2].name}
                            age={this.state.persons[2].age}>
                            Hobbies: eating
                    </Person>
                    </div> : null
                }
            </div>
        );
    }
}

export default App;
