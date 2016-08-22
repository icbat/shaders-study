var changeColor = function(game) {
    return {
        preload: function(game) {
            game.load.image('berry', 'assets/berry.png');
        },

        create: function(game) {
            this.sprite = game.add.sprite(0, 0, 'berry');
            this.sprite.width = 300;
            this.sprite.height = 300;
            this.graphics = game.add.graphics(0, 0);
        },

        render: function() {
            this.graphics.clear();
            var howMuchShading = Math.sin(new Date().getTime() / 100);
            var fragmentSrc = [

                "precision mediump float;",

                "varying vec2 vTextureCoord;",
                "uniform sampler2D uSampler;",

                "void main(void) {",

                "vec4 texColor = texture2D(uSampler, vTextureCoord);",

                "if (vTextureCoord.x < "+howMuchShading+") {",
                "texColor = vec4(" + Math.random() + "," +Math.random() + "," +Math.random() + "," + Math.random() + ");",
                "}",

                "gl_FragColor = texColor;",

                "}"
            ];

            //  Texture must be power-of-two sized or the filter will break


            filter = new Phaser.Filter(game, null, fragmentSrc);

            this.sprite.shader = filter;
        }
    };
};

game.state.add('changeColor', changeColor);
