precision mediump float;

varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform float time;

void main(void) {
    vec4 texColor = texture2D(uSampler, vTextureCoord);
    vec4 result = texColor;
    if (texColor.w > 0.) {
        vec4 sepia = vec4(112./255., 66./255., 20./255., 0.5);
        result = (texColor + sepia) / 2.;
    }

    gl_FragColor = result;
}
