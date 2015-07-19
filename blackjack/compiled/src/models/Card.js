// Generated by CoffeeScript 1.9.3
(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  window.Card = (function(superClass) {
    extend(Card, superClass);

    function Card() {
      return Card.__super__.constructor.apply(this, arguments);
    }

    Card.prototype.initialize = function(params) {
      return this.set({
        revealed: true,
        value: !params.rank || 10 < params.rank ? 10 : params.rank,
        suitName: ['Spades', 'Diamonds', 'Clubs', 'Hearts'][params.suit],
        rankName: (function() {
          switch (params.rank) {
            case 0:
              return 'king';
            case 1:
              return 'ace';
            case 11:
              return 'jack';
            case 12:
              return 'queen';
            default:
              return params.rank;
          }
        })()
      });
    };

    Card.prototype.flip = function() {
      this.set('revealed', !this.get('revealed'));
      return this;
    };

    Card.prototype.setFaceUp = function() {
      return this.set('revealed', true);
    };

    return Card;

  })(Backbone.Model);

}).call(this);

//# sourceMappingURL=Card.js.map
