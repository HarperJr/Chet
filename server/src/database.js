const mongoose = require('mongoose');

exports.connect = function(conf, callback) {
    mongoose.connect(conf.connection, callback);
  }

exports.user = require('./models/user');
