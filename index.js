function happyHolidays() {
  var happy = "Happy holidays!"
  return happy
}
function happyHolidaysTo(name) {
  var name2 = "Joe"
  var holiday = `Happy holidays, ${name}!`
  var you = `Happy holidays, you!`
  if (name==="Joe") {
  return holiday; 
  } else return you
}
function happyHolidayTo(holiday, name) {
  var day = "Independence Day"
  var name2 = "Joe"
  var you = `Happy Independence Day, you!`
  var statement = `Happy ${holiday}, ${name}!`
  if (name==="Joe") {
    return statement
    } else 
      return you 
  }
  function holidayCountdown(holiday, days) {
    var mothersDay = "Mother's Day"
    var days2 = "20"
    var sentence = "It's 20 Days until Mother's Day!"
    var sentence2 = `It's ${days} days until ${holiday}!`
    if (days===days2)
      return sentence2
  }