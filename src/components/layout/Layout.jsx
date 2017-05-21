/**
 * src/components/layout/Layout.js
 */

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actionCreators from "../../actions";
import Header from './header/Header';

export class Layout extends Component {
  componentDidMount() {
    const someSampleInfoThatShoudBeDispatchedToReducer = {
      firstName: 'John',
      lasName: 'Snow',
      status: 'Bastard',
    };

    this.props.actions.showSampleAction(someSampleInfoThatShoudBeDispatchedToReducer);
  }

  render() {
    return (
      <div>
        <Header />
        { this.props.children }
      </div>
    );
  }
};

/**
 * @name mapDispatchToProps
 * @param {Function} dispatch - method for dispatching actions to redux reducers
 * @returns {Object} - with dispatch method and actions
 */
function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    actions: bindActionCreators(actionCreators, dispatch),
  };
}

/**
 * @name mapStateToProps
 * @param {Function} state - which by default is equal to initialState object
 * @returns {Object} - state
 */
function mapStateToProps(state) {
  return {
    state,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
