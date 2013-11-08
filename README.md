## jQuery.whenSlow

There has been [lots of research](http://www.nngroup.com/articles/response-times-3-important-limits/) into response times and [progress indicators](http://ux.stackexchange.com/a/37453/2788).

When you display a status indicator and your operation is pretty quick (<= 1 second), some sort of flickering occurs by showing/hiding the status indicator. This can feel [like the application is glitchy](http://ux.stackexchange.com/q/19607/2788). To prevent this, the status indicator should only be shown once the operation is taking [long enough](http://www.nngroup.com/articles/response-times-3-important-limits/) for the user to notice. This jQuery plugin helps with this problem.

## Download

Grab [the script](https://raw.github.com/TheCloudlessSky/jquery-whenSlow/master/jquery.whenSlow.js), download the [full repository](https://github.com/TheCloudlessSky/jquery-whenSlow/archive/master.zip) or fork it on [GitHub](https://github.com/TheCloudlessSky/jquery-whenSlow).

## Use

```javascript
var view = {
  showLoadingIndicator: function() {
    $(document.body).append('<span>Loading...</span>');
  }
};

// The first parameter to $.whenSlow is always a jQuery Promise.
var promise = $.ajax({ url: '/foo/bars' });

$.whenSlow(promise, function() {
  view.showLoadingIndicator();
});

// or

$.whenSlow(promise, 'showLoadingIndicator', view);
```

## Configuration

You can change `$.whenSlow.defaults.slow` if you want to redefine the minimum duration of a slow operation.