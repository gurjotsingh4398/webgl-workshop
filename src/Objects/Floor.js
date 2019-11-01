const FloorMaterial = require("../Materials/Floor");

const Floor = () => {
  // RGB value the four corner of the floor.
  const data = new Uint8Array([
    234,
    168,
    96, // Bottom left: #eaa860
    243,
    193,
    125, // Bottom right: #f3c17d
    217,
    132,
    65, // Top left: #d98441
    235,
    169,
    98 // Top right: #eba962
  ]);

  //  Texture of the floor
  const floorTexture = new THREE.DataTexture(data, 2, 2, THREE.RGBFormat);
  floorTexture.magFilter = THREE.LinearFilter;
  floorTexture.needsUpdate = true;
  // console.log(floorTexture);
  // Setup a geometry
  const geometry = new THREE.PlaneBufferGeometry(1.084, 1.084, 10, 10);

  // Setup the material
  const material = FloorMaterial({
    background: floorTexture,
    color: new THREE.Color(0xd04500)
  });

  // Setup a mesh with geometry + material
  const mesh = new THREE.Mesh(geometry, material);

  // rotation to make the plane horizontal.
  mesh.rotation.x = -Math.PI * 0.5;

  return mesh;
};

module.exports = Floor;
