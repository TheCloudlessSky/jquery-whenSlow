(function($) {

var defaults = {
  slow: 500
};

$.whenSlow = function(promise, callback, context) {

  // whenSlow(promise, 'methodName', object);
  if ($.type(callback) === 'string' && $.type(context) === 'object') {
    callback = context[callback];
  }
  // whenSlow(promise, func)
  else if (!context) {
    context = this;
  }

  var timeout = setTimeout(function() {
    if (promise.state() === 'pending') {
      callback.call(context);
    }
  }, defaults.slow);

  promise.always(function() {
    clearTimeout(timeout);
  });

  return promise;

};

$.whenSlow.defaults = defaults;

})(jQuery);