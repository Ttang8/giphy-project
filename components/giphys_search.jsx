import React from 'react';

import GiphysIndex from './giphys_index';

class GiphysSearch extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      searchTerm: "puppies"
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchSearchGiphys('puppies');
  }

  render () {
    return (
      <div className="container">
        <form>
          <label>Search:
            <input type="text" value={this.state.searchTerm} onChange={this.handleChange}></input>
          </label>
          <button type="submit" onClick={this.handleClick}>Submit</button>
        </form>
        <GiphysIndex props={this.props}/>
      </div>
    );
  }

  handleChange (event) {
    this.setState({searchTerm: event.target.value});
  }

  handleClick (event) {
    event.preventDefault();
    this.props.fetchSearchGiphys(this.state.searchTerm);
  }
}

export default GiphysSearch;
