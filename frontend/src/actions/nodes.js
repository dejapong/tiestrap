export const fetchNodes = () => {

  return (dispatch) => {

    let headers = { "Content-Type": "application/json" };

    return fetch("/api/nodes/", {headers, })
      .then(res => res.json())
      .then(nodes => {
        return dispatch({
          type: 'FETCH_NODES',
          nodes
        })
      });
  }
}

export const addNode = text => {
  return dispatch => {
    let headers = {"Content-Type": "application/json"};
    let body = JSON.stringify({text, });
    return fetch("/api/nodes/", {headers, method: "POST", body})
      .then(res => res.json())
      .then(node => {
        return dispatch({
          type: 'ADD_NOTE',
          node
        })
      })
  }
}

export const updateNode = (index, text) => {
  return (dispatch, getState) => {

    let headers = {"Content-Type": "application/json"};
    let body = JSON.stringify({text, });
    let nodeId = getState().nodes[index].id;

    return fetch(`/api/nodes/${nodeId}/`, {headers, method: "PUT", body})
      .then(res => res.json())
      .then(node => {
        return dispatch({
          type: 'UPDATE_NOTE',
          node,
          index
        })
      })
  }
}