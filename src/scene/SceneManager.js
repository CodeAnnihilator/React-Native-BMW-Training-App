import * as THREE from 'three';
import OBJLoader from 'three-obj-loader';

import GeneralLights from './GeneralLights';
import GeneralObjects from './GeneralObjects';
import Composer from './Composer';

import sideButton from '../resources/objects/sideButton.obj';

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
				const renderer = buildRender(dimensions);
				const meshes = await loadObjMeshes();

				const camera = buildCamera(dimensions);
				camera.position.z = 10;

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
					const urls = [sideButton];
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
			this.composer.compose();
		}
	}

	return SceneManager;
})()