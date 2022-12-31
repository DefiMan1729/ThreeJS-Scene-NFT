import blockchain from "./Web3App.js";
var index = 1;
var supply_print = 0;
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0xffffff } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );


camera.position.z = 25;

function animate() {
    requestAnimationFrame( animate );
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render( scene, camera );

};

animate();

blockchain.then((result) => {

        do {
console.log(index);
index++;
const geometry3 = new THREE.BoxGeometry( 1, 1, 1 );
const material3 = new THREE.MeshBasicMaterial( { color: 0x0000ff } );
const cube3 = new THREE.Mesh( geometry3, material3);
scene.add( cube3 );
cube3.position.set(Math.floor(Math.random() * 5), Math.floor(Math.random() * 5), Math.floor(Math.random() * 5));
          }
          while (index<=result.supply);

    })
