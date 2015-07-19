// Generated by CoffeeScript 1.9.3
(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  window.UserControlsView = (function(superClass) {
    extend(UserControlsView, superClass);

    function UserControlsView() {
      return UserControlsView.__super__.constructor.apply(this, arguments);
    }

    UserControlsView.prototype.initialize = function() {
      return this.model.on('change:state', this.render, this);
    };

    UserControlsView.prototype.playTemplate = _.template('<button class="hit-button">Hit</button> <button class="stand-button">Stand</button>');

    UserControlsView.prototype.dealerTemplate = _.template('');

    UserControlsView.prototype.endTemplate = _.template('<button class="play-again-button">Play Again</button>');

    UserControlsView.prototype.blackjackTemplate = _.template('<button class="play-again-button">Play Again</button>');

    UserControlsView.prototype.render = function() {
      this.$el.empty();
      if (this.model.get('state') === 'gamePlay') {
        return this.$el.html(this.playTemplate());
      } else if (this.model.get('state') === 'dealerTurn') {
        return this.$el.html(this.dealerTemplate());
      } else if (this.model.get('state') === 'blackjack') {
        return this.$el.html(this.blackjackTemplate());
      } else if (this.model.get('state') === 'finished') {
        return this.$el.html(this.endTemplate());
      }
    };

    return UserControlsView;

  })(Backbone.View);

}).call(this);

//# sourceMappingURL=UserControlsView.js.map
