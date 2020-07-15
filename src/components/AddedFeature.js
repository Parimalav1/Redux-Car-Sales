import React from 'react';
import { connect } from "react-redux"; // Higher-Order Component (HOC)
import { removeFeature, clearallFeatures } from '../actions/carfeatureActions';

const AddedFeature = props => {
  

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={() => props.removeFeature(props.feature)}>X</button>
      {props.feature.name}
    </li>
  );
};

export default connect
(null, {removeFeature, clearallFeatures})
(AddedFeature);