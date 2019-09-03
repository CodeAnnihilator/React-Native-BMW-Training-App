import * as THREE from 'three';

export default (function SceneManager () {

	let privateProps = new WeakMap();

	class SceneManager {

		constructor(node) {

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
				sceneObjects: createSceneObjects(this.scene),
			})
		
			function buildScene() {
				const scene = new THREE.Scene();
				scene.background = new THREE.Color('#000');
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
		
			function createSceneObjects(scene) {
				const sceneObjects = [];
				return sceneObjects;
			}

			privateProps.get(this).node.appendChild(privateProps.get(this).renderer.domElement);
		}
	
		update = function() {
			const {clock, sceneObjects, renderer} = privateProps.get(this);
			const elapsedTime = clock.getElapsedTime();
			for (let i = 0; i < sceneObjects.length; i++) {
				sceneObjects[i].update(elapsedTime)
			}
			renderer.render(this.scene, this.camera)
		}
	}

	return SceneManager;
})()