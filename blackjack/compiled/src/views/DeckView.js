// Generated by CoffeeScript 1.9.3
(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  window.DeckView = (function(superClass) {
    extend(DeckView, superClass);

    function DeckView() {
      return DeckView.__super__.constructor.apply(this, arguments);
    }

    DeckView.prototype.initialize = function() {};

    DeckView.prototype.render = function() {
      this.$el.empty();
      return this.model.each((function(_this) {
        return function(card, index) {
          var styles;
          card.flip();
          styles = {
            'position': 'absolute',
            'top': 20 + 2 * index,
            'left': 10,
            'box-shadow': 'none'
          };
          return _this.$el.append(new CardView({
            model: card
          }).$el.css(styles));
        };
      })(this));
    };

    return DeckView;

  })(Backbone.View);

}).call(this);

//# sourceMappingURL=DeckView.js.map