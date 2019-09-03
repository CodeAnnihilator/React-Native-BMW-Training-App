// import React, {Component} from 'react';
// import * as THREE from 'three';
import {MTLLoader, OBJLoader} from 'three-obj-mtl-loader'
// import GeometricGlowMesh from './threex/geometricglowmesh.js'
// import { RenderPass, EffectComposer, OutlinePass } from "three-outlinepass"
// import './App.css';
// import PanelImg from './panel.jpg';

// OBJLoader(THREE);

// export default class App extends Component {

// 	state = {
// 		data: {alpha: 0, beta: 0, gamma: 0},
// 	}

//   componentDidMount() {
// 		var self=this;
// 		document.addEventListener('message', function({data}) {
// 			const newData = JSON.parse(data);
// 			self.setState({data: newData})
// 		})
// 		THREE.Cache.enabled = true;
//     var scene = new THREE.Scene();
//     var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
// 		var renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
// 		renderer.setPixelRatio(window.devicePixelRatio * 1.5);
// 		// renderer.setClearColor( 0x000000, 0 );
//     renderer.setSize( window.innerWidth, window.innerHeight );
//     // document.body.appendChild( renderer.domElement );
//     // use ref as a mount point of the Three.js scene instead of the document.body
//     this.mount.appendChild( renderer.domElement );
// 		var geometry = new THREE.CylinderGeometry( 0.5, 0.5, 0.08, 64 );
// 		geometry.computeVertexNormals(0)
//     var material = new THREE.MeshLambertMaterial( { color: 'white', transparent: true, depthWrite: false } );
// 		var cube = new THREE.Mesh( geometry, material );
		

// 		var loader = new THREE.FontLoader();

// 		loader.load( 'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/fonts/gentilis_bold.typeface.json', function ( font ) {

// 			var textGeo = new THREE.TextGeometry( 'Joy', {
// 				font: font,
// 				size: 0.2,
// 				height: 0,
// 				// curveSegments: 12,
// 				// bevelEnabled: true,
// 				// bevelThickness: 1,
// 				// bevelSize: 8,
// 				// bevelOffset: 0,
// 				// bevelSegments: 5
// 			} );

// 			var textMaterial = new THREE.MeshDepthMaterial({ 
// 				opacity: 0,
// 				side: THREE.DoubleSide, 
// 				depthWrite: true
// 		});

// 			var mesh = new THREE.Mesh( textGeo, textMaterial );
// 			mesh.position.set(-0.17,0.08,0.10);
// 			mesh.rotation.x = -1.5
// 			// mesh.rotation.y = 0
// 			// mesh.rotation.z = 1
// 			cube.add( mesh );
// 		} );

// 		scene.add( cube );
// 		console.log(cube)
		
// 		// var glowMesh	= new GeometricGlowMesh(cube)
// 		// cube.add(glowMesh.object3d)

// 		// var insideUniforms	= glowMesh.insideMesh.material.uniforms
// 		// insideUniforms.glowColor.value.set('white')
// 		// insideUniforms.coeficient.value = 0.1
// 		// insideUniforms.power.value = 0.3


// 		// var outsideUniforms	= glowMesh.outsideMesh.material.uniforms
// 		// outsideUniforms.glowColor.value.set('white')
// 		// outsideUniforms.coeficient.value = 0.1
// 		// outsideUniforms.power.value = 3.2

// 		var hemiLight = new THREE.HemisphereLight( 0xffffff, 0xffffff, 0.4 );
// 		hemiLight.position.set( 0, 500, 10 );
// 		scene.add( hemiLight );

// 		var dirLight = new THREE.DirectionalLight( 0xffffff, 1 );
// 		dirLight.position.set( -1, 0.75, 1 );
// 		dirLight.position.multiplyScalar( 50);
// 		dirLight.name = "dirlight";
// 		// dirLight.shadowCameraVisible = true;

// 		scene.add( dirLight );

// 		dirLight.castShadow = true;
// 		dirLight.shadowMapWidth = dirLight.shadowMapHeight = 1024*2;

// 		var d = 300;

// 		dirLight.shadowCameraLeft = -d;
// 		dirLight.shadowCameraRight = d;
// 		dirLight.shadowCameraTop = d;
// 		dirLight.shadowCameraBottom = -d;

// 		dirLight.shadowCameraFar = 3500;
// 		dirLight.shadowBias = -0.0001;
// 		dirLight.shadowDarkness = 0.35;

// 		camera.position.z = 4;

// 		cube.position.z = 1;



// 		var x = 0, y = 0;

// 		// var heartShape = new THREE.Shape();
		
// 		// heartShape.moveTo( x, y + 5 );
// 		// heartShape.moveTo( x + 10, y + 15 );
// 		// heartShape.bezierCurveTo( x + 5, y + 5, x + 4, y, x, y );
// 		// heartShape.bezierCurveTo( x - 6, y, x - 6, y + 7,x - 6, y + 7 );
// 		// heartShape.bezierCurveTo( x - 6, y + 11, x - 3, y + 15.4, x + 5, y + 19 );
// 		// heartShape.bezierCurveTo( x + 12, y + 15.4, x + 16, y + 11, x + 16, y + 7 );
// 		// heartShape.bezierCurveTo( x + 16, y + 7, x + 16, y, x + 10, y );
// 		// heartShape.bezierCurveTo( x + 7, y, x + 5, y + 5, x + 5, y + 5 );
		
// 		// var geometry = new THREE.ShapeGeometry( heartShape );
// 		// var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
// 		// var mesh = new THREE.Mesh( geometry, material ) ;
// 		// scene.add( mesh );




// 		cube.rotation.x = 0.9;
 
// 		let mtlLoader = new MTLLoader();
		 
// 		let objLoader = new OBJLoader();

// 		var geometry = new THREE.PlaneGeometry( 50, 50, 32 );
// 		var material = new THREE.MeshBasicMaterial( {color: 'black', side: THREE.DoubleSide,opacity: 0} );
// 		var plane = new THREE.Mesh( geometry, material );
// 		plane.position.z = -10
// 		scene.add( plane );


// 		mtlLoader.load(require('./untitled.mtl'), (materials) => {
// 			materials.preload()
// 			objLoader.setMaterials(materials)
// 			objLoader.load(require('./untitled.obj'), (object) => {


// 				var customMaterial = new THREE.ShaderMaterial( 
// 					{
// 							uniforms: 
// 						{ 
// 							"c":   { type: "f", value: 0.0 },
// 							"p":   { type: "f", value: 2.1 },
// 							glowColor: { type: "c", value: new THREE.Color(0xfc0000) },
// 							viewVector: { type: "v3", value: camera.position }
// 						},
// 						vertexShader:`
// 							uniform vec3 viewVector;
// 							uniform float c;
// 							uniform float p;
// 							varying float intensity;
// 							void main() 
// 							{
// 									vec3 vNormal = normalize( normalMatrix * normal );
// 								vec3 vNormel = normalize( normalMatrix * viewVector );
// 								intensity = pow( c - dot(vNormal, vNormel), p );
								
// 									gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
// 							}
// 						`,
// 						fragmentShader: `
// 							uniform vec3 glowColor;
// 							varying float intensity;
// 							void main() 
// 							{
// 								vec3 glow = glowColor * intensity;
// 									gl_FragColor = vec4( glow, 1.0 );
// 							}
// 						`,
// 						side: THREE.BackSide,
// 						blending: THREE.AdditiveBlending,
// 						transparent: true,
// 						alpha: 0.5
// 					}   );


// 					// var smoothCubeGeom = cubeGeom.clone();
// 					// var modifier = new THREE.SubdivisionModifier( 2 );
// 					// modifier.modify( smoothCubeGeom ); 
				
// 					// this.crateGlow = new THREE.Mesh( smoothCubeGeom, customMaterial.clone() );
// 					// 	crateGlow.position = crate.position;
// 					// crateGlow.scale.multiplyScalar(1.5);
// 					// scene.add( crateGlow );

// 					var sphereGeom = new THREE.SphereGeometry(2, 32, 16);
// 				// const mesh = object.children[0];
// 				// var geometry21 = new THREE.Geometry().fromBufferGeometry( mesh.geometry );
// 				// geometry21.computeVertexNormals(2)
// 				// var material = new THREE.MeshLambertMaterial( { color: 'white', transparent: true, depthWrite: false } );
// 				var asd = new THREE.Mesh( sphereGeom, customMaterial );
// 				// console.log(mesh)
// 				// var glowMesh	= new GeometricGlowMesh(asd)
// 				// asd.add(glowMesh.object3d)
// 				//scene.add(asd)
// 				//asd.rotation.x = 0.7

// 			})
// 		})


// 		var compose = new EffectComposer(renderer);
// 		var selectedObjects = [cube]
// 		var renderPass = new RenderPass(scene, camera);
// 		var outlinePass = new OutlinePass(new THREE.Vector2(window.innerWidth, window.innerHeight), scene, camera, selectedObjects);
// 		outlinePass.renderToScreen = true;
// 		outlinePass.selectedObjects = selectedObjects;
		 
// 		compose.addPass(renderPass);
// 		compose.addPass(outlinePass);
// 		var params = {
// 				edgeStrength: 1000,
// 				edgeGlow: 1,
// 				edgeThickness: 1.0,
// 				pulsePeriod: 1,
// 				usePatternTexture: false
// 		};
		 
// 		outlinePass.edgeStrength = params.edgeStrength;
// 		outlinePass.edgeGlow = params.edgeGlow;
// 		outlinePass.visibleEdgeColor.set(0xffffff);
// 		outlinePass.hiddenEdgeColor.set('red');   


//     var animate = function () {
// 			requestAnimationFrame( animate );
// 			cube.rotation.x = 1.2 + (Math.abs(self.state.data.alpha) > 0.3 ? self.state.data.alpha > 0 ? 0.3 : -0.3 : self.state.data.alpha);
// 			//cube.rotation.y = -Math.abs(self.state.data.beta) > 0.2 ? self.state.data.beta > 0 ? 0.2 : -0.2 : self.state.data.beta;
// 			cube.rotation.z = Math.abs(self.state.data.gamma) > 0.4 ? -self.state.data.gamma > 0 ? 0.4 : -0.4 : -self.state.data.gamma;
// 			// renderer.render( scene, camera );
// 			compose.render(scene, camera)
//     };
//     animate();
//   }
//   render() {

//     return (
//       <div>
// 				<div className='container' ref={ref => (this.mount = ref)} />
// 			</div>
//     )
//   }
// }

import React from 'react';
import * as THREE from "three"
import SubdivisionModifier from 'three-subdivision-modifier';

export default class App extends React.Component {

	componentDidMount() {
    var scene = new THREE.Scene();
    let camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 0.1, 10000);
    camera.position.set(-10, 10, 10);
    camera.lookAt(new THREE.Vector3(0, 0, 0));  
    scene.add(camera);

    let light = new THREE.PointLight(0xffffff, 0.8); // white light
    light.position.set(30, 100, 50);
    scene.add(light);

    var renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio * 1.5);
    renderer.setClearColor(0x8d8d8d, 1);
    // renderer.setClearColor( 0x000000, 0 );
    renderer.setSize( window.innerWidth, window.innerHeight );
    this.mount.appendChild( renderer.domElement );

    let geometry = new THREE.CylinderGeometry( 1, 1, 5, 32 );
    let material = new THREE.MeshPhongMaterial({color: 0x00ff00});
    let object = new THREE.Mesh( geometry, material );
    
    let glowMaterial = new THREE.ShaderMaterial({
      uniforms: {
        viewVector: {
          type: "v3",
          value: camera.position
        }
      },
      vertexShader: `
        uniform vec3 viewVector;
        varying float intensity;
        void main() {
            gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4( position, 1.0 );
            vec3 actual_normal = vec3(modelMatrix * vec4(normal, 0.0));
            intensity = pow( dot(normalize(viewVector), actual_normal), 5.0 );
        }
      `,
      fragmentShader: `
        varying float intensity;
        void main() {
          vec3 glow = vec3(0, 1, 0) * intensity;
            gl_FragColor = vec4( glow, 1.0 );
        }
      `,
      side: THREE.FrontSide,
      blending: THREE.AdditiveBlending,
      transparent: true
    });

    let glowGeometry = new THREE.CylinderGeometry( 2, 2, 6, 32 );
    
    let subdivisionModifier = new SubdivisionModifier(1);
    let subdividedGeometry = glowGeometry.clone();
    subdivisionModifier.modify(subdividedGeometry);

    let glowMesh = new THREE.Mesh(subdividedGeometry, glowMaterial);
    object.add(glowMesh);
    object.glow = glowMesh;
    // scene.add(object);





		let mtlLoader = new MTLLoader();
		 
		let objLoader = new OBJLoader();

    mtlLoader.load(require('./untitled.mtl'), (materials) => {
    materials.preload()
    objLoader.setMaterials(materials)
    objLoader.load(require('./untitled.obj'), (object) => {
      const obj1 = object.children[0]
				var geometry21 = new THREE.Geometry().fromBufferGeometry( obj1.geometry );
				// geometry21.computeVertexNormals(2)
      let subdivisionModifier = new SubdivisionModifier(3);
      let subdividedGeometry = geometry21.clone();
      subdivisionModifier.modify(subdividedGeometry);
  
      let glowMesh = new THREE.Mesh(subdividedGeometry, glowMaterial);
      object.add(glowMesh);
      object.glow = glowMesh;
      scene.add(object);
      // var asd = new THREE.Mesh( sphereGeom, customMaterial );
      console.log(obj1)
      // var glowMesh	= new GeometricGlowMesh(asd)
      // asd.add(glowMesh.object3d)
      //scene.add(asd)
      // asd.rotation.x = 0.7

    })
  })


    function update () {
      // let viewVector = new THREE.Vector3().subVectors( camera.position, object.glow.getWorldPosition());
      // object.glow.material.uniforms.viewVector.value = viewVector;
      
      renderer.render(scene, camera);
      requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
  }

	render = () => (
		<div className='container' ref={ref => (this.mount = ref)} />
	)
}