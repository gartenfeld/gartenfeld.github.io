// Generated by CoffeeScript 1.9.3
(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  window.AppView = (function(superClass) {
    extend(AppView, superClass);

    function AppView() {
      return AppView.__super__.constructor.apply(this, arguments);
    }

    AppView.prototype.className = 'playArea';

    AppView.prototype.initialize = function() {
      this.render();
      return this.model.on('change', this.render, this);
    };

    AppView.prototype.template = _.template('<div class="dealer-hand-container"></div> <div class="player-hand-container"></div>');

    AppView.prototype.events = {
      'click .hit-button': function() {
        return this.model.get('playerHand').hit();
      },
      'click .stand-button': function() {
        return this.model.stand();
      },
      'click .play-again-button': function() {
        return this.model.reset();
      }
    };

    AppView.prototype.render = function() {
      if (this.model.get('state') !== 'takeBets') {
        this.$el.children().detach();
        this.$el.html(this.template());
        this.$('.player-hand-container').html(new HandView({
          collection: this.model.get('playerHand')
        }).el);
        this.$('.dealer-hand-container').html(new HandView({
          collection: this.model.get('dealerHand')
        }).el);
        this.$el.append(new UserControlsView({
          model: this.model
        }).render());
        new DeckView({
          model: this.model.get("deck"),
          el: $('#deck')
        }).render();
        new BankView({
          model: this.model.get("bank"),
          el: $('#bank')
        }).render();
        return this.$el;
      } else {
        return new BankView({
          model: this.model.get("bank"),
          el: $('#bank')
        }).render();
      }
    };

    return AppView;

  })(Backbone.View);

}).call(this);

//# sourceMappingURL=AppView.js.map
