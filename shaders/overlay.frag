precision mediump float;

varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform float time;

void main(void) {
    vec4 texColor = texture2D(uSampler, vTextureCoord);

    if (texColor.w > 0.) {
        texColor = vec4(1, 0., vTextureCoord.x, 1);
    }

    gl_FragColor = texColor;
}
