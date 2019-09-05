import * as THREE from 'three';

export default class GeneralObjects {
	constructor(scene, meshes) {
		this.objects = [];
		const mainButtonGeometry = meshes[1].children[0].geometry;
		const sideButtonGeometry = meshes[0].children[0].geometry;
		const leftButtonTextGeometry = meshes[2].children[0].geometry;
		const rightButtonTextGeometry = meshes[3].children[0].geometry;
		const topTextGeometry = meshes[4].children[0].geometry;
		const downTextGeometry = meshes[5].children[0].geometry;
		const mainTextGeometry = meshes[6].children[0].geometry;

		const buttonMaterial = new THREE.MeshLambertMaterial({
			color: 'white',
			transparent: true,
			depthWrite: true,
		});

		const textMaterial = new THREE.MeshBasicMaterial({
			color: 'black',
			side: THREE.DoubleSide,
			opacity: 0,
		});

		const mainButtonText = new THREE.Mesh(mainTextGeometry, textMaterial);
		mainButtonText.name = 'top_button_text';
		mainButtonText.rotation.x = Math.PI / 2;
		this.objects.push(mainButtonText);
		scene.add(mainButtonText);

		const downButtonText = new THREE.Mesh(downTextGeometry, textMaterial);
		downButtonText.name = 'top_button_text';
		downButtonText.rotation.x = Math.PI / 2;
		this.objects.push(downButtonText);
		scene.add(downButtonText);

		const topButtonText = new THREE.Mesh(topTextGeometry, textMaterial);
		topButtonText.name = 'top_button_text';
		topButtonText.rotation.x = Math.PI / 2;
		this.objects.push(topButtonText);
		scene.add(topButtonText);

		const rightButtonText = new THREE.Mesh(rightButtonTextGeometry, textMaterial);
		rightButtonText.name = 'right_button_text';
		rightButtonText.rotation.x = Math.PI / 2;
		this.objects.push(rightButtonText);
		scene.add(rightButtonText);

		const leftButtonText = new THREE.Mesh(leftButtonTextGeometry, textMaterial);
		leftButtonText.name = 'left_button_text';
		leftButtonText.rotation.x = Math.PI / 2;
		this.objects.push(leftButtonText);
		scene.add(leftButtonText);

		const mainButton = new THREE.Mesh(mainButtonGeometry, buttonMaterial);
		mainButton.name = 'main_button';
		mainButton.rotation.x = Math.PI / 2;
		mainButton.scale.set(0.97, 0.97, 0.97)
		this.objects.push(mainButton);
		scene.add(mainButton);

		const downButton = new THREE.Mesh(sideButtonGeometry, buttonMaterial);
		downButton.name = 'left_button';
		downButton.rotation.x = Math.PI / 2;
		this.objects.push(downButton);
		scene.add(downButton);

		const rightDownButton = new THREE.Mesh(sideButtonGeometry, buttonMaterial);
		rightDownButton.name = 'right_button';
		rightDownButton.rotation.x = Math.PI / 2;
		rightDownButton.rotation.y = Math.PI / 2;
		this.objects.push(rightDownButton);
		scene.add(rightDownButton);

		const leftUpperButton = new THREE.Mesh(sideButtonGeometry, buttonMaterial);
		leftUpperButton.name = 'left_button';
		leftUpperButton.rotation.x = Math.PI / 2;
		leftUpperButton.rotation.y = Math.PI;
		this.objects.push(rightDownButton);
		scene.add(leftUpperButton);

		const rightUpperButton = new THREE.Mesh(sideButtonGeometry, buttonMaterial);
		rightUpperButton.name = 'top_button';
		rightUpperButton.rotation.x = Math.PI * 1.5;
		rightUpperButton.rotation.y = Math.PI;
		this.objects.push(rightDownButton);
		scene.add(rightUpperButton);

	}

	get(name) {
		return this.objects.find(obj => obj.name === name)
	}
}