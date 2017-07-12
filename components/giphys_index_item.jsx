import React from 'react';

const GiphysIndexItem = (props) => {
  console.log(props);
  return(
    <li key={props.key}>
      <img src={props.giphy.images.fixed_height.url} />
    </li>
  );
};

export default GiphysIndexItem;
