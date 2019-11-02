const FloorMaterial = require("../Materials/Floor");

const Floor = () => {
  // orangish RGB value the four corner of the floor.
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

  // RGB value for the floor shadow.
  const data2 = new Uint8Array([
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255
  ]);

  //  Texture of the floor
  const floorTexture = new THREE.DataTexture(data, 2, 2, THREE.RGBFormat);
  floorTexture.magFilter = THREE.LinearFilter;
  floorTexture.needsUpdate = true;

  //  Texture for the shadow of the floor
  const floorShadowTexture = new THREE.DataTexture(
    data2,
    2,
    2,
    THREE.RGBFormat
  );
  floorShadowTexture.magFilter = THREE.LinearFilter;
  floorShadowTexture.needsUpdate = true;

  // Setup a geometry
  const geometry = new THREE.PlaneBufferGeometry(1.084, 1.084, 10, 10);

  // Setup the material
  const material = FloorMaterial({
    background: floorTexture,
    shadow: floorShadowTexture,
    color: new THREE.Color(0xd04500)
  });

  // Setup a mesh with geometry + material
  const mesh = new THREE.Mesh(geometry, material);

  // rotation to make the plane horizontal.
  mesh.rotation.x = -Math.PI * 0.5;

  return mesh;
};

module.exports = Floor;
