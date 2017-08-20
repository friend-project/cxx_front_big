import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import classnames from 'classnames';

import Head from './../head';
import Banner from './../banner';

import s from './home';

class Home extends Component {
  shouldComponentUpdate(nextProps) {
    return true;
  }
  render() {
    return (
      <div>
        <Head />
        <Banner />
        <ul className={s.stat}>
          <li>
            <em>1000</em>
            <span>个寺庙拍摄</span>
          </li>
          <li>
            <em>15000</em>
            <span>平米壁画拍摄</span>
          </li>
          <li>
            <em>5000</em>
            <span>尊彩塑拍摄</span>
          </li>
        </ul>
        <div
          className={classnames(s.entry, s.exhibition)}
        >
          <em>山西展览</em>
          <span>零距离的将壁画艺术展现给公众</span>
        </div>
        <div
          className={classnames(s.entry, s.about)}
        >
          <em>关于我们</em>
          <span>不为梦想 只为传承</span>
        </div>
      </div>
    );
  }
}
Home.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps)(Home);

