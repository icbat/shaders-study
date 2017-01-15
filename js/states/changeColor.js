var changeColor = function(game) {
    return {
        shaderKeys: [],
        currentShader: -1,

        preload: function(game) {
            this.shaderKeys.push('colorchange');
            this.shaderKeys.push('oldschoolcomp');

            game.load.image('berry', 'assets/berry.png');

            for (var i = 0; i < this.shaderKeys.length; ++i) {
                var key = this.shaderKeys[i];
                game.load.shader(key, 'shaders/' + key + '.frag');
            }
        },

        create: function(game) {
            this.sprite = game.add.sprite(0, 0, 'berry');
            this.sprite.width = 300;
            this.sprite.height = 300;
            this.graphics = game.add.graphics(0, 0);
            this.setNextShader(game);
            this.game.input.onDown.add(function() {
                this.setNextShader(game);
            }, this);
        },

        render: function() {
            this.graphics.clear();
            this.sprite.shader.update();
        },

        setNextShader: function(game) {
            var index = ++this.currentShader % this.shaderKeys.length;
            filter = new Phaser.Filter(game, null, game.cache.getShader(this.shaderKeys[index]));
            this.sprite.shader = filter;
        }
    };
};

game.state.add('changeColor', changeColor);
