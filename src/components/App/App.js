import React from 'react';

import SceneManager from '../../scene/SceneManager';

import RightArrow from '../../resources/icons/right_arrow.svg';
import bmw1Image from '../../resources/images/bmw1.jpg';

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
    <div className={styles.wrapper}>
      <div
        className={styles.scene}
        ref={ref => (this.mount = ref)}
      />
      <img className={styles.carImage} src={bmw1Image} alt='' />
      <div className={styles.container} />
      <div className={styles.textWrapper}>
        <div className={styles.textHeader}>brand identity.</div>
        <div className={styles.textDesc}>
          <img className={styles.arrow} src={RightArrow} alt='' />
          <span>Discover the brand essence JOY.</span>
        </div>
      </div>
      <div className={styles.loaderWrapper}>
        <div className={styles.loaderElement}>
          <div style={{width: '0%'}} className={styles.loaderValue} />
        </div>
        <div className={styles.loaderElement}>
          <div style={{width: '40%'}} className={styles.loaderValue} />
        </div>
        <div className={styles.loaderElement}>
          <div style={{width: '0%'}} className={styles.loaderValue} />
        </div>
        <div className={styles.loaderElement}>
          <div style={{width: '0%'}} className={styles.loaderValue} />
        </div>
      </div>
    </div>
	)
}