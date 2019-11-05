const shaderFragment = require("../Shaders/blur/fragment.glsl");
const shaderVertex = require("../Shaders/blur/vertex.glsl");

module.exports = {
  uniforms: {
    tDiffuse: { type: "t", value: null },
    uResolution: { type: "v2", value: null },
    uStrength: { type: "v2", value: null }
  },
  vertexShader: shaderVertex,
  fragmentShader: shaderFragment
};
