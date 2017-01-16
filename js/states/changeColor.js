var changeColor = function(game) {
    return {
        shaderKeys: [],
        currentShader: -1,

        preload: function(game) {
            this.shaderKeys.push('washout');
            this.shaderKeys.push('overlay');
            this.shaderKeys.push('colorchange');
            this.shaderKeys.push('oldschoolcomp');

            game.load.image('berry', 'assets/berry.png');

            for (var i = 0; i < this.shaderKeys.length; ++i) {
                var key = this.shaderKeys[i];
                game.load.shader(key, 'shaders/' + key + '.frag');
            }
        },

        create: function(game) {
            this.title = game.add.text(200, 0, "", {"fill": "#ffffff"});

            this.sprite = game.add.sprite(0, 100, 'berry');
            this.sprite.width = 300;
            this.sprite.height = 300;

            var original = game.add.sprite(400, 100, 'berry');
            original.width = 300;
            original.height = 300;

            this.setNextShader(game);
            this.game.input.onDown.add(function() {
                this.setNextShader(game);
            }, this);
        },

        render: function() {
            this.sprite.shader.update();
        },

        setNextShader: function(game) {
            var index = ++this.currentShader % this.shaderKeys.length;
            filter = new Phaser.Filter(game, null, game.cache.getShader(this.shaderKeys[index]));
            this.sprite.shader = filter;
            this.title.text = this.shaderKeys[index];
        }
    };
};

game.state.add('changeColor', changeColor);
