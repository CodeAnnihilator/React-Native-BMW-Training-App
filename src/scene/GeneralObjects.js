import * as THREE from 'three';

export default class GeneralObjects {
	constructor(scene, meshes) {
		console.log(meshes)
		this.objects = [];
		const leftButtonGroup = meshes[0].clone();
		const leftButtonGeometry = leftButtonGroup.children[0].geometry;
		const leftButtonMaterial = new THREE.MeshLambertMaterial({
			color: 'white',
			transparent: true,
			depthWrite: false,
		});
		const leftButton = new THREE.Mesh(leftButtonGeometry, leftButtonMaterial);
		leftButton.name = 'left_button';
		leftButton.rotation.x = 0.9;
		this.objects.push(leftButton);
		scene.add(leftButton);
	}

	get(name) {
		return this.objects.find(obj => obj.name === name)
	}
}