import * as THREE from 'three';
import OBJLoader from 'three-obj-loader';
import OrbitControls from 'three-orbitcontrols';

import GeneralLights from './GeneralLights';
import GeneralObjects from './GeneralObjects';
import Composer from './Composer';

import sideButton from '../resources/objects/sideButton.obj';
import mainButton from '../resources/objects/mainButton.obj';
import leftButtonText from '../resources/objects/leftButtonText.obj';
import rightButtonText from '../resources/objects/rightButtonText.obj';
import topButtonText from '../resources/objects/topButtonText.obj';
import downButtonText from '../resources/objects/downButtonText.obj';
import mainButtonText from '../resources/objects/mainButtonText.obj';

OBJLoader(THREE);

export default (function SceneManager () {

	class SceneManager {

		constructor(node) {

			return (async () => {

				const dimensions = {
					width: window.innerWidth,
					height: window.innerHeight,
				}

				const scene = buildScene();
				scene.rotation.z = -(Math.PI / 4)
				const renderer = buildRender(dimensions);
				const meshes = await loadObjMeshes();

				const camera = buildCamera(dimensions);
				camera.lookAt(scene.position)
				camera.position.y = -5;
				camera.position.z = 12;

				this.controls = new OrbitControls(camera, renderer.domElement);
				this.controls.update();

				const sceneObjects = {
					gObjs: new GeneralObjects(scene, meshes),
					gLights: new GeneralLights(scene),
				}
	
				function buildScene() {
					const scene = new THREE.Scene();
					return scene;
				}
			
				function buildRender({width, height}) {
					const DPR = (window.devicePixelRatio) ? window.devicePixelRatio : 1;
					const renderer = new THREE.WebGLRenderer({
						antialias: false,
						alpha: true
					});
					renderer.setPixelRatio(DPR);
					renderer.setSize(width, height);
					return renderer;
				}
			
				function buildCamera ({width, height}) {
					const aspectRatio = width / height;
					const fieldOfView = 60;
					const nearPlane = 1;
					const farPlane = 100; 
					const camera = new THREE.PerspectiveCamera(fieldOfView, aspectRatio, nearPlane, farPlane);
					return camera;
				}
	
				async function loadObjMeshes() {
					const self = THREE;
					const urls = [
						sideButton,
						mainButton,
						leftButtonText,
						rightButtonText,
						topButtonText,
						downButtonText,
						mainButtonText,
					];
					const loadedObjMeshes = [];
					var objLoader = new self.OBJLoader();
					for (let i = 0; i < urls.length; i++) {
						await new Promise(async (resolve, reject) => {
							objLoader.load(urls[i], function(mesh) {
								loadedObjMeshes.push(mesh)
								resolve()
							})
						})
					}
					return loadedObjMeshes;
				}

				this.composer = new Composer(scene, camera, renderer, dimensions, sceneObjects.gObjs);
				this.composer.compose();
 
				node.appendChild(renderer.domElement);

				return this;
			})();
		}
	
		
		update = function() {
			// const elapsedTime = clock.getElapsedTime();
			// for (let i = 0; i < this.sceneObjects.length; i++) {
			// 	this.sceneObjects[i].update(elapsedTime)
			// }
			this.controls.update();
			this.composer.compose();
		}
	}

	return SceneManager;
})()