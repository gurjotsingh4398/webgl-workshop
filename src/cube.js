const addCube = (x, y, z) => {
  var geometry = new THREE.BoxBufferGeometry(0.3, 0.3, 0.1);
  var material = new THREE.MeshBasicMaterial({ color: "blue" });

  var cubeA = new THREE.Mesh(geometry, material);
  cubeA.position.set(x, y, z);

  //   var cubeB = new THREE.Mesh(geometry, material);
  //   cubeB.position.set(-100, -100, 0);

  //   var group = new THREE.Group();
  //   group.add(cubeA);
  //   group.add(cubeB);

  //   scene.add(group);
  return cubeA;
};

module.exports = addCube;
