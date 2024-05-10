import mysql from '/Users/miguelzao/Library/Caches/typescript/5.4/node_modules/@types/mysql/index'


const connection = mysql.createConnection({
    host: 'localhost',
    user: '',
    password: '',
    database: ''
})

connection.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
        return;
    }
    console.log('Conexão bem-sucedida ao banco de dados MySQL!');
});
