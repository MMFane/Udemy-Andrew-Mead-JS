// const now = new Date()
// const timeStamp = now.getTime()
// const myDate = new Date(timeStamp)
// console.log(`Year: ${now.getFullYear()}`)
// console.log(`Month: ${now.getMonth()}`)
// console.log(`Day of Month: ${now.getDate()}`)
// console.log(`Hours: ${now.getHours()}`)
// console.log(`Minutes: ${now.getMinutes()}`)
// console.log(`Seconds: ${now.getSeconds()}`)

const samBday = new Date('January 21, 1991 03:30:00')
const steveBday = new Date('November 18, 1990 02:15:00')
const now = new Date()

const timeStampSam = (samBday.getTime())
const timeStampSteve = (steveBday.getTime())
const timeStamp = (now.getTime())

const findOlderDate = function (date1, date2) {
    if (date1 < date2) {
        return new Date(date1).toString()
    } else if (date1 > date2) {
        return new Date(date2).toString()
    } else {
        return `The dates are the same`
    }
}

console.log(findOlderDate(timeStampSteve, now))

// MOMENT

// const now = moment()
// now.subtract(1, 'week')
// console.log(now.format('MMMM Do, YYYY'))
// console.log(now.fromNow())

// const nowTimeStamp = now.valueOf()

// console.log(moment(nowTimeStamp).toString())

const now = moment()
now.month(0).date(21).year(1991)
console.log(now.format('MMM D, YYYY'))