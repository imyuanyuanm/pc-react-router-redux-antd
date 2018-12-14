import React, { Component } from 'react';
import logo from '../../assets/logo.svg';
import { Button } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import * as exampleActions from '../../reducers/example';
import './Example.scss';

@connect(
  state => ({
    exampleData: state.exampleData
  }),
  dispatch => bindActionCreators({ ...exampleActions }, dispatch)
)
// @Form.create()
export class Example extends Component {
  constructor(props) {
    super();
  }
  UNSAFE_componentWillMount() {
    this.props.saveUserData({ name: 'UNSAFE_componentWillMount' });
    setTimeout(() => {
      console.log(this.props.exampleData.userData);
    }, 0);
  }
  render() {
    return (
      <div className="Example">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <Link to="/Example2" className="pure-menu-link"><Button>this is Example, click to Example2</Button></Link>
          </p>
        </header>xsxs
      </div>
    );
  }
}

