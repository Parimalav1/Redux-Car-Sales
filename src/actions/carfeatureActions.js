export const CLEARALL_FEATURES = "CLEARALL_FEATURES";
export const clearallFeatures = () => {
  // action object (the returned object)
  return { type: CLEARALL_FEATURES };
};
// action creator(function), returns an object, type.
// toggleEditing(); will evaluate down to { type: TOGGLE_EDITING }

// 2nd event - click the button, update title state with input text, toggle editing state to false
export const ADD_FEATURE = "ADD_FEATURE";
export const addFeature = (newFeature) => {
    // console.log('addFeature called: ' + JSON.stringify(newFeature));
    return { type: ADD_FEATURE, payload: newFeature };
};

export const REMOVE_FEATURE = 'REMOVE_FEATURE';
export const removeFeature = (featurebeRemoved) => {
    return { type: REMOVE_FEATURE, payload: featurebeRemoved};
}
