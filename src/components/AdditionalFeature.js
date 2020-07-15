import React from 'react';
import { connect } from "react-redux"; // Higher-Order Component (HOC)

import { addFeature } from "../actions/carfeatureActions";


const AdditionalFeature = props => {

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={() => props.addFeature(props.feature)}>Add</button>

      {/* <button className="button" onClick={() => {console.log('Add clicked');props.addFeature()}}>Add</button> */}
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

// const mapStateToProps = state => {
//   return {
//     additionalPrice: state.additionalPrice,
//     car: state.car,
//     additionalFeatures: state.additionalFeatures
//   };
// };

export default connect(null,
  { addFeature } // action creators (functions that return action objects)
)(AdditionalFeature); // function currying
