import * as THREE from 'three';

import {RenderPass, EffectComposer, OutlinePass} from '../library/utils/outlinePass';

export default class Composer {
	constructor(scene, camera, renderer, dimensions, objects) {
		const {width, height} = dimensions;

		this.composer = new EffectComposer(renderer);
		this.scene = scene;
		this.camera = camera;

		const elements = [objects.get('left_button')]
		const renderPass = new RenderPass(scene, camera);
		const outlinePass = new OutlinePass(
			new THREE.Vector2(width, height),
			scene,
			camera,
			elements,
		);
		
		outlinePass.renderToScreen = true;

		this.composer.addPass(renderPass);
		this.composer.addPass(outlinePass);

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
	}

	compose() {
		this.composer.render(this.scene, this.camera)
	}
}