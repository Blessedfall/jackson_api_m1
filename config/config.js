const env = process.env.NODE_ENV || 'dev';

const config = () => {
    switch (env) {
        case 'dev' :
            return {
                dbString : 'mongodb+srv://blessedfall_:12345678910@cluster0.3io9o.mongodb.net/banco_m1?retryWrites=true&w=majority',
                jwtPass : 'starwarsémelhorquestartrek',
                jwtExpires : '1d'
            }
        case 'hml' :
            return {
                dbString : 'mongodb+srv://blessedfall_:12345678910@cluster0.3io9o.mongodb.net/banco_m1?retryWrites=true&w=majority',
                jwtPass : 'starwarsémelhorquestartrek',
                jwtExpires : '1d'
            }
        case 'prod' :
            return {
                dbString : 'mongodb+srv://blessedfall_:12345678910@cluster0.3io9o.mongodb.net/banco_m1?retryWrites=true&w=majority',
                jwtPass : 'starwarsémelhorquestartrek',
                jwtExpires : '1d'
            }
    }
};

console.log(`Iniciando a API em ambiente ${env.toUpperCase()}`);

module.exports = config();