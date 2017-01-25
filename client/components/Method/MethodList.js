import React, { PropTypes } from 'react';

function MethodList(props) {
  return (
    <div className="listView">
      {
        props.methods.map((method, index) => (
          <div key={index}>{method.name}</div>
        ))
      }
    </div>
  );
}

MethodList.propTypes = {
  methods: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
  })).isRequired,
};

export default MethodList;
