import React from 'react';

import SceneManager from '../../scene/SceneManager';

import styles from './app.module.scss';

export default class App extends React.Component {

  async componentDidMount() {
    const sceneManager = await new SceneManager(this.mount);
    function render() {
      requestAnimationFrame(render);
      sceneManager.update();
    }
    render()
  }

	render = () => (
    <div
      style={{flex: 1}}
      className={styles.container}
      ref={ref => (this.mount = ref)}
    />
	)
}