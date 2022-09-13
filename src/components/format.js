const formatter = new Intl.RelativeTimeFormat('en')
const diff = new Date() - new Date('10/11/2022')
const x = formatter.format(-diff / (1000 * 60 * 60 * 24), 'days')
console.log(x)
