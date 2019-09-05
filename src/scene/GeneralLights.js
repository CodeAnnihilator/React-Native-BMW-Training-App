import * as THREE from 'three';

export default class GeneralLights {
	constructor(scene) {
		const hemiLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.4);
		hemiLight.position.set(0, 500, 10);
		scene.add(hemiLight);

		const dirLight = new THREE.DirectionalLight(0xffffff, 1);
		dirLight.position.set(0, 0, 10);
		dirLight.position.multiplyScalar(50);
		dirLight.name = 'dirlight';
		scene.add(dirLight);
	}

	update() {
		console.log('updated')
	}
}