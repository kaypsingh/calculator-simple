import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = ({
      value1: "",
      value2: "",
      result: ""
    })

    //this.plusfunction = this.plusfunction.bind(this);
  }

  change(e) {
    console.log("first")
    let ab = Number(e.target.value)
    console.log(ab);
    this.setState({
      value1: ab
    });
  }

  schange(e) {
    console.log("second")
    let xy = Number(e.target.value)
    console.log(xy);
    this.setState({
      value2: xy
    });
  }

  plusfunction = () => {
    console.log("plus");
    let x = this.state.value1 + this.state.value2;
    console.log(x);
    this.setState({ result: x });

  }

  minusfunction = () => {
    console.log("plus");
    let y = this.state.value1 - this.state.value2;
    console.log(y);
    this.setState({ result: y });

  }

  multiplyfunction = () => {
    console.log("plus");
    let z = this.state.value1 * this.state.value2;
    console.log(z);
    this.setState({ result: z });

  }

  dividefunction = () => {
    console.log("plus");
    let d = this.state.value1 / this.state.value2;
    console.log(d);
    this.setState({ result: d });

  }

  render() {

    return (

      <div className="back">
        <h1>calculator</h1>

        <div className="first"> <input type="text" placeholder="first number" onChange={(e) => { this.change(e) }}></input> </div>
        <div className="second"> <input type="text" placeholder="second number" onChange={(e) => { this.schange(e) }}></input> </div>

        <button type="button" className="btn btn-primary btn-lg butt" onClick={this.plusfunction}>+</button>
        <button type="button" className="btn btn-danger btn-lg butt" onClick={this.minusfunction} >-</button>
        <button type="button" className="btn btn-success btn-lg butt" onClick={this.multiplyfunction} >*</button>
        <button type="button" className="btn btn-warning btn-lg butt" onClick={this.dividefunction}>/</button>

        <h2>output: {this.state.result} </h2>


      </div>

    )
  }

}
export default App;