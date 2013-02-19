// Generated by CoffeeScript 1.3.3
(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  window.Todos = (function(_super) {
    var ENTER_KEY;

    __extends(Todos, _super);

    ENTER_KEY = 13;

    Todos.prototype.elements = {
      '.edit': 'editElem'
    };

    Todos.prototype.events = {
      'click    .destroy': 'destroy',
      'click    .toggle': 'toggle',
      'dblclick .view': 'edit',
      'keyup    .edit': 'blurOnEnter',
      'blur     .edit': 'finishEdit'
    };

    function Todos() {
      this.render = __bind(this.render, this);
      Todos.__super__.constructor.apply(this, arguments);
      this.todo.bind('change', this.render);
      this.todo.bind('destroy', this.release);
    }

    Todos.prototype.render = function() {
      this.el.render(this.todo, {
        toggle: {
          checked: function(p) {
            p.element.checked = this.completed;
          }
        }
      });
      this.el.toggleClass('completed', this.todo.completed);
      this.refreshElements();
      return this;
    };

    Todos.prototype.destroy = function() {
      return this.todo.destroy();
    };

    Todos.prototype.toggle = function() {
      return this.todo.updateAttributes({
        completed: !this.todo.completed
      });
    };

    Todos.prototype.edit = function() {
      this.el.addClass('editing');
      return this.editElem.focus();
    };

    Todos.prototype.finishEdit = function() {
      var val;
      this.el.removeClass('editing');
      val = $.trim(this.editElem.val());
      if (val) {
        return this.todo.updateAttributes({
          title: val
        });
      } else {
        return this.todo.destroy();
      }
    };

    Todos.prototype.blurOnEnter = function(e) {
      if (e.keyCode === ENTER_KEY) {
        return e.target.blur();
      }
    };

    return Todos;

  })(Spine.Controller);

}).call(this);