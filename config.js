//https://www.npmjs.com/package/dotenv?activeTab=readme
import dotenv from 'dotenv'

//dotenv.config()     // lee el archivo .env

//console.log('__dirname: ', __dirname)   // sólo funciona en commonjs
console.log('process.cwd(): ', process.cwd())   // funciona en commonjs y module

// lee el archivo indicado
dotenv.config({
    //path : 'miconfig.env'
    //path: process.cwd() + '/' + 'miconfig.env'
    path: process.cwd() + '/' + process.env.NODE_ENV + '.env'
})     


export default {
    PORT : process.env.PORT || 8080,
    TIPO_DE_PERSISTENCIA:'MONGODB', //process.env.TIPO || 'MEM',    // 'MEM', 'FILE', 'MONGODB'
    STR_CNX:'mongodb+srv://juanmgomez:Ciclon22@jmg.mmdd9.mongodb.net/jmg?retryWrites=true&w=majority' //process.env.CNX || null
}