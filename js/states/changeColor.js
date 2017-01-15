var changeColor = function(game) {
    return {
        preload: function(game) {
            game.load.image('berry', 'assets/berry.png');
            game.load.shader('colorchange', 'shaders/colorchange.frag');
        },

        create: function(game) {
            this.sprite = game.add.sprite(0, 0, 'berry');
            this.sprite.width = 300;
            this.sprite.height = 300;
            this.graphics = game.add.graphics(0, 0);

            filter = new Phaser.Filter(game, null, game.cache.getShader('colorchange'));

            this.sprite.shader = filter;
        },

        render: function() {
            this.graphics.clear();
        }
    };
};

game.state.add('changeColor', changeColor);
