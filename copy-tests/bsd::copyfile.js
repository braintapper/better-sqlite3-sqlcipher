'use strict';
const native = require('../build/better_sqlite3.node');

native.copyfile('content.db', 'copy.db');
