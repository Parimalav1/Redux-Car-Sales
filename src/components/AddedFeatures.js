import React from 'react';
import AddedFeature from './AddedFeature';
import { connect } from "react-redux"; // Higher-Order Component (HOC)
import { clearallFeatures } from '../actions/carfeatureActions';


const AddedFeatures = props => {

  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.car.features.length ? (
        <ol type="1">
          {props.car.features.map(item => (
            <AddedFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
       <button className='button' onClick={() => props.clearallFeatures()}>CLEAR</button>
    </div>
  );
};

export default connect
(null, {clearallFeatures})
(AddedFeatures);
// export default AddedFeatures;
