// Ensure ThreeJS is in global scope for the 'examples/'
global.THREE = require("three");

// Include any additional ThreeJS examples below
require("three/examples/js/controls/OrbitControls");

const canvasSketch = require("canvas-sketch");

const addCube = require("./cube");

const settings = {
  // Make the loop animated
  animate: true,
  // Get a WebGL canvas rather than 2D
  context: "webgl",
  scaleToView: true,
  pixelsPerInch: 75,
  orientation: "landscape"
};

const sketch = ({ context }) => {
  // Create a renderer
  const renderer = new THREE.WebGLRenderer({
    canvas: context.canvas,
    antialias: true
  });

  // WebGL background color
  renderer.setClearColor("lightblue", 1);

  // Setup a camera
  //   this.camera = new THREE.PerspectiveCamera(
  //     50,
  //     this.sizes.viewport.width / this.sizes.viewport.height,
  //     0.01,
  //     30
  // );
  // this.camera.position.set(0.25, 0.35, 0.25);
  // this.camera.lookAt(new THREE.Vector3());

  const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.01,
    30
  );
  camera.position.set(0.25, 0.35, 0.25);
  camera.lookAt(new THREE.Vector3());

  // Setup camera controller
  const controls = new THREE.OrbitControls(camera, context.canvas);

  // Setup a geometry
  const geometry = new THREE.PlaneBufferGeometry(3, 3);

  // Setup a material
  const material = new THREE.MeshBasicMaterial({
    color: "#F39250",
    side: THREE.DoubleSide
    // wireframe: false
  });
  // {color: 0xffff00, }
  // Setup a mesh with geometry + material
  const mesh = new THREE.Mesh(geometry, material);

  // Setup your scene
  const scene = new THREE.Scene();

  scene.add(addCube(-1, 0, 0.1));
  scene.add(mesh);

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
