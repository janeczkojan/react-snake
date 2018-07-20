import React, { Component, Fragment } from 'react';
import { func, string, bool } from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import AppLoading from './AppLoading';
import Header from './Header';
import Content from './Content';
import * as appActions from '../store/actions/app';


const AppStyle = styled.div`
  min-height: 100vh;
`;


class App extends Component {
  
  static propTypes = {
    env: string,
    name: string,
    version: string,
    initialized: bool.isRequired,

    init: func.isRequired
  }

  static mapState = (state, props) => ({
    env: state.app.env,
    name: state.app.name,
    version: state.app.version,
    initialized: state.app.initialized
  })

  static mapDispatch = (dispatch) => ({
    init: () => dispatch(appActions.initApp())
  })


  componentWillMount() {
    this.props.init();
  }

  render() {
    const { env, name, version, initialized } = this.props;

    return (
      <AppStyle>
        {!initialized ? (
          <AppLoading visible={true} />
        ) : (
          <Fragment>
            <Header 
              env={env}
              app={name}
              version={version} 
            />

            <Content />
          </Fragment>
        )}
      </AppStyle>
    );
  }
}


export default connect(
  App.mapState,
  App.mapDispatch
)(App);
