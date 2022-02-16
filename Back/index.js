const cors = require('cors');
const express = require('express'); // <-----------
const morgan = require('morgan'); // ----
//const fetch = require('node-fetch');
const bodyParser = require('body-parser');
require('dotenv').config();
const connection = require('./db.js');

const app = express();

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use('/public', express.static('public'));

app.get('/initial', (req, res) => {
	let sql = 'SELECT * FROM initial';

	connection.query(sql, (err, result) => {
		if (err) throw err;
		return res.status(200).json(result);
	});
	console.log(`GET on /Initial`);
});

app.put('/map', (req, res) => {
	let sql = 'SELECT * FROM';
	const value = [req.body.id];

	if (value == 1) {
		sql += ' bourgpalette';
	} else if (value == 2) {
		sql += ' centrepokemon';
	} else if (value == 3) {
		sql += ' shop';
	}

	connection.query(sql, (err, result) => {
		if (err) throw err;
		return res.status(200).json(result);
	});
	console.log(`GET on /Map/${value}`);
});

let server = app.listen(3030, () => {
	console.log('listening on port', server.address().port);
});
