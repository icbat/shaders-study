precision mediump float;

varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform float time;

void main(void) {
    vec4 texColor = texture2D(uSampler, vTextureCoord);

    float bandWidth = 0.2;
    float timeStartOffset = 1.;
    float speedOfLine = 2.;
    float timeMoved = (time - timeStartOffset) * speedOfLine;
    float timeLooped = mod(timeMoved, 1.0 + timeStartOffset);
    if (texColor.w > 0.) {
        if (vTextureCoord.x > timeLooped && vTextureCoord.x < timeLooped + bandWidth) {
            texColor = vec4(1, 1, 1 ,1);
        }
    }

    gl_FragColor = texColor;
}
