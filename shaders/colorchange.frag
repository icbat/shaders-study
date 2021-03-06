precision mediump float;

varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform float time;

void main(void) {
    vec4 texColor = texture2D(uSampler, vTextureCoord);
    if (texColor.w > 0.) {
        float variable = abs(sin(time));
        if (vTextureCoord.x < variable && vTextureCoord.y < variable) {
            texColor = vec4(0.5, 0.1, 0.1, 0.5);
        }
    }

    gl_FragColor = texColor;
}
