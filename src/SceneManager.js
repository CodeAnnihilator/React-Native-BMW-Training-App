import * as THREE from 'three';

import OBJLoader from 'three-obj-loader';
import { RenderPass, EffectComposer, OutlinePass } from "./ddd";

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
					const DPR = (window.devicePixelRatio) ? window.devicePixelRatio : 1;
					const renderer = new THREE.WebGLRenderer( {
						antialias: false,
						alpha: true
					} );
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
				var material = new THREE.MeshLambertMaterial( { color: 'white', transparent: true, depthWrite: false } );
				this.mesh1 = new THREE.Mesh(leftSideButton.children[0].geometry, material );
				this.mesh1.rotation.x = 0.9
				scene.add(this.mesh1)

				var hemiLight = new THREE.HemisphereLight( 0xffffff, 0xffffff, 0.7 );
				hemiLight.position.set( 0, 500, 10 );
				scene.add( hemiLight );

				var dirLight = new THREE.DirectionalLight( 0xffffff, 1 );
				dirLight.position.set( -1, 0.75, 1 );
				dirLight.position.multiplyScalar( 50);
				dirLight.name = "dirlight";
				// dirLight.shadowCameraVisible = true;

				scene.add( dirLight );

				function createSceneObjects(scene) {
					const sceneObjects = [
					//	new SideButton(scene)
					];
					return sceneObjects;
				}
				camera.position.z = 10;
				node.appendChild(renderer.domElement);

				var geometry = new THREE.SphereBufferGeometry( 2, 20, 20 );
				var material = new THREE.MeshLambertMaterial();
				material.color.setHSL( Math.random(), 1.0, 0.3 );
				var mesh = new THREE.Mesh( geometry, material );

				//scene.add(mesh)

				this.compose = new EffectComposer(renderer);
				var selectedObjects = [this.mesh1]
				var renderPass = new RenderPass(scene, camera);
				var outlinePass = new OutlinePass(new THREE.Vector2(window.innerWidth, window.innerHeight), scene, camera, selectedObjects);
				outlinePass.renderToScreen = true;

				this.compose.addPass(renderPass);
				this.compose.addPass(outlinePass);
				var params = {
						edgeStrength: 2,
						edgeGlow: 1,
						edgeThickness: 3.0,
						pulsePeriod: 0,
						usePatternTexture: false
				};
				outlinePass.edgeStrength = params.edgeStrength;
				outlinePass.edgeGlow = params.edgeGlow;
				outlinePass.visibleEdgeColor.set('red');
				outlinePass.hiddenEdgeColor.set('green');

				this.compose.render(scene, camera)  

				return this;
			})();
		}
	
		
		update = function() {
			const {clock, renderer, camera, scene} = privateProps.get(this);
			const elapsedTime = clock.getElapsedTime();
			for (let i = 0; i < this.sceneObjects.length; i++) {
				this.sceneObjects[i].update(elapsedTime)
			}
			this.mesh1.rotation.x += 0.01
			this.mesh1.rotation.y += 0.01
			this.mesh1.rotation.z += 0.01
			this.compose.render(scene, camera)
		}
	}

	return SceneManager;
})()