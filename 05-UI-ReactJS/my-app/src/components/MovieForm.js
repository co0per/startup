import React, { Component } from 'react';

import './MovieForm.css';
import Movie from './../script/Movie';

class MovieForm extends Component {

  state = {
    title: '',
    year: '',
    duration: ''
  }

  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    let new_mov = new Movie(this.state.title, this.state.year, this.state.duration);
    console.log(new_mov);
  };

  render() {
    return (
      <form>
        <h2 className="center_text">Insert movie</h2>  
        <label className="center_text">Title</label>
        <input 
          className="center"
          type="text" 
          name="title" 
          value={this.state.title} 
          onChange={e => this.change(e)} 
          />
        <label className="center_text">Year</label>
        <input 
          className="center"
          type="text" 
          name="year" 
          value={this.state.year} 
          onChange={e => this.change(e)} 
          /> 
        <label className="center_text">Duration</label>
        <input 
          className="center"
          type="text" 
          name="duration" 
          value={this.state.duration} 
          onChange={e => this.change(e)} 
          />
        <button className="center" onClick={e => this.onSubmit(e)}> Create </button>
      </form>  
    );
  }

}

export default MovieForm;