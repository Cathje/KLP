import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

// Import Components
import MethodList from '../../components/Method/MethodList';

// Import Actions
import { fetchMethods } from '../../modules/Method/MethodActions';

// Import Selectors
import { getMethods } from '../../modules/Method/MethodReducer';

class MethodListPage extends Component {
  componentDidMount() {
    this.props.dispatch(fetchMethods());
  }

  render() {
    return (
      <div>
        <MethodList methods={this.props.methods} />
      </div>
    );
  }
}

// Actions required to provide data for this component to render in sever side.
MethodListPage.need = [() => { return fetchMethods(); }];

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    methods: getMethods(state) || [],
  };
}

MethodListPage.propTypes = {
  methods: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
  })).isRequired,
  dispatch: PropTypes.func.isRequired,
};

MethodListPage.contextTypes = {
  router: React.PropTypes.object,
};

export default connect(mapStateToProps)(MethodListPage);
