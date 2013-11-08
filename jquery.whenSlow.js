//
// jQuery.whenSlow
// https://github.com/TheCloudlessSky/jquery-whenSlow
// 
// Copyright (c) 2013 Adrian Phinney
// Licensed under the MIT license.
//
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

  return promise.always(function() {
    clearTimeout(timeout);
  });
  
};

$.whenSlow.defaults = defaults;

})(jQuery);