// add an on/of switch that plays a old crappy machine sound when turning on. have the styling of the change to a glov when on
// don't allow the buttons to work when the machine is off
// add the rest of the keyboard. essentially make several instruments with the choice being a dropdown or something like that


import './PercussionBox.css';
import React, { Component } from 'react';
import peptidePic from './pictures/peptide.png';
import percussion1 from "./audio-files/percussion1.mp3";
import percussion2 from "./audio-files/percussion2.mp3";
import percussion3 from "./audio-files/percussion3.mp3";
import percussion4 from "./audio-files/percussion4.mp3";
import percussion5 from "./audio-files/percussion5.mp3";
import percussion6 from "./audio-files/percussion6.wav";
import percussion7 from "./audio-files/percussion7.wav";
import percussion8 from "./audio-files/percussion8.wav";
import percussion9 from "./audio-files/percussion9.mp3";
class PercussionBox extends Component {
  constructor(props){
    super(props);
    this.state = { 
      filePlaying: '',
      power: 'OFF',
      backgroundColor: 'red'
   };
  }

componentDidMount() {
  document.addEventListener("keydown", this.handleKeyPress)
 }
 componentWillUnmount() {
   document.removeEventListener("keydown", this.handleKeyPress)
 }

handleClick = (e) =>{
  if(this.state.power === 'ON'){
  console.log(e.target.innerHTML)
  // connects the text of the clicked button to its audio file, then plays it
  document.getElementById(e.target.innerHTML.slice(0,1)).play() 
  // changes the screen's readout on what file is playing 
this.setState({
  filePlaying: e.target.value
})
  }
};

handleKeyPress = (e) => {
if(this.state.power === 'ON'){
  document.getElementById(e.key.toUpperCase()).play();
  this.setState({
    filePlaying: document.getElementById(e.key.toUpperCase()).parentNode.value
  })
}
}
power = () =>{
  if(this.state.power === 'OFF'){
    this.setState({
      power: 'ON',
      filePlaying: 'Select a sound',
      backgroundColor: 'green'
    })
  }
  else if(this.state.power === 'ON'){
    this.setState({
      power: 'OFF',
      filePlaying: '',
      backgroundColor: 'red'
    })
  }
}
  render() { 
    return (<>
<main className='environment'>
<h2>Percussion Sounds</h2>
<img src={peptidePic} alt='https://img.icons8.com/sf-regular/344/peptide.png' className='peptide'/>
<div className="container">
  <div className='power'>Power Switch:
    <button className='powerSwitch' onClick={this.power}>{this.state.power}</button>
    <div className='powerLight' style={{backgroundColor: this.state.backgroundColor}}></div>
  </div>
<div className="display">
    <section id="toggle-area">
      <div id='display' value="testing">{this.state.filePlaying}</div>
    </section>
  </div>
  <section id="drum-machine">
  <div className='firstRow'>
    <button onClick={this.handleClick} className ="drum-pad col1" id="q-audio" value = "Percussion 1">Q<audio src= {percussion1} className ="clip" id="Q"></audio></button>
    <button onClick={this.handleClick} className ="drum-pad col2" id="w-audio" value = "Percussion 2">W<audio src= {percussion2} className ="clip" id="W"></audio></button>
    <button onClick={this.handleClick} className ="drum-pad col3" id="e-audio" value = "Percussion 3">E<audio src= {percussion3} className ="clip" id="E"></audio></button>
  </div>
  <div className='secondRow'>
    <button onClick={this.handleClick} className ="drum-pad col1" id="a-audio" value = "Percussion 4">A<audio src= {percussion4} className ="clip" id="A"></audio></button>
    <button onClick={this.handleClick} className ="drum-pad col2" id="s-audio" value = "Percussion 5">S<audio src= {percussion5} className ="clip" id="S"></audio></button>
    <button onClick={this.handleClick} className ="drum-pad col3" id="d-audio" value = "Percussion 6">D<audio src= {percussion6} className ="clip" id="D"></audio></button>
  </div>
  <div className='thirdRow'>
    <button onClick={this.handleClick} className ="drum-pad col1" id="z-audio" value = "Percussion 7">Z<audio src= {percussion7} className ="clip" id="Z"></audio></button>
    <button onClick={this.handleClick} className ="drum-pad col2" id="x-audio" value = "Percussion 8">X<audio src= {percussion8} className ="clip" id="X"></audio></button>
    <button onClick={this.handleClick} className ="drum-pad col3" id="c-audio" value = "Percussion 9">C<audio src= {percussion9} className ="clip" id="C"></audio></button>
  </div>
  </section>
  </div>
  <footer>Audio files from <a href="https://www.zapsplat.com">Zapsplat</a> and <a href="https://freesound.org">freesound</a></footer>
  </main>
    </>);
  }
  
}

export default PercussionBox;