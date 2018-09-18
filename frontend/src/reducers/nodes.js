
const initialState = [];

const nodesReducer = (state = initialState, action) => {
  var updatedNodes;
  switch (action.type) {
    case 'FETCH_NODES':
      return action.nodes;
    case 'ADD_NODES':
      return [...state, action.node];
    case 'UPDATE_NODE':
      updatedNodes = state.slice();
      updatedNodes[action.index].text = action.text;
      return updatedNodes;
    case 'DELETE_NODE':
      updatedNodes = state.slice();
      updatedNodes.splice(action.index, 1);
      return updatedNodes;
    default:
      return state;
  }
};

export default nodesReducer;
