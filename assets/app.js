(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.3"; // &appId=1649825941920458
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

(function($) {
    $(function() {
        var now = new Date();
        var strongCircleDate = new Date("2015-06-23T00:00:00.000Z");

        var rawCountdown = strongCircleDate - now;
        var dayConstant = 1000*60*60*24;
        var hourConstant = 1000*60*60;
        var minuteConstant = 1000*60;

        var daysCountdown = Math.trunc(rawCountdown / dayConstant);
        var hours = rawCountdown % dayConstant;
        var hourCountdown = Math.trunc(hours / hourConstant);
        var minutes = hours % hourConstant;
        var minuteCountdown = Math.trunc(minutes / minuteConstant);

        $('.countdown__clock--days').text(daysCountdown);
        $('.countdown__clock--hours').text(hourCountdown);
        $('.countdown__clock--minutes').text(minuteCountdown);
    });
})(jQuery);
