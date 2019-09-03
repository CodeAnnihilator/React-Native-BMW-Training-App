import * as THREE from 'three';
import createAtmosphereMaterial from './atmospherematerial.js';
import dilateGeometry from './dilategeometry.js'

export default function(mesh) {
	var object3d	= new THREE.Object3D();

	var geometry	= mesh.geometry.clone()
	dilateGeometry(geometry, 0.01)
	var material	= createAtmosphereMaterial()
	material.uniforms.glowColor.value	= new THREE.Color('cyan')
	material.uniforms.coeficient.value	= 1.1
	material.uniforms.power.value		= 1.4
	var insideMesh	= new THREE.Mesh(geometry, material );
	object3d.add( insideMesh );

	// eslint-disable-next-line
	var geometry	= mesh.geometry.clone()
	dilateGeometry(geometry, 0.1)
	// eslint-disable-next-line
	var material	= createAtmosphereMaterial()
	material.uniforms.glowColor.value	= new THREE.Color('cyan')
	material.uniforms.coeficient.value	= 0.1
	material.uniforms.power.value		= 1.2
	material.side	= THREE.BackSide
	var outsideMesh	= new THREE.Mesh( geometry, material );
	object3d.add( outsideMesh );

	this.object3d	= object3d
	this.insideMesh	= insideMesh
	this.outsideMesh= outsideMesh
}