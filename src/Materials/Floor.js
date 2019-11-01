const shaderFragment = require("../Shaders/floor/fragment.glsl");
const shaderVertex = require("../Shaders/floor/vertex.glsl");

const FloorMaterial = ({ background, shadow, color }) => {
  const uniforms = {
    tBackground: { value: null },
    tShadow: { value: null },
    uColor: { value: null }
  };

  uniforms.tBackground.value = background;
  uniforms.tShadow.value = shadow;
  uniforms.uColor.value = color;

  const material = new THREE.ShaderMaterial({
    wireframe: false,
    transparent: true,
    uniforms,
    vertexShader: shaderVertex,
    fragmentShader: shaderFragment
  });

  return material;
};

module.exports = FloorMaterial;
