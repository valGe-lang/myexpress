const db = require('../database');

const tapahtumat = {
  getById: function(id, callback) {
    return db.query('select * from tapahtumat where idtapahtuma=?', [id], callback);
  },
  getAll: function(callback) {
    return db.query('select * from tapahtumat', callback);
  },
  add: function(tapahtumat, callback) {
    return db.query(
      'insert into tapahtumat (tyyppi,kohdetili,viesti,määrä,päiväys) values(?,?,?,?,?)',
      [tapahtumat.tyyppi, tapahtumat.kohdetili, tapahtumat.viesti, tapahtumat.määrä, tapahtumat.päiväys],
      callback
    );
  },
  delete: function(id, callback) {
    return db.query('delete from tapahtumat where idtapahtuma=?', [id], callback);
  },
  update: function(id, tapahtumat, callback) {
    return db.query(
      'update tapahtumat set tyyppi=?,kohdetili=?,viesti=?,määrä=?,päiväys=? where idtapahtuma=?',
      [tapahtumat.tyyppi, tapahtumat.kohdetili, tapahtumat.viesti, tapahtumat.määrä, tapahtumat.päiväys, id],
      callback
    );
  }
};
module.exports = tapahtumat;