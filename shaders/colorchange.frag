precision mediump float;

varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform float time;

void main(void) {

    vec4 texColor = texture2D(uSampler, vTextureCoord);

    if (vTextureCoord.x < 0.5) {
        float red = mod(time, 10.0) / 10.0;
        texColor = vec4(red, 0.1, 0.1, 1);
    }

    gl_FragColor = texColor;

}
