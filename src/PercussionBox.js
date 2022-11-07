import './App.css';
import React, { Component } from 'react';
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
      filePlaying: 'Select a sound',
   };
  }

componentDidMount() {
  document.addEventListener("keydown", this.handleKeyPress)
 }
 componentWillUnmount() {
   document.removeEventListener("keydown", this.handleKeyPress)
 }

handleClick = (e) =>{
  console.log(e.target.innerHTML)
  // connects the text of the clicked button to its audio file, then plays it
  document.getElementById(e.target.innerHTML.slice(0,1)).play() 
  // changes the screen's readout on what file is playing 
this.setState({
  filePlaying: e.target.value
})
};

handleKeyPress = (e) => {

  document.getElementById(e.key.toUpperCase()).play();
  this.setState({
    filePlaying: document.getElementById(e.key.toUpperCase()).parentNode.value
  })

}
  render() { 
    return (<>
      <h1>Percussion Sounds</h1>
      <img src="https://img.icons8.com/sf-regular/344/peptide.png" alt='https://www.google.com/' />
<main>
<div id="container">

  <section id="drum-machine">
  <div>
    <button onClick={this.handleClick} className ="drum-pad" id="q-audio" value = "percussion 1">Q<audio src= {percussion1} className ="clip" id="Q"></audio></button>
    <button onClick={this.handleClick} className ="drum-pad" id="w-audio" value = "percussion 2">W<audio src= {percussion2} className ="clip" id="W"></audio></button>
    <button onClick={this.handleClick} className ="drum-pad" id="e-audio" value = "percussion 3">E<audio src= {percussion3} className ="clip" id="E"></audio></button>
  </div>
  <div>
    <button onClick={this.handleClick} className ="drum-pad" id="a-audio" value = "percussion 4">A<audio src= {percussion4} className ="clip" id="A"></audio></button>
    <button onClick={this.handleClick} className ="drum-pad" id="s-audio" value = "percussion 5">S<audio src= {percussion5} className ="clip" id="S"></audio></button>
    <button onClick={this.handleClick} className ="drum-pad" id="d-audio" value = "percussion 6">D<audio src= {percussion6} className ="clip" id="D"></audio></button>
  </div>
  <div>
    <button onClick={this.handleClick} className ="drum-pad" id="z-audio" value = "percussion 7">Z<audio src= {percussion7} className ="clip" id="Z"></audio></button>
    <button onClick={this.handleClick} className ="drum-pad" id="x-audio" value = "percussion 8">X<audio src= {percussion8} className ="clip" id="X"></audio></button>
    <button onClick={this.handleClick} className ="drum-pad" id="c-audio" value = "percussion 9">C<audio src= {percussion9} className ="clip" id="C"></audio></button>
  </div>
  </section>
  <div id="display-container">
    <section id="toggle-area">
      <h3 id='display' value="testing">{this.state.filePlaying}</h3>
    </section>
  </div>
  </div>
  <footer>Audio files from <a href="https://www.zapsplat.com">Zapsplat</a> and <a href="https://freesound.org">freesound</a></footer>
  </main>

    </>);
  }
  
}

export default PercussionBox;