var changeColor = function(game) {
    return {
        preload: function(game) {
            game.load.image('berry', 'assets/berry.png');
        },

        update: function(game) {
            var fragmentSrc = [

                "precision mediump float;",

                "varying vec2 vTextureCoord;",
                "uniform sampler2D uSampler;",

                "void main(void) {",

                "vec4 texColor = texture2D(uSampler, vTextureCoord);",

                "if (vTextureCoord.x < 0.1) {",
                "texColor = vec4(" + Math.random() + "," +Math.random() + "," +Math.random() + "," + Math.random() + ");",
                "}",

                "gl_FragColor = texColor;",

                "}"
            ];

            //  Texture must be power-of-two sized or the filter will break
            sprite = game.add.sprite(0, 0, 'berry');

            filter = new Phaser.Filter(game, null, fragmentSrc);

            sprite.filters = [filter];
        }

    };
};

game.state.add('changeColor', changeColor);
