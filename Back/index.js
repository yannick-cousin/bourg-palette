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

app.get('/bourg', (req, res) => {
	const sql = 'SELECT * FROM bourgpalette';

	connection.query(sql, (err, result) => {
		if (err) throw err;
		return res.status(200).json(result);
	});
	console.log('GET on /BourgPalette');
});

let server = app.listen(3030, () => {
	console.log('listening on port', server.address().port);
});
