import React from 'react';

import GiphysIndexItem from './giphys_index_item';

const GiphysIndex = (props) => {
  if (props.props.giphys){
    return(
      <ul className="gif">
        {props.props.giphys.map((giphy, idx) => <GiphysIndexItem key={idx} giphy={giphy}/>)}
      </ul>
    );
  } else {
    return (
      <ul></ul>
    );
  }
};

export default GiphysIndex;
