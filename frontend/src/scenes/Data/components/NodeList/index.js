import React from 'react';
import {fetchNodes} from '../../../../actions/nodes';
import {connect} from 'react-redux';

class NodeList extends React.Component {

  componentDidMount = () => {
    this.props.fetchNodes();
  }

  render() {
    return (
      <ul>
        {
          this.props.nodes.map( (node) =>
            <li key={node.id}>{node.name} | {node.text}</li>
          )
        }
      </ul>
    );
  }

}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchNodes: () => {
      dispatch(fetchNodes());
    },
  }
}

const mapStateToProps = (state) => {
  return {
    nodes : state.nodes
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NodeList);