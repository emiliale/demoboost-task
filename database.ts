import mysql from 'mysql2'

export = {
    development:
        mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "root",
            database: "demoboosttask",
        })
    ,
    production:
        mysql.createConnection("mysql://rfzzbed04z80apx7:qb89i6el8861z931@d3y0lbg7abxmbuoi.chr7pe7iynqr.eu-west-1.rds.amazonaws.com:3306/ao9xj0eyrku1qc0s")
}