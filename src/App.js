import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import React, { Component } from 'react';
import Counters from './components/counters';

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 6 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };
  constructor(props){//we should pass props  as parametres and the constructor of base classe (super)
    super(props);
    console.log('App-Contructor',this.props);
    //this.state=this.props.chiklwa;//we set state directly in constructor
  }
  componentDidMount(){
    //ajax call to get state from server
    //exemple this.setState({movie});
    console.log('App-mounted')
  }

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter }; //clone the object that we wanna modify
    counters[index].value++;
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };

  render(){
    console.log("Rendered");

    return(
      <React.Fragment>
        <Navbar totalCounters={this.state.counters.filter(c=>c.value>0).length}/>
        <Counters counters={this.state.counters} onIncrement={this.handleIncrement} onReset={this.handleReset} onDelete={this.handleDelete} />
      </React.Fragment>
      

    );
  }
   
}

export default App;
