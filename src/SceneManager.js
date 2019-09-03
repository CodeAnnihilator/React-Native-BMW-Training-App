import * as THREE from 'three';

import OBJLoader from 'three-obj-loader';

OBJLoader(THREE);

export default (function SceneManager () {

	let privateProps = new WeakMap();

	class SceneManager {

		constructor(node) {

			return (async () => {
				const screenDimensions = {
					width: window.innerWidth,
					height: window.innerHeight,
				}
	
				privateProps.set(this, {
					node,
					clock: new THREE.Clock(),
					scene: buildScene(),
					renderer: buildRender(screenDimensions),
					camera: buildCamera(screenDimensions),
					meshes: await loadObjMeshes()
				})
			
				const {camera, renderer, scene, meshes} = privateProps.get(this);
	
				this.sceneObjects = createSceneObjects(privateProps.get(this).scene);
	
				function buildScene() {
					const scene = new THREE.Scene();
					return scene;
				}
			
				function buildRender({width, height}) {
					const renderer = new THREE.WebGLRenderer({antialias: true, alpha: true}); 
					const DPR = (window.devicePixelRatio) ? window.devicePixelRatio : 1;
					renderer.setPixelRatio(DPR);
					renderer.setSize(width, height);
					renderer.gammaInput = true;
					renderer.gammaOutput = true;
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
					const urls = ['./Objects/sideButton'];
					const loadedObjMeshes = [];
					var objLoader = new self.OBJLoader();
					for (let i = 0; i < urls.length; i++) {
						await new Promise((resolve, reject) => {
							objLoader.load(require(`${urls[i]}.obj`), function(mesh) {
								loadedObjMeshes.push(mesh)
								resolve()
							})
						})
					}
					return loadedObjMeshes;
				}

				const leftSideButton = meshes[0].clone();
				scene.add(leftSideButton)

				function createSceneObjects(scene) {
					const sceneObjects = [
					//	new SideButton(scene)
					];
					return sceneObjects;
				}
				camera.position.z = 10;
				node.appendChild(renderer.domElement);
				return this;
			})();
		}
	
		update = function() {
			const {clock, renderer, camera, scene} = privateProps.get(this);
			const elapsedTime = clock.getElapsedTime();
			for (let i = 0; i < this.sceneObjects.length; i++) {
				this.sceneObjects[i].update(elapsedTime)
			}
			renderer.render(scene, camera)
		}
	}

	return SceneManager;
})()