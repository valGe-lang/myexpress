const db = require('../database');

const tili = {
  getById: function(id, callback) {
    return db.query('select * from tili where idtili=?', [id], callback);
  },
  getAll: function(callback) {
    return db.query('select * from tili', callback);
  },
  add: function(tili, callback) {
    return db.query(
      'insert into tili (tilinumero,raha) values(?,?)',
      [tili.tilinumero, tili.raha],
      callback
    );
  },
  delete: function(id, callback) {
    return db.query('delete from tili where idtili=?', [id], callback);
  },
  update: function(id, tili, callback) {
    return db.query(
      'update tili set tilinumero=?,raha=? where idtili=?',
      [tili.tilinumero, tili.raha, id],
      callback
    );
  }
};
module.exports = tili;