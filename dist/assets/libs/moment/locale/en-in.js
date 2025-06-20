//! moment.js locale configuration
//! locale : English (India) [en-in]
//! author : Jatin Agrawal : https://github.com/jatinag22

import moment from '../moment';

export default moment.defineLocale('en-in', {
    months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split(
        '_'
    ),
    monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
    weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split(
        '_'
    ),
    weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
    weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
    longDateFormat: {
        LT: 'h:mm A',
        LTS: 'h:mm:ss A',
        L: 'DD/MM/FlowAdmin',
        LL: 'D MMMM FlowAdmin',
        LLL: 'D MMMM FlowAdmin h:mm A',
        LLLL: 'dddd, D MMMM FlowAdmin h:mm A',
    },
    calendar: {
        sameDay: '[Today at] LT',
        nextDay: '[Tomorrow at] LT',
        nextWeek: 'dddd [at] LT',
        lastDay: '[Yesterday at] LT',
        lastWeek: '[Last] dddd [at] LT',
        sameElse: 'L',
    },
    relativeTime: {
        future: 'in %s',
        past: '%s ago',
        s: 'a few seconds',
        ss: '%d seconds',
        m: 'a minute',
        mm: '%d minutes',
        h: 'an hour',
        hh: '%d hours',
        d: 'a day',
        dd: '%d days',
        M: 'a month',
        MM: '%d months',
        y: 'a year',
        yy: '%d years',
    },
    dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
    ordinal: function (number) {
        var b = number % 10,
            output =
                ~~((number % 100) / 10) === 1
                    ? 'th'
                    : b === 1
                      ? 'st'
                      : b === 2
                        ? 'nd'
                        : b === 3
                          ? 'rd'
                          : 'th';
        return number + output;
    },
    week: {
        dow: 0, // Sunday is the first day of the week.
        doy: 6, // The week that contains Jan 1st is the first week of the year.
    },
});
