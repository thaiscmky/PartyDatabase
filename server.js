var Orm = require('./config/orm.js');

var partyNames = new Orm('parties','select', ['party_name']);
partyNames.runQuery()
    .on('fields', function() {
        console.log('Parties:');
    })
    .on('result', function(row){
        console.log(row);
});
var clientNames = new Orm('clients', 'select', ['client_name']);
clientNames.runQuery()
    .on('fields', function() {
        console.log('Clients:');
    })
    .on('result', function(row){
    console.log(row);
});
var grownupParties = new Orm('parties', 'select', ['*', 'party_type', 'grown-up'], 'eq');
grownupParties.runQuery()
    .on('fields', function() {
        console.log('Grownup Parties:');
    })
    .on('result', function(row){
        console.log(row);
    });