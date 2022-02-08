import dotenv from 'dotenv'

console.log('process.cwd(): ', process.cwd())   // funciona en commonjs y module


dotenv.config({

    path: process.cwd() + '/' + process.env.NODE_ENV + '.env'
})     


export default {
    PORT : process.env.PORT || 8080,
    TIPO_DE_PERSISTENCIA: process.env.TIPO || 'MONGODB',    // 'MEM', 'FILE', 'MONGODB'
    STR_CNX:'mongodb+srv://juanmgomez:Ciclon22@jmg.mmdd9.mongodb.net/jmg?retryWrites=true&w=majority' //process.env.CNX || null
}