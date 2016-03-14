/*
Name	: <Persian Relative Date>
Version	: 0.0.1
Author	: <webgodo@gmail.com>
Git		: <https://github.com/webgodo/Persian-Relative-Date>
*/

var persianRelativeDate = (function(undefined) {

  var SECOND = 1000,
      MINUTE = 60 * SECOND,
      HOUR = 60 * MINUTE,
      DAY = 24 * HOUR,
      WEEK = 7 * DAY,
      YEAR = DAY * 365,
      MONTH = YEAR / 12;

  var formats = [
    [ 0.7 * MINUTE, 'به تازگی' ],
    [ 1.5 * MINUTE, 'یک دقیقه پیش' ],
    [ 60 * MINUTE, 'دقیقه پیش', MINUTE ],
    [ 1.5 * HOUR, 'یک ساعت پیش' ],
    [ DAY, 'ساعت پیش', HOUR ],
    [ 2 * DAY, 'دیروز' ],
    [ 7 * DAY, 'روز پیش', DAY ],
    [ 1.5 * WEEK, 'یک هفته پیش'],
    [ MONTH, 'هفته پیش', WEEK ],
    [ 1.5 * MONTH, 'یک ماه پیش' ],
    [ YEAR, 'ماه پیش', MONTH ],
    [ 1.5 * YEAR, 'یک ساعت پیش' ],
    [ Number.MAX_VALUE, 'سال پیش', YEAR ]
  ];

  function relativeDate(input,reference){
    !reference && ( reference = (new Date).getTime() );
    reference instanceof Date && ( reference = reference.getTime() );
    input instanceof Date && ( input = input.getTime() );
    
    var delta = reference - input,
        format, i, len;

    for(i = -1, len=formats.length; ++i < len; ){
      format = formats[i];
      if(delta < format[0]){
        return format[2] == undefined ? format[1] : Math.round(delta/format[2]) + ' ' + format[1];
      }
    };
  }

  return relativeDate;

})();

if(typeof module != 'undefined' && module.exports){
  module.exports = persianRelativeDate;
}
