import React from 'react';

import SceneManager from './SceneManager';

import styles from './app.module.scss';

export default class App extends React.Component {

  componentDidMount() {
    const sceneManager = new SceneManager(this.mount);
    console.log(sceneManager)
  }

	render = () => (
    <div
      style={{flex: 1}}
      className={styles.container}
      ref={ref => (this.mount = ref)}
    />
	)
}