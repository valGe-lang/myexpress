const db = require('../database');

const kortti = {
  getById: function(id, callback) {
    return db.query('select * from kortti where idkortti=?', [id], callback);
  },
  getAll: function(callback) {
    return db.query('select * from kortti', callback);
  },
  add: function(kortti, callback) {
    return db.query(
      'insert into kortti (kortin_pin,kortinnumero,asiakas_idasiakas,tili_idtili) values(?,?,?,?)',
      [kortti.kortin_pin, kortti.kortinnumero,asiakas_idasiakas,tili_idtili ],
      callback
    );
  },
  delete: function(id, callback) {
    return db.query('delete from kortti where idkortti=?', [id], callback);
  },
  update: function(id, kortti, callback) {
    return db.query(
      'update kortti set kortin_pin=?,kortinnumero=?,asiakas_idasiakas=?,tili_idtili=? where idkortti=?',
      [kortti.kortin_pin, kortti.kortinnumero, kortti.asiakas_idasiakas,kortti.tili_idtili, id],
      callback
    );
  }
};
module.exports = kortti;