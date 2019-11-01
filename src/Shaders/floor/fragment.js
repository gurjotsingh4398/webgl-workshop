const fragmentShader = `uniform sampler2D tBackground;
uniform sampler2D tShadow;
uniform vec3 uColor;

varying vec2 vUv;
varying vec2 vScreenPosition;

void main()
{
    vec4 backgroundColor = texture2D(tBackground, vUv);

    float shadowAlpha = 1.0 - texture2D(tShadow, vUv).r;
    
    // gl_FragColor = mix(vec4(vec3(0.912,0.536,0.181), 0.5 ), vec4(vec3(0.912,0.659,0.297), 1.0), shadowAlpha)
    gl_FragColor = mix(backgroundColor, vec4(uColor, 1.0), shadowAlpha);
    // gl_FragColor = vec4(vScreenPosition, 1.0, 1.0);
}`;

module.exports = fragmentShader;