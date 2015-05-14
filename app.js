var now = new Date()

var strongCircleDate = new Date("2015-06-23 EDT")

var rawCountdown = strongCircleDate - now
var dayConstant = 1000*60*60*24
var hourConstant = 1000*60*60
var minuteConstant = 1000*60

var daysCountdown = Math.trunc(rawCountdown / dayConstant)
var hours = rawCountdown % dayConstant
var hourCountdown = Math.trunc(hours / hourConstant)
var minutes = hours % hourConstant
var minuteCountdown = Math.trunc(minutes / minuteConstant)

$('.countdown__clock--days').text(daysCountdown)
$('.countdown__clock--hours').text(hourCountdown)
$('.countdown__clock--minutes').text(minuteCountdown)
