'use strict';

const User = require('../models/User'); // eslint-disable-line

function index(req, res) {
	res.json({ data: 'Hello World!' })
}

function getName(req, res) {
	res.json({ data: 'Joe Bruin' })
}

module.exports = {
	index,
	getName
};