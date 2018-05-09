var connection = require('./connection.js');

var Orm = function(action, subjects, condition){
  this.sql = '';
  this.args = subjects !== null ? subjects : [];
  this.table = null;
  if(action !== null)
      this.evaluateAction(action);
  if(condition !== null)
      this.evaluateCondition(condition);
  this.setTable = function(tablename){
      this.table = tablename;
  };
  this.evaluateAction = function(action){
      switch(action.toLowerCase()){
          case 'select':
              this.sql.concat(this.sql, subjects !== null ? 'SELECT ?? FROM ?? ' : 'SELECT * FROM ?? ');
              break;
          case 'insert':
              this.sql.concat(this.sql, 'INSERT INTO ?? SET ? ');
              break;
          case 'update':
              this.sql.concat(this.sql, 'UPDATE ?? SET ? ');
              break;
          case 'delete':
              this.sql.concat(this.sql, 'DELETE FROM ?? ');
      }
  };
  this.evaluateCondition = function(condition) {

      switch(condition){
          case 'eq':
              this.sql.concat(this.sql, 'WHERE ?? = ? ');
              break;
          case 'gt':
              this.sql.concat(this.sql, 'WHERE ?? > ? ');
              break;
          case 'gte':
              this.sql.concat(this.sql, 'WHERE ?? >= ? ');
              break;
          case 'lt':
              this.sql.concat(this.sql, 'WHERE ?? < ? ');
              break;
          case 'lte':
              this.sql.concat(this.sql, 'WHERE ?? <= ? ');
              break;
          case 'like':
              this.sql.concat(this.sql, 'WHERE ?? LIKE ? ');
              break;
      }
  };
  this.runQuery = function(){
      if(this.table !== null)   this.args.unshift(this.table);
      if(this.sql.indexOf('SELECT') !== -1){
          var temp = [this.args[1], this.args[0]];
          this.args[0] = temp[0];
          this.args[1] = temp[1];
      }
      connection.query(this.sql, this.args, function(error, results, fields){
          if(error) throw error;
          return results;
      });
  }
};

module.exports = Orm;