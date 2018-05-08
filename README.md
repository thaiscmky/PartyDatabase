# PartyDatabase

* A holiday party planner application to help create parties for clients whilst also keeping track of all the events that hosted. 

    | id | party_name              | party_type | party_cost | client_id |
    | -- | ----------------------- | ---------- | ---------- | --------- |
    | 1  | Everybody Loves Raymond | tv         | 500        | 1         |
    | 2  | Big Bang Theory         | tv         | 900        | 1         |
    | 3  | Top Gun                 | movie      | 200        | 2         |
    | 4  | Whiskey                 | grown-up   | 300        | 2         |
    | 5  | Cigar                   | grown-up   | 250        | 3         |

    | id | client_name |
    | -- | ----------- |
    | 1  | Bilal       |
    | 2  | Brianne     |
    | 3  | Vincent     |

## Files

* [Schema](Unsolved/schema.sql)
* [Seeds](Unsolved/seeds.sql)

## Instructions

* Create a Node MySQL application with an ORM that executes once the server is launched.

* You will not need Express or Handlebars for this assignment. Use `console.log` to print the data collected to the console.

* Create a MySQL database with the tables and data which were slacked out to you.

* Create a Node app and connect it to MySQL with a `config` folder and with a `connection.js` file inside of that folder.

* Create an `orm.js` file, and make an ORM that will do the following:

  * Console log all the party names.
  * Console log all the client names.
  * Console log all the parties that have a party-type of grown-up.
  * Console log all the clients and their parties.
