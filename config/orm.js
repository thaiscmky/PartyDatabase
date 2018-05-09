var connection = require('./connection.js');

function Orm(table, action, subjects, condition){
  this.sql = '';
  this.args = subjects !== null ? subjects : [];
  this.table = table;
  this.action = action;
  this.condition = condition;
}

Orm.prototype.constructor = Orm;

Orm.prototype.evaluateAction = function(){
    var sql = this.sql;
    switch(this.action.toLowerCase()){
        case 'select':
            this.sql = sql.concat(sql, this.args !== null && this.args[0] !== '*' ? 'SELECT ?? FROM ?? ' : 'SELECT * FROM ?? ');
            break;
        case 'insert':
            this.sql = sql.concat(sql, 'INSERT INTO ?? SET ? ');
            break;
        case 'update':
            this.sql = sql.concat(sql, 'UPDATE ?? SET ? ');
            break;
        case 'delete':
            this.sql = sql.concat(sql, 'DELETE FROM ?? ');
    }

};
Orm.prototype.evaluateCondition = function() {
    var sql = this.sql;
    switch(this.condition){
        case 'eq':
            this.sql = sql.concat(sql, 'WHERE ?? = ? ');
            break;
        case 'gt':
            this.sql = sql.concat(sql, 'WHERE ?? > ? ');
            break;
        case 'gte':
            this.sql = sql.concat(sql, 'WHERE ?? >= ? ');
            break;
        case 'lt':
            this.sql = sql.concat(sql, 'WHERE ?? < ? ');
            break;
        case 'lte':
            this.sql = sql.concat(sql, 'WHERE ?? <= ? ');
            break;
        case 'like':
            this.sql = sql.concat(sql, 'WHERE ?? LIKE ? ');
            break;
    }
};
Orm.prototype.runQuery = function(){
    if(this['action'] !== null)
        this.evaluateAction();
    if(this['condition'] !== null)
        this.evaluateCondition();

    if(this.table !== null)   this.args.unshift(this.table);
    if(this.sql.indexOf('SELECT') !== -1){
        var temp = [this.args[1], this.args[0]];
        this.args[0] = temp[0];
        this.args[1] = temp[1];
    }
    return connection.query(this.sql, this.args);
};

module.exports = Orm;