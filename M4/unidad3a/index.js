var moment = require('moment')

moment.locale('es')
console.log('Naci '+ moment('26/11/1992','DD/MM/YYYY').fromNow())