precision mediump float;

varying vec2 vTextureCoord;
uniform sampler2D uSampler;

void main(void) {
    vec4 texColor = texture2D(uSampler, vTextureCoord);
    float offset = 2.;
    gl_FragColor = vec4(texColor.x  / offset , texColor.y / offset, texColor.z / offset, texColor.w);
}
