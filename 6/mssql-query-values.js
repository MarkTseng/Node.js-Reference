var sql = require('mssql');

var conn = new sql.Connection({
    user: 'fred',
    password: '12345678',
    server: 'localhost',
    database: 'mydb'
}, function(err) {

    if (err) {
        console.log(err);
        return
    }

	var req = new sql.Request(conn);
	req.input('name', sql.VarChar, 'Fred');
	var sqlStr = 'SELECT * FROM myTable WHERE name = @name';
	req.query(sqlStr, function(err, rs) {
			console.dir(rs);
		});
	});
});
