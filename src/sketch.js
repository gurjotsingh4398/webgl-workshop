// Ensure ThreeJS is in global scope for the 'examples/'
global.THREE = require("three");

// Include any additional ThreeJS examples below
require("three/examples/js/controls/OrbitControls");

const canvasSketch = require("canvas-sketch");

// const addCube = require("./Objects/cube");
const Floor = require("./Objects/Floor");

const settings = {
  // Make the loop animated
  animate: true,
  // Get a WebGL canvas rather than 2D
  context: "webgl",
  scaleToView: true,
  pixelsPerInch: 75
  // orientation: "landscape"
};

const sketch = ({ context }) => {
  // Create a renderer
  const renderer = new THREE.WebGLRenderer({
    canvas: context.canvas,
    antialias: true
  });

  // WebGL background color
  renderer.setClearColor("lightblue", 1);

  // Setup camera
  const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.01,
    1000
  );
  camera.position.set(0.8, 1, 1);
  camera.lookAt(new THREE.Vector3()); //or scene.position which is (0, 0, 0)

  // Setup camera controller
  const controls = new THREE.OrbitControls(camera, context.canvas);
  controls.maxDistance = 2;
  controls.minDistance = 1;
  controls.zoomSpeed = 1;

  // Setup a geometry
  // const geometry = new THREE.PlaneBufferGeometry(100, 100);

  // Setup a material
  // const material = new THREE.MeshBasicMaterial({
  //   color: "#F39250",
  //   side: THREE.DoubleSide
  // });

  // Setup a mesh with geometry + material
  // const mesh = new THREE.Mesh(geometry, material);
  // mesh.rotation.x = -0.5 * Math.PI;

  // Setup your scene
  const scene = new THREE.Scene();

  // for (let i = -5; i < 5; i += 1) {
  //   for (let j = -5; j < 5; j += 1) {
  //     scene.add(addCube(i, 0, j));
  //   }
  // }
  // scene.add(addCube(-1, 0, 0.1));
  // scene.add(addCube(0.5, -0.1, 0.1));

  scene.add(Floor());
  // scene.add(mesh);

  // draw each frame
  return {
    // Handle resize events here
    resize({ pixelRatio, viewportWidth, viewportHeight }) {
      renderer.setPixelRatio(pixelRatio);
      renderer.setSize(viewportWidth, viewportHeight, false);
      camera.aspect = viewportWidth / viewportHeight;
      camera.updateProjectionMatrix();
    },
    // Update & render your scene here
    render({ time }) {
      controls.update();
      renderer.render(scene, camera);
    },
    // Dispose of events & renderer for cleaner hot-reloading
    unload() {
      controls.dispose();
      renderer.dispose();
    }
  };
};

canvasSketch(sketch, settings);
